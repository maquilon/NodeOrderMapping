const mongoist = require('mongoist');
const db = mongoist("mongodb://localhost:27017/classwallet", "")

async function findUsers() {
    return await db.users.aggregate([
        {
            $project: {
                purses: { "$objectToArray": "$purses" },
                type: "$role.type",
                userIdGl: "$user_page.id",
                firstName: "$firstName",
                lastName: "$lastName",
                email: "$profile.email",
                school: "$role.info.school.schoolName",
                districtId: "$role.info.school.districtId"
            }
        },
        {
            $unwind: "$purses"
        },
        {
            $match: { "purses.v.amount": { $gt: 0 } }
        }
    ])
}

async function createReport(users, districts) {
    let userList = [];
    var list = users.map((u, i) => {
        let distName = '';
        let distState = '';

        if (u.districtId === undefined) {
            distName = ''
            distState = ''
        } else {
            distName = districts[u.districtId].name
            distState = districts[u.districtId].state
        }

        userList.push(
            {
                "type": u.type,
                "district": distName,
                "districtState": distState,
                "userIdGl": u.userIdGl,
                "firstName": u.firstName,
                "lastName": u.lastName,
                "email": u.email,
                "school": u.school,
                "amount": u.purses.v.amount,
                "distribution": u.purses.v.name
            }
        )
    })
    return userList
}

async function findDistricts() {
    let districts = {};
    districtList = await db.districts.find({});
    districtList.forEach(d => { districts[d._id.valueOf()] = d; })
    return districts;
}

async function start() {
    try {
        let districts = await findDistricts();
        let users = await findUsers();

        let report = await createReport(users, districts);
        // To display the detail of a property with large objects
        console.log(require("util").inspect(report, false, 10));

    } catch (err) {
        console.log('Error -->', err)
    }
}

start();
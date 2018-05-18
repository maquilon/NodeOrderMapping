db.users.aggregate([
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
        $lookup: 
        {
            from: "districts",
            localField: "districtId",
            foreignField: "_id",
            as: "districts"
        }
    }
    ,
    {
        $unwind: "$purses"
    },
    {
        $match: { "purses.v.amount": { $gt: 0 } }
    }
//    ,
//     {
//         $group: {
//             _id: {
//                 id: "$_id",
//                 balance: { $sum: "$purses.v.amount" },
//                 type: "$type",
//                 firstName: "$firstName",
//                 lastName: "$lastName",
//                 email: "$email",
//                 school: "$school"
//             }
//         }
//     }
])
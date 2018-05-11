const mongoist = require('mongoist');
const db = mongoist("mongodb://localhost:27017/test", "")
const ObjectId = require('mongodb').ObjectID;


async function run() {

    var start = new Date().getTime();

    var bulk = db.testDocs.initializeUnorderedBulkOp()

    for (var i = 0; i < 3000000; i++) {
        //data.push({ insertOne : { 'document' : { 'name' : 'John', 'lastName' : 'Smith' } } })    
        bulk.insert({ 'document' : { 'name' : 'John', 'lastName' : 'Smith' } })
    }

    console.log("START")

    await bulk.execute();

    var end = new Date().getTime();

    console.log((end-start)/1000);

    process.exit();


      

}

run();





async function findOrders() {
    return await db.ordersTemp.find({});
}

async function mapOrders(orders) {
    let newOrder = {};
    let d = new Date();

    orders.forEach((o, i) => {
        newOrder.userId     = o._id.userId,
        newOrder.userName   = o._id.userName,
        newOrder.status     = o._id.status,
        newOrder.created    = convertToJSONDate(o._id.date),
        newOrder.modified   = d,
        newOrder.shipping   = o._id.shipping,
        newOrder.shipping   = o._id.shipping,
        newOrder.tax        = o._id.tax,
        newOrder.total      = o.order.total,
        newOrder.schoolId   = o.order.schoolId,
        newOrder.districtId = o.order.districtId,
        newOrder.title      = o.order.title,
        newOrder.discount   = o.order.discount,
        newOrder.type       = o.order.type,
        newOrder.completed  = d,
        newOrder.vendor     = o.order.vendor

        // Calculating totals per distribution
        const dist = o.order.distributions;
        const accumulatedTotals = [];
        for ( let i = 0; i < dist.length; i++ ) {
            const d = dist[i]
            accumulatedTotals[ d.id ] = (accumulatedTotals[ d.id ] || 0) + d.amount
        }

        const result = []
        for (keys in accumulatedTotals) {
            if (hasOwnProperty.call(accumulatedTotals, keys)) {
                result.push({ "id" : keys, "amount" : accumulatedTotals[keys] });
            }
        }
        newOrder.distributions = result;

    });
    return newOrder;
}

function convertToJSONDate(strDate) {
    var splitted = strDate.split("-");
    var dt = new Date(splitted[0], splitted[1], splitted[2]);
    return new Date(dt);
}

async function start() {
    try {
        let tempOrders = await findOrders();
        let newOrder = await mapOrders(tempOrders);
        console.log(newOrder);
    } catch (err) {
        console.log('Error -->', err)
    }
    process.exit();
}

//start();
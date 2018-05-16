const mongoist = require('mongoist');
const db = mongoist("mongodb://localhost:27017/classwallet", "")
const ObjectId = require('mongodb').ObjectID;

async function findOrders() {
    return await db.ordersTemp.find({});
}

async function mapOrders(orders) {
    let d = new Date();

    var newOrders = orders.map((o, i) => {
        o.order.created = d;
        o.order.modified = d;
        o.order.completed = d;
        o.order.migratedReturns = true;

        // Calculating totals per distribution
        const dist = o.order.distributions;
        const accumulatedTotals = [];
        for (let i = 0; i < dist.length; i++) {
            const d = dist[i]
            accumulatedTotals[d.id] = (accumulatedTotals[d.id] || 0) + d.amount
        }
        const result = []
        for (keys in accumulatedTotals) {
            if (hasOwnProperty.call(accumulatedTotals, keys)) {
                result.push({ "id": keys, "amount": accumulatedTotals[keys] });
            }
        }
        o.order.distributions = result;

        return o;
    });

    return newOrders;
}

async function updateOrders(orders) {
    // start bulk update
    var bulk = db.orders.initializeUnorderedBulkOp()
    let itemHash = [];

    orders.map((o, i) => { 
        let incUpdate = {
            $inc: {
                shipping: o.order.shipping,
                tax: o.order.tax
            }
        };

        // Creating ItemHash table with vendor items
        o.order.vendor.items.forEach((v, i) => {
            if (itemHash[v.itemdId]) {
                itemHash[v.itemdId]["quantity"] += v.quantity;
            } else {
                itemHash[v.itemdId] = {
                    quantity: v.quantity
                }
            }
        })

        // This is going to find any items that need to be updated based on the items that are returned from the hash  
        o.original[0].vendor.items.forEach((oi, i) => {
            if (itemHash[oi.itemId]) {
                incUpdate["$inc"][`vendor.items[${i}].quantity`] = itemHash[oi.itemId].quantity;
            }
        })

        bulk.find({ _id: o.original[0]._id })
            .updateOne(
                {
                    $set: { "distributions": o.original[0].distributions, total: o.original[0].total },
                    incUpdate                
                }
            )
    })

    console.log(require("util").inspect(bulk, false, 10));
    //await bulk.execute()
}

function convertToJSONDate(strDate) {
    var splitted = strDate.split("-");
    var dt = new Date(splitted[0], splitted[1], splitted[2]);
    return new Date(dt);
}

async function start() {
    try {
        // Getting the vendor items to be updated on order
        let tempOrders = await findOrders();
        let newOrders = await mapOrders(tempOrders);
        let updated = updateOrders(newOrders);
        
        // To display the detail of a property with large objects
        //console.log(require("util").inspect(newOrders, false, 10));

    } catch (err) {
        console.log('Error -->', err)
    }
    process.exit();
}

start();
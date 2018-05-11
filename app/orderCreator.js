const mongoist = require('mongoist');
const db = mongoist("mongodb://localhost:27017/classwallet", "")
const ObjectId = require('mongodb').ObjectID;

async function findOrders() {
    return await db.ordersTemp.find({});
}

async function mapOrders(orders) {
    
    let d = new Date();

    var newOrders = orders.map((o, i)=>{

        o.order.created = d;
        o.order.modified = d;
        o.order.completed = d;
        o.order.migratedReturns = true;

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

        o.order.distributions = result;

        return o;
    });

    return newOrders;
}

function convertToJSONDate(strDate) {
    var splitted = strDate.split("-");
    var dt = new Date(splitted[0], splitted[1], splitted[2]);
    return new Date(dt);
}

async function start() {
    try {
        let tempOrders = await findOrders();
        let newOrders = await mapOrders(tempOrders);

        console.log( require("util").inspect(newOrders, false, 10) ); // To display the detail of a property with large objects

        // let itemHash = {};
        // newOrders.


        //bulk updates 


    } catch (err) {
        console.log('Error -->', err)
    }
    process.exit();
}

start();



// var itemHash = {}
// // Loop from ordersTemp
// order.vendor.items.forEach((v,i)=>{
//     if(itemHash[v.itemdId]){
//         itemHash[v.itemdId]["quantity"] += v.quantity;        
//     }else{
//         itemHash[v.itemdId] = {
//             quantity: v.quantity
//         }
//     }
// }) 
const mongoist = require('mongoist');
const db = mongoist("mongodb://localhost:27017/classwallet","")
const ObjectId = require('mongodb').ObjectID;

async function findOrders()  {
    return await db.orders.aggregate([
        { $match: { history: { $exists: true }, total : { $gt: 0 }, "_id" : ObjectId("56d7a737da181f3c00f32a5f")  } }
        ]);   
}

async function mappingOrder(orders) {
    let newOrder = {};
    orders.forEach((order,i) => {
        newOrder = getOrderDetail(order);
        newOrder.distributions = getReturningItems(order);
        newOrder.initialDistributions = getInitialDistributions(order);   
        newOrder.history = getHistory(order);    
    })

    return newOrder
}

async function saveNewOrder(order) {
    return await db.testOrder.insert(order);
}

function getOrderDetail(order) {
    let orderDetail = [];
    orderDetail = {
        "userId" : order.userId,
        "userName" : order.userName,
        "status" : order.status,
        "created" : order.created,
        "modified" : order.modified,
        "shipping" : order.shipping,
        "tax" : order.tax,
        "total" : order.total,
        //"vendor" : order.vendor
        "vendorName" : order.vendorName,
        "vendorId" : order.vendorId,
        "purchaseOrderNumber" : order.purchaseOrderNumber,
        "vendorOrderId" : order.vendorOrderId, 
        "schoolId" : order.schoolId,
        "districtId" : order.districtId,
        "title" : order.title,
        "discount" : order.discount,
        "type" : order.type,
        "completed" : order.completed, 
        //distributions
        "initialTotal" : order.initialTotal,
        "orderManagementStatus" : order.orderManagementStatus,      
    }
    return orderDetail;
}

function getReturningItems(order) {
    let distributions = [];
    order.distributions.forEach((distribution, i) => {
        distributions[i] = {
            "id": distribution.id,
            "amount": distribution.amount * -1
        }
    })
    return distributions;
}

function getInitialDistributions(order) {
    let initialdist = [];
    order.initialDistributions.forEach((initialDistribution, i) => {
        initialdist[i] = {
            "id": initialDistribution.id,
            "amount": initialDistribution.amount * -1
        }
    })
    return initialdist;
}

function getHistory(order) {
    let history = [];
    order.history.forEach((hist, i) => {
        history[i] = {
            "action": hist.action,
            "transactionStepId": hist.transactionStepId,
            "notes": hist.notes,
            "date": hist.date
        }

        // ReturningItems
        let returningItems = [];
        hist.returningItems.forEach((ret, i) => {
            returningItems[i] = {
                "itemId" : ret.itemId,
                "quantity" : ret.quantity,
                "price" : ret.price * -1,
                "description" : ret.description,
                "status" : ret.status,
                "taxRefund" : ret.taxRefund * -1
            }
        })
        history[i].returningItems = returningItems;

        // distributions
        let distributions = [];
        hist.distributions.forEach((dis, i) => {
            distributions[i] = {
                "id": dis.id,
                "amount": dis.amount * -1
            }
        })
        history[i].distributions = distributions;
    })
    return history;
}

findOrders()
    .then(orders => mappingOrder(orders))
    .then(order  => saveNewOrder(order))
    .then(result => console.log('result --->', result))
    .catch(e => console.log('Error -->', e))

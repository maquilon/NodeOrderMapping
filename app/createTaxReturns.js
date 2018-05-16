var fs = require("fs");
var Promise = require("bluebird");
var readfile = Promise.promisify(fs.readFile);

const mongoist = require('mongoist');
const db = mongoist("mongodb://localhost:27017/classwallet", "");

async function getOrderIds(){
    return new Promise((resolve, reject)=>{    
        readfile("tax_return.csv")
        .then(data=>{
            var lines = data.toString().split("\n");
            var orderIds = [];
            lines.forEach((line,i)=>{  
                orderIds.push(parseInt(line.split(",")[1]))
            });
            resolve(orderIds);
        })
    });
}


async function start(){
    var bulk = db.orders.initializeUnorderedBulkOp()
    var ids = await getOrderIds();
    var orders = await db.orders.aggregate([{$match: {  "vendor.vendorOrderId" : { $in : ids }  } }]);

    orders.forEach((order, i)=>{
        if(order.tax > 0){

            var distributions = [];
            var userUpdate = {
                find: {},
                update: {}  
            };

            //db.users.update(userUpdate.find, userUpdate.update);

            if(order.tax > -order.distributions[0].amount){
                distributions.push({
                    id: order.distributions[1].id,
                    amount: order.tax
                });

                userUpdate["find"]["userId"] = mongoist.ObjectId(order.userId);
                userUpdate["update"]["$inc"] = {};
                userUpdate["update"]["$inc"]["purses."+order.distributions[1].id+".amount"] = order.tax;
                 
            }else{
                distributions.push({
                    id: order.distributions[0].id,
                    amount: order.tax
                });

                userUpdate["find"]["userId"] = mongoist.ObjectId(order.userId);
                userUpdate["update"]["$inc"] = {};
                userUpdate["update"]["$inc"]["purses."+order.distributions[0].id+".amount"] = order.tax;
                
            }
            
            var newOrder = {
                title: order.title,
                schoolId: order.schoolId,
                districtId: order.districtId,
                discount: order.discount,
                userId: order.userId,
                userName: order.userName,
                type: order.type,
                status: 'complete',
                created: new Date(),
                modified: new Date(),
                shipping: 0,
                tax: 0,
                total: 0,
                vendor: { 
                    vendorName : order.vendor.vendorName,
                    vendorId : order.vendor.vendorId,
                    purchaseOrderNumber : order.vendor.purchaseOrderNumber,
                    vendorOrderId : order.vendor.vendorOrderId,
                    items: []
                },
                distributions: distributions       
            }

            bulk.find(userUpdate.find).update(userUpdate.update)
            bulk.insert(newOrder);
        }



    })
    
    console.log('Bulk --->',require("util").inspect(bulk, false, 10));
    await bulk.execute()

}


start();
///////////////////////////////////////////
// Create a collection called ordersTemp
///////////////////////////////////////////
db.orders.aggregate([{
    $match: {
        history: {
            $exists: true
        },
        total: {
            $gt: 0
        },
        "_id": ObjectId("5808098426d6babb30004139")
    }
}, {
    $unwind: "$history"
}, {
    $unwind: "$history.distributions"
},
{
    $unwind: {
        path: "$history.returningItems",
        preserveNullAndEmptyArrays: true
    }
},

{
    $project: {
        title: "$title",
        schoolId: "$schoolId",
        districtId: "$districtId",
        discount: "$discount",
        userName: "$userName",
        status: "$status",
        userId: "$userId",
        type: "$type",
        vendorName: "$vendorName",
        vendorOrderId: "$vendor.vendorOrderId",
        vendorId: "$vendor.vendorId",
        purchaseOrderNumber: "$vendor.purchaseOrderNumber",
        returnedTax: {
            $ifNull: [{
                $multiply: ["$history.returningTax", -1]
            }, 0]
        },
        returnedShipping: {
            $ifNull: [{
                $multiply: ["$history.returningShipping", -1]
            }, 0]
        },
        taxes: {
            $multiply: ["$history.returningItems.taxRefund", -1]
        },
        item: {
            itemdId: "$history.returningItems.itemId",
            quantity: "$history.returningItems.quantity",
            sumPrice: {
                $multiply: ["$history.returningItems.price", "$history.returningItems.quantity", -1]
            },
            price: {
                $multiply: ["$history.returningItems.price", -1]
            },
            description: "$history.returningItems.description"
        },
        date: {
            $dateToString: {
                format: "%Y-%m-%d",
                date: "$history.date"
            }
        },
        distributions: "$history.distributions"
    }
},

{
    $group: {
        _id: {
            date: "$date",
            title: "$title",
            schoolId: "$schoolId",
            districtId: "$districtId",
            discount: "$discount",
            userName: "$userName",
            status: "$status",
            userId: "$userId",
            type: "$type",
            vendorOrderId: "$vendorOrderId",
            vendorId: "$vendorId",
            purchaseOrderNumber: "$purchaseOrderNumber",
        },
        returnedTax: {
            $sum: "$returnedTax"
        },
        returnedShipping: {
            $sum: "$returnedShipping"
        },
        tax: {
            $sum: "$item.taxes"
        },
        subTtotal: {
            $sum: "$item.sumPrice"
        },
        items: {
            $addToSet: "$item"
        },
        distributions: {
            $addToSet: "$distributions"
        }
    }
},
{
    $addFields: {
        customId: ObjectId().valueOf(),
    }
}, {
    $unwind: "$items"
}, {
    $unwind: "$distributions"
},
{
    $match: {
        "items.price": {
            $ne: null
        }
    }
},
{
    $group: {
        _id: {
            customId: "$customId",
            date: "$_id.date",
            title: "$_id.title",
            schoolId: "$_id.schoolId",
            districtId: "$_id.districtId",
            discount: "$_id.discount",
            userName: "$_id.userName",
            status: "$_id.status",
            userId: "$_id.userId",
            type: "$_id.type",
            vendorOrderId: "$_id.vendorOrderId",
            vendorId: "$_id.vendorId",
            purchaseOrderNumber: "$_id.purchaseOrderNumber",
            returnedTax: "$returnedTax",
            shipping: "$returnedShipping",
            tax: "$tax",
            subTtotal: "$subTtotal",
        },
        items: {
            $addToSet: "$items"
        },
        distributions: {
            $addToSet: "$distributions"
        }
    }
},
{
    $project: {
        order: {
            "title": "$_id.title",
            "schoolId": "$_id.schoolId",
            "districtId": "$_id.districtId",
            "discount": "$_id.discount",
            "userName": "$_id.userName",
            "status": "$_id.status",
            "userId": "$_id.userId",
            "originalDate": "$_id.date",
            "type": "$_id.type",
            "shipping": "$_id.shipping",
            "tax": {
                $sum: ["$_id.tax", "$_id.returnedTax"]
            },
            "total": {
                $sum: ["$_id.tax", "$_id.returnedTax", "$_id.subTtotal"]
            },
            "vendor": {
                "vendorOrderId": "$_id.vendorOrderId",
                "vendorId": "$_id.vendorId",
                "purchaseOrderNumber": "$_id.purchaseOrderNumber",
                "items": "$items"
            },
            "distributions": "$distributions"
        }
    }
}
    , {
    $out: "ordersTemp"
}
])
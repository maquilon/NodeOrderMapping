const mongoist = require('mongoist');
const db = mongoist("mongodb://localhost:27017/temp1","")

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TYPE OF BULK OPERATIONS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//var bulkop=db.collection.initializeOrderedBulkOp()  
//var bulkop=db.collection.intializeUnorderedBulkOp()  
var bulkop = db.people.initializeOrderedBulkOp() 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TYPE OF BULK OPERATIONS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Name	                                            Description
// db.collection.initializeOrderedBulkOp()	        Initializes a Bulk() operations builder for an ordered list of operations.
// db.collection.initializeUnorderedBulkOp()	    Initializes a Bulk() operations builder for an unordered list of operations.
// Bulk()	                                        Bulk operations builder.
// Bulk.execute()	                                Executes a list of operations in bulk.
// Bulk.find()	                                    Specifies the query condition for an update or a remove operation.
// Bulk.find.arrayFilters()	                        Specifies the filters that determine which elements of an array to update for an update or updateOne operation.
// Bulk.find.collation()	                        Specifies the collation for the query condition.
// Bulk.find.remove()	                            Adds a multiple document remove operation to a list of operations.
// Bulk.find.removeOne()	                        Adds a single document remove operation to a list of operations.
// Bulk.find.replaceOne()	                        Adds a single document replacement operation to a list of operations.
// Bulk.find.updateOne()	                        Adds a single document update operation to a list of operations.
// Bulk.find.update()	                            Adds a multi update operation to a list of operations.
// Bulk.find.upsert()	                            Specifies upsert: true for an update operation.
// Bulk.getOperations()	                            Returns an array of write operations executed in the Bulk() operations object.
// Bulk.insert()	                                Adds an insert operation to a list of operations.
// Bulk.tojson()	                                Returns a JSON document that contains the number of operations and batches in the Bulk() operations object.
// Bulk.toString()	                                Returns the Bulk.tojson() results as a string.

bulkop.insert({ lastname:"Rodman", firstname:"Matt" });  
bulkop.insert({ lastname:"Butler", firstname:"Eddie" });  
bulkop.insert({ lastname:"Smith", firstname:"John" });  
bulkop.insert({ lastname:"Haley", firstname:"Bill" });  
bulkop.insert({ lastname:"Halley", firstname:"Edmond" });  
bulkop.insert({ lastname:"Bopp", firstname:"Hale" });  

bulkop.find({ lastname:"Butler"}).updateOne( { $set: { title:"JavaScript Domination"}});
bulkop.find({ lastname:"Haley" }).updateOne( { $set: { year:1925 } });  
bulkop.find({ firstname:"Edmond" }).replaceOne({ lastname:"Blackadder", firstname:"Edmund", year:1455 });  
bulkop.find({ lastname:"Bopp" }).removeOne();  
bulkop.find({ lastname:"Blackadder" }).remove( );  
bulkop.find({ lastname:"Haley" }).update( { $set: { comet:false } });  
bulkop.find({ lastname:"Halle" }).upsert().update( { $set: { firstname:"Berry" }});  

let results=bulkop.execute(function(err,result) {  
    console.log(JSON.stringify(result));
});



//process.exit();
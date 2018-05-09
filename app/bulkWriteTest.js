const mongoist = require('mongoist');
const db = mongoist("mongodb://localhost:27017/temp1","")


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// bulkWrite() Methods
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// insertOne
// updateOne
// updateMany
// replaceOne
// deleteOne
// deleteMany

try {
    db.temp1.bulkWrite(
       [
          { insertOne :  { lastname:"Rodman", firstname:"Matt" } },
          { insertOne :  { lastname:"Butler", firstname:"Eddie" } },
          { insertOne :  { lastname:"Haley", firstname:"Bill" } },
          { insertOne :  { lastname:"Smith", firstname:"John" } },

          { updateOne :  { lastname:"Smith", firstname:"Johnny" }},
          { deleteOne :  { "filter" : { lastname:"Smith" } } },
          { replaceOne :
             {
                "filter" : { lastname:"Butler"},
                "replacement" : { title:"JavaScript Domination II"}
             }
          }
       ]
    );
 }
 catch (e) {
    console.log('error -->',e )
 }
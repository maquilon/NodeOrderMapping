// const mongoist = require('mongoist');
// const db = mongoist("mongodb://localhost:27017/temp1","")

//var mongojs = require('mongojs');
//var db = mongojs('mongodb://localhost:27017/temp', ['temp']);

const mongodb = require('mongodb').MongoClient

// const bulkArray = () => {
  
//   }
function bulkArray() {
  return ( { insertOne: { "document": { "title": "title", 'address': "street" }  } } )
}

const bulkResult = db.collection('temp').bulkWrite(bulkArray, { ordered: false } );

console.log('bulkResult: ', bulkResult);
//   // } catch (e) {
//   //   console.log('err in bulkWrite mongodb operation:', e);
//   // }







// var bulkUpdateOps = [],
//     counter = 0;

// genres.forEach(function(doc) {
//     bulkUpdateOps.push({
//         "updateOne": {
//             "filter": { "_id": doc.id },
//             "update": { "$set": { "name": doc.name } },
//             "upsert": true
//         }
//     });
//     counter++;

//     if (counter % 500 == 0) {
//         db.collection('genres').bulkWrite(bulkUpdateOps, function(err, r) {
//             // do something with result
//         });
//         bulkUpdateOps = [];
//     }
// })

// if (counter % 500 != 0) {
//     db.collection('genres').bulkWrite(bulkUpdateOps, function(err, r) {
//         // do something with result
//     }
// }
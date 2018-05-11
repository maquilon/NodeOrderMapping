var data = [];

for (var i = 0; i < 400000; i++) {
    data.push({ insertOne : { 'document' : { 'name' : 'John', 'lastName' : 'Smith' } } })
}

var start  = new Date().getTime();

try {
    
        print("start")

        db.testCollection.bulkWrite( data , { ordered : false } );

        var end = new Date().getTime();

        print( (end-start)/1000 ) 
  }
  catch (e) {
  print(e);
}


// 1,000,000 in 3:28.85 
// To load this script on the mongo shell ---> load('mongoScript.js')

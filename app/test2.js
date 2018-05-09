// To be tested in ROBO 3T

var data = [];
for (var i = 0; i < 100000; i++) {
    data.push({ insertOne : { 'document' : { 'name' : 'John', 'lastName' : 'Smith' } } })
}

try {
  db.testCollection.bulkWrite( data , { ordered : false } );
  }
  catch (e) {
  print(e);
}

// 100,000 Records 3.04 seconds
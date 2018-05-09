var data = [];
for (var i = 0; i < 1000000; i++) {
    data.push({ insertOne : { 'document' : { 'name' : 'John', 'lastName' : 'Smith' } } })
}


try {
  db.testCollection.bulkWrite( data , { ordered : false } );
  }
  catch (e) {
  print(e);
}

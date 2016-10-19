var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mtg = require('./AllCards-x.json');
var _ = require('lodash');

// Connection URL
var url = 'mongodb://localhost:27017/local';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  var collection = db.collection('cards');

  _.forEach(mtg, function(val) {
    collection.insert(val);
  });

  db.close();
});

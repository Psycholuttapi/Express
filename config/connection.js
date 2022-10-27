const  MongoClient= require("mongodb").MongoClient;
// const connectionString = process.env.ATLAS_URI;
const state = {
    db:null
}



module.exports.connect= function (callback) {
    const url="mongodb://127.0.0.1:27017/loc8r"
    const dbname='shopping'
    MongoClient.connect(url,function (err, data) {
      if (err || !data) {
        return callback(err);
      }

      state.db = data.db(dbname);

      return callback();
    });
  },

  module.exports.get= function () {
    return state.db;
  }

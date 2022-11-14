const Handlebars = require("handlebars");
var db = require('../config/connection')
var ObjectId = require('mongodb').ObjectId
var collection = require('../config/shortcut')
module.exports = {
    addProduct: (product, callback) => {
        db.get().collection(collection.productCollection).insertOne(product).then((data) => {
            callback(data.insertedId.toString())
            //    console.log("from the helper"+data.insertedId.toString())
        })
    },
    getProduct: () => {
        return new Promise(async (resolve, reject) => {
            console.log("1st");
            let products = await db.get().collection(collection.productCollection).find().toArray()
            console.log("2nd");
            resolve(products);
        })
    },
    deleteUser: (idd) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.productCollection).deleteOne({ idd }).then((response) => {
                console.log("Did this reach here", response);
                resolve(response)
            })
        })
    },
    productDetail: (idd) => {
        return new Promise((resolve, reject) => {
            // var ids=idd.slice(2)
            console.log("To check the id",idd) 
        //     _idd:ObjectId(idd)
            db.get().collection(collection.productCollection).findOne({_id:ObjectId(idd)}).then((response) => {
                console.log("the id is\n",response);
                resolve(response)
            })
        })
    }
}

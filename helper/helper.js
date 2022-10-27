const Handlebars = require("handlebars");
var db=require('../config/connection')
var collection=require('../config/shortcut')
module.exports={
    addProduct: (product,callback)=> {
        db.get().collection(collection.productCollection).insertOne(product).then((data)=>{
            callback(data.insertedId.toString())
        //    console.log("from the helper"+data.insertedId.toString())
        })
    },
    getProduct: ()=>{
        return new Promise (async(resolve,reject)=>
        {
            console.log("1st");
            let products=await db.get().collection(collection.productCollection).find().toArray()
            console.log("2nd");
            resolve(products);
        })
    }
}

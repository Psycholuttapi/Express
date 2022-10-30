var db=require('../config/connection')
var collection=require('../config/shortcut')
var bcrypt=require('bcrypt')

module.exports={
    addUser: (product)=> {
        console.log("got here")
        return new Promise(async(resolve,reject)=>{
            product.password=await bcrypt.hash(product.password, 10)
            db.get().collection(collection.userDetails).insertOne(product).then((data)=>{
                resolve(data)
            })
        })
       
    },
    getUser: (userData)=>{
        return new Promise (async(resolve,reject)=>
        {
            let loginStatus=false;
            let response={}
            let user=await db.get().collection(collection.userDetails).findOne({name:userData.name})
            if (user) {
                await bcrypt.compare(userData.password, user.password).then((status)=>{
                    if(status){
                        response.user=user
                        response.status=true
                        resolve(response)
                    }else{
                        resolve({status:false})
                    }
                });
            }
            else{
                resolve({status:false})
            }
        })
    }

}
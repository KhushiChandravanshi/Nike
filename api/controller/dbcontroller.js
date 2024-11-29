let mongo = require('mongodb')
let {MongoClient} = mongo;
let mongoUrl = "mongodb+srv://Khushi:zlTsC8ROCMFuic3L@cluster0.yw0su.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client = new MongoClient(mongoUrl);

async function dbConnect(){
    await client.connect()
    console.log("Connection Succesful")
}

let db = client.db('Nike');

async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.close();
    } catch(err){
        output.push({"Error":"Error in get Data"})
    }

    return output
}

async function postData(colName,data){
    let output;
    try{
        output = await db.collection(colName).insertOne(data)
    }catch(err){
        output = {"response":"Error In Post Data"}
    }
    return output
}

async function updateData(colName,condition,data){
    let output;
    try{
        output = await db.collection(colName).updateOne(condition,data)
    }catch(err){
        output = {"response":"Error in updating data"}
    }
    return output
}

async function deleteData(colName,condition){
    let output;
    try{
        output = await db.collection(colName).deleteOne(condition)
    }catch(err){
        output ={"response":"Error in deleteing"}
    }
    return output

}



module.exports= {
    dbConnect,
    getData,
    postData,
    updateData,
    deleteData
}
// db.products.update(
//     {_id:1},
//     {
//         $set:{
//             "status":"delivered"
//         }
//     }
// )

// db.products.deleteOne(condition)

// db.products.deleteOne({_id:1})
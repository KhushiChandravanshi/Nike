let express = require('express');
let {dbConnect,getData,postData,updateData,deleteData} = require('./controller/dbcontroller');
let app = express();
let port = 9110;
let cors = require('cors');
let swaggerUi = require('swagger-ui-express');
let swaggerDocument = require('./swagger.json');
let packageNumber = require('./package.json');
let {ObjectId} = require('mongodb');


swaggerDocument.info.version = packageNumber.version;
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


let key = "123ABC"

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => { // corrected this line
    res.send("Hii From Express");
});

app.get('/collection', async (req, res) => {
    let query = {};
    let collection = "collection";
    let authKey = req.headers['x-access-auth']
    if(authKey == key){
        let output = await getData(collection, query);
        res.status(200).send(output);
    }else{
        res.status(400).send(`unauthorized`);
    }
});

// categoryType
app.get('/categoryType', async (req, res) => {
    let query = {};
    let collection = "categoryType";
    let output = await getData(collection, query);
    res.send(output);
});

// productdata
app.get('/productData', async (req, res) => {
    let query = {};
    let collectionId = req.query.collectionId;
    let collection = "productData";

    if (collectionId) {
        query = { collection_id: Number(collectionId) };
    } else {
        query = {};
    }
    let output = await getData(collection, query);
    res.send(output);
});

app.get('/filter/:categoryId', async (req, res) => {
    let query = {};
    let categoryId = Number(req.params.categoryId)
    let OccasionId = Number(req.query.OccasionId)
    let hcost = Number(req.query.hcost)
    let lcost = Number(req.query.lcost)
    if(OccasionId){
        query = {
            "categoryType.categoryType_id": categoryId,
             "Occasion.Occasion_id":Occasion_id
        }
    }else if(hcost & lcost){
        query={
            "categoryType.categoryType_id": categoryId,
            $and:({cost:{$gt:lcost,$lt:hcost}})
        }
    }
    else{
        query = {
            "categoryType.categoryType_id": categoryId,
           
        }
    }
    
    let collection = "productData";
    let output = await getData(collection, query);
    res.send(output);
});
//productDetails
app.get('/details/:id',async(req,res) => {
    let id = Number(req.params.id);
    let query = {"product_id":id}
    // let query = {_id:new ObjectId(req.params.id)}
    let collection = "productData"
    let output =  await getData(collection,query)
    res.send(output)
})
//collection wrt product
app.get('/product/:id',async(req,res) => {
    let query = {collection_id:Number(req.params.id)}
    let output = await getData('category',query)
    res.send(output)
})
//productCategory{"id":[1,2,3]}
app.post('/productCategory',async(req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {collection_id:{$in:req.body.id}};
        let collection = 'productCategory'
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send(`Please pass data in format of {"id":[1,2,3]}`)
    }
})
//placeOrder
app.post('/placeOrder',async(req,res) => {
    let data = req.body;
    let collection = 'order'
    let response = await postData(collection,data);
    res.send(response)
})
//get order
app.get('/order',async(req,res) => {
    let query = {};
    if(req.query.email){
        query = {email:req.query.email}
    }
    let collection = 'order';
    let output = await getData(collection,query);
    res.send(output)
})
//Update Order
app.put('/updateOrder',async(req,res) => {
    let collection = "order"
    let condition = {"_id":new ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    }
    let response = await updateData(collection,condition,data)
    res.send(response)
})
delete order
app.delete('/deleteOrder',async(req,res) => {
    let collection = "orders"
    let condition = {"_id":new ObjectId(req.body._id) }
    let response = await deleteData(collection,condition);
    res.send(response)
})
app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})

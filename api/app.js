let express = require('express');
let {dbConnect, getData} = require('./controller/dbcontroller');
let app = express();
let port = 9110;
let cors = require('cors');
let swaggerUi = require('swagger-ui-express');
let swaggerDocument = require('./swagger.json');
let packageNumber = require('./package.json');

swaggerDocument.info.version = packageNumber.version;
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => { // corrected this line
    res.send("Hii From Express");
});

app.get('/collection', async (req, res) => {
    let query = {};
    let collection = "collection";
    let output = await getData(collection, query);
    res.send(output);
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
    let categoryId = req.params.categoryId;
    query = {
        "categoryType.categoryType_id": Number(categoryId)
    };
    let collection = "productData";
    let output = await getData(collection, query);
    res.send(output);
});

app.listen(port, (err) => {
    dbConnect();
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
});

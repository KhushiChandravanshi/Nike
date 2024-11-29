Nike

// Page 1
> List of collection (GET)
*  http://localhost:9110/collection
*

> List of ProductData (GET)
* http://localhost:9110/productData
* 

> Productdata wrt to collection (GET)
* http://localhost:9110/ProductData?collectionId=2
* 
> Quick Search (GET)
* http://localhost:9110/categoryType
* 


// Page 2
> product wrt to category (GET)
* http://localhost:9110/filter/1
* 


> product data wrt to category + Occasion (GET)
* http://localhost:9110/filter/1?Occasionid=1
* 


> productData wrt to category + cost (GET)
* http://localhost:9110/filter/1?lcost=500&hcost=1500
* 


//page3
> Details of productData (GET)
* http://localhost:9110/details/2 or http://localhost:9110/details/6745b401b46a240735e037bd
* 


> categoryType of product data (GET)
* http://localhost:9110/product/2
* 

//page4
> Details of collection selected (POST)
* localhost:9110/productCategory
body> {"id":[1,2,3]}
* 
body> 

> Place Order (POST)
* localhost:9110/placeOrder
* 
 {
        "orderId":"1",
        "name": "Rani",
        "email": "Reema@gmail.com",
        "address": "Hno 45,Sector 1",
        "phone": 9806594203,
        "cost": 845,
        "Item": [
            4,
            2,
            6
        ],
        "status": "Delivered"
    }



//page
> List all orders (GET)
* localhost:9110/order
* localhost:9110/order?email=usha@gmail.com
* 
* 

> update order (PUT)
* localhost:9110/updateOrder
* 
> body>   {
    "_id": "67489d7f6061f9256dbcd7e7",
    "status":"completed"
}


> delete order (DELETE)
* localhost:9110/deleteOrder
* 
> body> {
      {
    "_id": "67489d7f6061f9256dbcd7e7"
  }
}
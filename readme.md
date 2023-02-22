npm install
start the server : nodemon start
URL : http://localhost:3001

eg: {
   "productName": "Nokia",
    "qtyPerUnit": 1,
    "unitPrice": 1099,
    "unitInStock": 23,
    "discontinued": false,
    "categoryId": 1,
   "categoryName":"smartPhone"
 }

Product API

/*  Create a new product  */

URL: /create

Method: POST

Attribute     Type	     Required

productName	 String	        Yes	               
qtyPerUnit	 Number	        Yes	             
unitPrice	 Number	        Yes	
unitInStock	  Number	    Yes	
discontinued   Boolean	    Yes
categoryId	  Number	     Yes
categoryName   string         Yes


Response Body:

The newly created product.


Get all products
Get a list of all products.

URL: /readAll

Method: GET

Response Body:

An array of all products



Get a single product by productName

URL: /products/:productName

Method: GET

Response Body:

The product with the specified productName.


Update a product by productName
Update a product with the specified attributes.

URL: /update/:productName

Method: PATCH

Response Body:

The updated product.


Delete a product by productName
Delete a product with the specified productName.

URL: /delete/:productName

Method: DELETE
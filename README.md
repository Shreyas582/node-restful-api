
# Node RESTful API

A RESTful API in NodeJS for a simple shop app.




## MongoDB Setup

Connect to MongoDB. Copy connection URL.
    
## Environment Variables

To run this project, you will need to add the following environment variables to your nodemon.json file

```json
{
    "env": {
        "MONGO_ATLAS_URI": "",
        "JWT_KEY": ""
    }
}
```

Paste the connection URL in MONGO_ATLAS_URI field and use a random string as JWT_KEY.



## Run Locally

Clone the project

```bash
  git clone https://github.com/Shreyas582/node-restful-api
```

Go to the project directory

```bash
  cd node-restful-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

#### Signup User

```http
  POST /user/signup
```

```json
{
    "email": "",
    "password": ""
}
```

#### Login User

```http
  POST /user/login
```

```json
{
    "email": "",
    "password": ""
}
```

#### Delete User

```http
  DELETE /user/:userID
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userID`  | `string` | **Required**. ID of user          |

---

#### Get all products

```http
  GET /products
```

#### Add Single Product 

```http
  POST /products
```

| Form-Data      | Type     | Description                       |
| :--------      | :------- | :-------------------------------- |
| `name`         | `string` | **Required**. Product name        |
| `price`        | `string` | **Required**. Product price       |
| `productImage` | `file`   | **Required**. Product image file          |

#### Get Single Product 

```http
  GET /products/:productID
```

| Parameter   | Type     | Description                       |
| :--------   | :------- | :-------------------------------- |
| `productID` | `string` | **Required**. ID of product       |

#### Update Single Product [Auth Required]

```http
  PATCH /products/:productID
```

| Parameter   | Type     | Description                       |
| :--------   | :------- | :-------------------------------- |
| `productID` | `string` | **Required**. ID of product       |

#### Delete Single Product [Auth Required]

```http
  DELETE /products/:productID
```

| Parameter   | Type     | Description                       |
| :--------   | :------- | :-------------------------------- |
| `productID` | `string` | **Required**. ID of product       |

---

#### Get All Orders [Auth Required]

```http
  GET /orders 
```

#### Create Order [Auth Required]
```http
  POST /orders 
```

```json
{
    "quantity": <int>,
    "productID": ""
}
```

#### Get Single Order [Auth Required]

```http
  GET /orders/:orderID
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `orderID` | `string` | **Required**. ID of order         |

#### Delete Single Order [Auth Required]

```http 
  DELETE /orders/:orderID
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `orderID` | `string` | **Required**. ID of order         |

---


## Acknowledgements

 - [Academind](https://github.com/academind/node-restful-api-tutorial)



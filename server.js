var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var fileUpload = require("express-fileupload");
var cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
var Controllers = require("./src/Controllers/API");
const db = require("./src/Connect/Connect");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  // ['.routes/*.js']
  apis: [
    "./src/Controllers/User/Login.js",
    "./src/Controllers/User/Register.js",
    "./src/Controllers/Documents/Download.js",
    "./src/Controllers/Documents/Upload.js",
    "./src/Controllers/Folder/Folder.js",
    "./src/Controllers/Folder/DeleteFolder.js",
    "./src/Controllers/User/ChangInfor.js",
    "./src/Controllers/Folder/ChangeName.js",
    "./src/Controllers/Folder/ChangePassWord.js",
    "./src/Controllers/Folder/GetFolder.js",
    // "./src/Controllers/Documents/GetDocument.js",
    "./src/Controllers/Documents/DeleteDocument.js",
    "./src/Controllers/Folder/GetFileFolder.js",
    "./src/Controllers/Folder/CheckPass.js",
    "./src/Controllers/Documents/Search.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

Controllers(app);

app.listen(8000);

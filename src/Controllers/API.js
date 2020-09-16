var Login = require("./User/Login");
var Upload = require("./Documents/Upload");
var Download = require("./Documents/Download");
module.exports = function (app) {
  console.log("this is to to Controllers");
  Login(app);
  Upload(app);
  Download(app);
};

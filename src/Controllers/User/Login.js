const db = require("../../Connect/Connect");
const jwt = require("jsonwebtoken");
const Login = require("../../model/User/Login.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /Login:
   *   post:
   *    tags:
   *    - User
   *    parameters:
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              User:
   *                type: string
   *              PassWord:
   *                type: string
   *            required:
   *                - User
   *                - PassWord
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.post("/Login", function (req, res) {
    Login(db, req.body.User, req.body.PassWord, function (
      dataString,
      data,
      token
    ) {
      res.json({
        dataString: dataString,
        data: data,
        token: token,
      });
    });
  });
};

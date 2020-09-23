const db = require("../../Connect/Connect");
var ChangePassWord = require("../../model/Folder/ChangePassWord.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /ChangePassWord:
   *   put:
   *    tags:
   *    - Folder
   *    parameters:
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              IDFolder:
   *                type: string
   *              Token:
   *                type: string
   *              PassWord:
   *                type: string
   *            required:
   *                - IDFolder
   *                - Token
   *                - PassWord
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.put("/ChangePassWord", function (req, res) {
    ChangePassWord(
      db,
      req.body.IDFolder,
      req.body.Token,
      req.body.PassWord,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};

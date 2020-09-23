const db = require("../../Connect/Connect");
var ChangeName = require("../../model/Folder/ChangeName.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /ChangeName:
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
   *              Name:
   *                type: string
   *            required:
   *                - IDFolder
   *                - Token
   *                - Name
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.put("/ChangeName", function (req, res) {
    console.log("ChangName");
    ChangeName(db, req.body.IDFolder, req.body.Token, req.body.Name, function (
      dataString
    ) {
      res.json({
        dataString: dataString,
      });
    });
  });
};

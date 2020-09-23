const db = require("../../Connect/Connect");
const DeleteFolder = require("../../model/Folder/DeleteFolder.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /DeleteFolder/{ID}:
   *   delete:
   *    tags:
   *    - Folder
   *    parameters:
   *        - name: ID
   *          description: ID folder
   *          in: path
   *          type: integer
   *          required: true
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              Token:
   *                type: string
   *            required:
   *                - Token
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.delete("/DeleteFolder/:ID/", function (req, res) {
    DeleteFolder(db, req.params.ID, req.body.Token, function (dataString) {
      res.json({
        dataString: dataString,
      });
    });
  });
};

const db = require("../../Connect/Connect");
const DeleteDocument = require("../../model/Documents/DeleteDocument.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /DeleteDocument/{ID}:
   *   delete:
   *    tags:
   *    - Document
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
  app.delete("/DeleteDocument/:ID/", function (req, res) {
    DeleteDocument(db, req.params.ID, req.body.Token, function (dataString) {
      res.json({
        dataString: dataString,
      });
    });
  });
};

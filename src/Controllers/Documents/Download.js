const db = require("../../Connect/Connect");

const Download = require("../../model/Documents/Download.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /download/{ID}:
   *   get:
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
   *            type: file
   *            required:
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/download/:ID", function (req, res) {
    Download(db, res, req, function (data) {});
  });
};

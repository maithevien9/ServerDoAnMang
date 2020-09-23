const db = require("../../Connect/Connect");
// const jwt = require("jsonwebtoken");
const Upload = require("../../model/Documents/Upload.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /upload:
   *   post:
   *    tags:
   *    - Document
   *    parameters:
   *        - in: formData
   *          name: photo
   *          type: file
   *          description: The file to upload.
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              Token:
   *                type: string
   *              IDFolder:
   *                type: string
   *            required:
   *                - Token
   *                - IDFolder
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.post("/upload", function (req, res) {
    const file = req.files.photo;
    console.log("this is  upload File");
    Upload(db, file, res, req.body.Token, req.body.IDFolder, function (data) {
      res.json({
        success: data,
        message: "file upload",
      });
    });
  });
};

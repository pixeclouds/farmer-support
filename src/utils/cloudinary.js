const Cloudinary = require('cloudinary').v2;
const Formidable = require('formidable');
const fs = require('fs');
const path = require('path');

// Configure Cloudinary with your credentials
Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.uploadProduceImage= async (req, res) => {
        try {
            const result = await Cloudinary.uploader.upload(req.file.path)
            return result.url
          } catch (error) {
                throw Error ('Error while uploading image')
          }
}  
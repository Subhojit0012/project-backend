import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINERY_CLOUD_NAME,
  api_key: process.env.CLOUDINERY_API_KEY,
  api_secret: process.env.CLOUDINERY_API_SECRET,
});

const uploadOnCloudinery = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file in cloudinery
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file is uploaded successfully
    console.log("file is uploaded successfully on cloudinery!!", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally svaed temporary file as the upload operation got falied
    return null;
  }
};

export { uploadOnCloudinery };

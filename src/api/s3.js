import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import {
  AWS_ACCES_KEY,
  AWS_BUCKET_NAME,
  AWS_BUCKET_REGION,
  AWS_SECRET_KEY,
} from "../constants/constants";

export const s3Client = new S3Client({
  region: AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: AWS_ACCES_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});

export const bucketName = AWS_BUCKET_NAME;

export const addImages = async (imagesArray, onProgress) => {
  const uploadPromises = imagesArray.map(async (image, index) => {
    try {
      const response = await fetch(image.img);
      const blob = await response.blob();
      const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key: image.title, // Asegúrate de que image.title sea un identificador único
        Body: blob,
        ContentType: image.type,
      };

      const uploader = new Upload({
        client: s3Client,
        params: uploadParams,
        // Otras configuraciones si son necesarias
      });

      uploader.on("httpUploadProgress", (progress) => {
        if (onProgress) {
          const percentCompleted = Math.round(
            (progress.loaded * 100) / progress.total
          );
          onProgress(percentCompleted, image, index);
        }
      });

      await uploader.done();

      const publicUrl = `https://${AWS_BUCKET_NAME}.s3.${AWS_BUCKET_REGION}.amazonaws.com/${encodeURIComponent(
        image.title
      )}`;
      return publicUrl;
    } catch (error) {
      console.error("Error adding image:", error);
      return null;
    }
  });

  const results = await Promise.all(uploadPromises);
  return results.filter((result) => result !== null);
};

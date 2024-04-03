import { cloudinary } from "@/app/api/cloudinary/config"; // your config path
import { NextRequest } from "next/server";

interface CloudinaryResource {
  context?: {
    alt?: string;
    caption?: string;
  };
  public_id: string;
  secure_url: string;
}

type UploadResponse = {
  success: true;
  result?: UploadApiResponse;
} | {
  success: false;
  error: UploadApiErrorResponse;
};

type UploadApiResponse = CloudinaryResource;
type UploadApiErrorResponse = {
  message: string;
};
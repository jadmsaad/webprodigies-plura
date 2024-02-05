import {
  generateUploadButton,
  generateUploadDropzone,
  generateUploader,
} from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";

import { OurFileRouter } from "@/app/api/uploadthing/core";

const UploadButton = generateUploadButton<OurFileRouter>();
const UploadDropzone = generateUploadDropzone<OurFileRouter>();
const Uploader = generateUploader<OurFileRouter>();
export { UploadButton, UploadDropzone, Uploader };

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

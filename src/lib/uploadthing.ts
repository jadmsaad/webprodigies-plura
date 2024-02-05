import {
  generateUploadButton,
  generateUploadDropzone,
  generateUploader,
} from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";

import { OurFilerouter } from "@/app/api/uploadthing/core";

// export const { UploadButton, UploadDropzone, Uploader } =
//   generateComponents<OurFilerouter>();
const UploadButton = generateUploadButton<OurFilerouter>();
const UploadDropzone = generateUploadDropzone<OurFilerouter>();
const Uploader = generateUploader<OurFilerouter>();
export { UploadButton, UploadDropzone, Uploader };

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFilerouter>();

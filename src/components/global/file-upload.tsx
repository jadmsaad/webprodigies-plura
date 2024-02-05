import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Button } from "../ui/button";

interface IFileUploadProps {
  apiEndpoint: "agencyLogo" | "avatar" | "subaccountLogo";
  onChange: (url?: string) => void;
  value?: string;
}

const FileUpload: React.FunctionComponent<IFileUploadProps> = ({
  apiEndpoint,
  onChange,
  value,
}) => {
  const type = value?.split(".").pop();

  if (value) {
    return (
      <div className="flex flex-col justify-center items-center">
        {type !== "pdf" ? (
          <div className="relative w-40 h-40">
            <Image
              src={value}
              alt="Uploaded Image"
              className="object-container"
              fill
            />
          </div>
        ) : (
          <div className="relative fkex items-center p-2 mt-2 rounded-md bg-background/10">
            <FileIcon />
            <a
              href={value}
              target="_blank"
              rel="noopener_noreferrer"
              className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              View PDF
            </a>
          </div>
        )}
        <Button variant="ghost" type="button" onClick={() => onChange("")}>
          <X className="h-4 w-4" />
          Remove Logo
        </Button>
      </div>
    );
  }
  return <div>FileUpload</div>;
};

export default FileUpload;
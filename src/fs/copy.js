import { cpSync, existsSync } from "fs";

const copy = async () => {
  // Write your code here
  const folder = "./src/fs/files_copy";
  const folderToCopy = "./src/fs/files";

  if (existsSync(folder)) {
    throw Error("FS operation failed");
  }

  try {
    cpSync(folderToCopy, folder, {
      recursive: true,
    });

    console.log("Successfully copied the files forlder");
  } catch (err) {
    console.error(err);
  }
};

await copy();

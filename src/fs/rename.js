import { existsSync, rename as actualRename } from "fs";

const rename = async () => {
  // Write your code here
  const folderPath = "./src/fs/files/wrongFilename.txt";
  const properFolderPath = "./src/fs/files/properFilename.md";

  if (!existsSync(folderPath) || existsSync(properFolderPath)) {
    throw Error("FS operation failed");
  }

  actualRename(folderPath, properFolderPath, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Successfully renamed!");
  });
};

await rename();

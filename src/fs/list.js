import { existsSync, readdirSync } from "fs";
import { extname, parse } from "path";

const list = async () => {
  // Write your code here

  const folderPath = "./src/fs/files";

  if (!existsSync(folderPath)) {
    throw Error("FS operation failed");
  }

  const arrayOfFileNames = readdirSync(folderPath);

  arrayOfFileNames.forEach((file) => {
    console.log(`File: ${file}; filename: ${parse(file).name}; extension: ${extname(file)}`);
  });
};

await list();

import { existsSync, readFileSync } from "fs";

const read = async () => {
  // Write your code here

  const filePath = "./src/fs/files/fileToRead.txt";

  if (!existsSync(filePath)) {
    throw Error("FS operation failed");
  }

  const fileData = readFileSync(filePath, { encoding: "utf8", flag: "r" });
  console.log(fileData);
};

await read();

import { existsSync, unlinkSync } from "fs";

const remove = async () => {
  // Write your code here
  const filePath = "./src/fs/files/fileToRemove.txt";

  if (!existsSync(filePath)) {
    throw Error("FS operation failed");
  }

  try {
    unlinkSync(filePath);

    console.log("File has been succesfully deleted!");
  } catch (err) {
    console.log(err);
  }
};

await remove();

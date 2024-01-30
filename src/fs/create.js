import { appendFile, open } from "fs";

const create = async () => {
  // Write your code here
  const path = "./src/fs/files/fresh.txt";

  open(path, (err) => {
    if (err) {
      appendFile(path, "I am fresh and young", (err) => {
        if (err) {
          console.log("err", err);
          throw new Error("Not saved");
        }
        console.log("Saved!");
      });
    } else {
      throw new Error("FS operation failed ");
    }
  });
};

await create();

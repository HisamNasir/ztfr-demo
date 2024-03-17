const fs = require("fs");
const path = require("path");

const folderPath = "./thumbnails";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  const fileDetails = files.map((file) => {
    // const filePath = path.join(folderPath, file);
    // const fileExtension = path.extname(file);

    return `${file}`;
  });

  console.log("Files Information:", fileDetails);
});

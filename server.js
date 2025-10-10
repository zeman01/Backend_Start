// //! fs module
// //* to access file system
// const fs = require("fs");
// //* create a async file using writefile
// fs.writeFile("example.txt", "This is an example file.", (err) => {
//   if (err) {
//     console.log("Error");
//   } else console.log("File created successfully.");
// });
// //* create a sync file using writefileSync
// fs.writeFileSync("example2.txt", "This is an example file 2.");

// //* read a file using readFile
// fs.readFile("example.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else console.log(data);
// });
// //* read a file using readFileSync
// const data = fs.readFileSync("example2.txt", "utf-8");
// console.log(data);

// // * update a file using appendFile
// fs.appendFile("example.txt", "\nThis is an updated file.", (err) => {
//   if (err) {
//     console.log(err);
//   } else console.log("File updated successfully.");
// });
// //* update a file using appendFileSync
// fs.appendFileSync("example2.txt", "\nThis is an updated file 2.");

// // * create a folder using mkdir
// fs.mkdir("exampleFolder", (err) => {
//   if (err) {
//     console.log(err);
//   } else console.log("Folder created successfully.");
// });
// // * nested folder ----- Folder within  folder using mkdir with recursive option
// fs.mkdir("exampleFolder/nestedFolder", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   } else console.log("Nested folder created successfully.");
// });

// // * delete a file using unlink
// fs.unlink("example2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else console.log("File deleted successfully.");
// });

//! Create a simple HTTP server
import http from "http";
const server = http.createServer((req, res) => {
  console.log(req.url);
    if (req.url === "/") {  
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("About Us page");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 page not found</h1>");
  }
});

server.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});

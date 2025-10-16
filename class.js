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

// //! Create a simple HTTP server
// import http from "http";
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//     if (req.url === "/") {
//     res.end("Welcome to our home page");
//   } else if (req.url === "/about") {
//     res.end("About Us page");
//   } else {
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.end("<h1>404 page not found</h1>");
//   }
// });

// server.listen(8080, () => {
//   console.log("Server is running on port http://localhost:8080");
// });

// //! Express js framework
// // install express using npm i express
// //* npm install express
// import express from "express";
// // handler instance
// const app = express();
// const PORT = 8080;

// *creating server
// const server = http.createServer(app);

// *listening to the server
// server.listen(8080, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });

// routes
// app.get("/", (req, res) => {
//   // api jobs
//   res.send("Welcome to our home page");
// });
// app.get("/about", (req, res) => {
//   res.send("About Us page");
// });
// app.get("/users/all", (req, res) => {
//   res.json({
//     data: [
//       { id: 1, name: "Jaman", email: "asdfgh@shk.hj", age: 24 },
//       { id: 2, name: "John", email: "hgadshj@hggd.wsu" },
//     ],
//     message: "Users data fetched successfully",
//   });
// });

// *Dynamic route
// app.get("/users/:id", (req, res) => {
//   const params = req.params;
//   res.json({
//     data: { id: params.id, name: "Jaman", email: "hgsah@jhdbs.sj", age: 24 },
//   });
// });
// ! API -> Application Programming Interface
// ! REST or RESTFUL -> Representational State Transfer

// * client server architecture
// client -> frontend -> react, vue, angular
// server -> backend -> nodejs, django

// * stateless
// Request are independent

// * cacheable
// Response can be cached

// * uniform interface
// 1. resource must have unique id(endpoint or uri) -> /users, /products
// 2. standard request methods -> GET, POST, PUT, DELETE
// 3. representation of resources -> json, xml

// * layered architecture -> architecture not fixed
// client -> load balancer -> server -> database
// client -> proxy -> server -> database

// * code on demand (optional)
// a technology where a server sends executable code to a client upon the client's request, allowing the client to execute that code dynamically

// response -> json

//* response status code
// 1xx -> informational
// 2xx -> success
// 3xx -> redirection
// 4xx -> client error
// 5xx -> server error
// * most used status code
// 200 -> ok
// 201 -> created
// 400 -> bad request
// 401 -> unauthorized
// 403 -> forbidden
// 404 -> not found
// 500 -> internal server error

// import http from "http";


// const server = http.createServer(app);

// app.get("/", (req, res) => {
//   res.send("User Page");
// });

// // * Using Routes
// app.use("/users", userRoute);
// app.use("/products", productRoute);

// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });



// http://localhost:8080/users?name=abc&email=''&page=1&limi=10
// route
// 1. params  /users/:id  -> /users/1 ->  {id:1}
// req.params
// 2. query string  -> /users?name=abc -> {name:"abc"}
// req.query


// req.body   -> data from client

// ! middleware
// * types of middleware
// 1.inbuilt middleware
// 2.costume middleware
// 3.third party middleware

// * costume middleware
// const middleware = (req, res, next) => {
//   console.log("Middleware called");
//   next();
// };

// * error handler middleware

//  
// const errorHandler = (err, req, res, next) => {
//   res.status(500).json({ 
//     message: "Something went wrong!" 
//   });
// }


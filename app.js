import express from "express";

import userRoute from "./routes/users.routes.js";
import productRoute from "./routes/products.routes.js";

const app = express();
const PORT = 8080;


const middleware = (req, res, next) => {
  req.user = { id: 1, name: "Jaman" };
  console.log("Middleware ");
  next();
};
 
const middleware1 = (req, res, next) => {
  console.log("Middleware1");
  console.log(req.user);
  if (req.user) {
    next();
  }else {
    next("Unauthorized")
  }
  
}


// application level middleware
app.use(middleware);
app.use(middleware1);


app.use(express.json());

// Inbuilt middleware
app.use(express.static("public"));
// request handler for url /
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// * Using Routes
// app.use("/users",userRoute);
// app.use("/products", productRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});


// * error handler middleware
const errorHandler = (err, req, res, next) => {
  
  
  res.status((500).json({ 
    message: "Something went wrong!" 
  }));
}

app.use(errorHandler);
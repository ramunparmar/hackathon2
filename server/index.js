const express = require("express");
const cors = require("cors");
const app = express();
const artistRoute = require("./routes/artists");
const productRoute = require("./routes/products");

// Configuration
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log("Incoming request");
    next();
  });

// Routes
app.use("/artists", artistRoute);
app.use("/auction", productRoute);

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
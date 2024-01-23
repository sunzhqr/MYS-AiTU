// server.js
const express = require("express");
const bodyParser = require("body-parser");
const { createServer } = require("http");
const cors = require("cors");
const app = express();
app.use(cors());
const fs = require("fs");
const path = require("path");

const server = createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Respond with plain text "hi" at /
app.get("/", (req, res) => {
  // Read the contents of the directory
  const imagePath = "/yeltoreplussanzhar";
  const absolutePath = path.join(__dirname, imagePath);

  fs.readdir(absolutePath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Log the names of the files in the directory
    console.log("Files in directory:");
    files.forEach((file) => {
      console.log(file);
    });
    res.send(files);
  });
});

// Define the endpoint to serve the image
app.get("/image", (req, res) => {
  // Specify the relative path to the image file
  const imagePath = "/yeltoreplussanzhar/6c5840e8ad28f4e4612dd279cc7e536c.jpg";

  // Use the path module to join the directory of the current module with the relative path
  const absolutePath = path.join(__dirname, imagePath);

  // Send the image file as the response
  res.sendFile(absolutePath);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

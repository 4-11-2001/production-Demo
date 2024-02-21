const { Sequelize } = require("sequelize");
require("dotenv").config();
const express = require("express");
const multer = require("multer");
const Router = require("./routes/index");

const bodyParser = require("body-parser");
const cors = require("cors");

//rest object
const app = express();

//middlewares
app.use(cors());
app.use("/files", express.static("files")); // Corrected mounting of static files
app.use(bodyParser.json());
app.use("/", Router);

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files"); // Specify the directory where files will be saved
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname); // Use the original filename
  },
});

const upload = multer({ storage: storage });

const ReportsModel = require("./model/ReportsModel"); // Adjust the path accordingly

app.post("/upload", upload.single("file"), async (req, res) => {
  // File has been uploaded and saved to 'uploads/' directory
  try {
    // File has been uploaded and saved to 'files/' directory
    console.log("File uploaded:", req.file, req.title);
    const uri = req.file.filename;
    const type = req.file.mimetype;
    const pdf = req.file.path;
    const title = req.body.title;
    // Save the filename to the database
    await ReportsModel.create({
      uri: uri, // Save the file path to uri field
      type: type, // Save the file type
      pdf: pdf,
      title: title, // Save the file name
      // Optionally, you can also save the user_id if needed
      // user_id: req.body.user_id,
    });

    res.send("File uploaded successfully");
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Failed to upload file");
  }
});

app.get("/get_files", async (req, res) => {
  try {
    ReportsModel.findAll({}).then((data) => {
      res.send({ data: data });
    });
  } catch (error) {}
});

//port
app.get("/", async (req, res) => {
  res.send("Sucess!!!!!!!");
});
app.listen(process.env.PORT, () => {
  console.log("Server is running on localhost:8000");
});

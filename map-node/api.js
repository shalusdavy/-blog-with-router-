const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const tagController = require("./Tag-component/Tag_Controller");
const backendblog = "blogdata.json";

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST",
};
app.use(cors(corsOptions));

// read data

function readBlog() {
  try {
    const data = fs.readFileSync(backendblog, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// write data
function writeBlogData(blogdata) {
  const data = JSON.stringify(blogdata, null, 2);
  fs.writeFileSync(backendblog, data);
}

// post data
app.post("/blogdata", (req, res) => {
  const blogData = readBlog();
  const newBlog = req.body;
  blogData.push(newBlog);
  writeBlogData(blogData);
  res.status(201).json({ message: "blog created successfully", newBlog });
});

// get data
app.get("/blogdata", (req, res) => {
  const blogData = readBlog();
  res.json(blogData);
});

// for api fetching in travel datas
app.use("/tags", tagController);

app.listen(8000, () => {
  console.log(`Server is running at http://localhost:8000`);
});

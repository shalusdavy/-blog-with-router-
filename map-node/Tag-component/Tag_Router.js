const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const backendblog = "Newyork.json";

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST",
};
app.use(cors(corsOptions));

// Read blog data from the file
function readBlog() {
  const data = fs.readFileSync(backendblog, "utf8");
  return JSON.parse(data);
}

// Write blog data to the file
function writeBlogData(blogData) {
  fs.writeFileSync(backendblog, JSON.stringify(blogData, null, 2), "utf8");
}

// POST method to add a new blog
app.post("Tags", (req, res) => {
  const blogData = readBlog();
  const newBlog = req.body;
  blogData.push(newBlog);
  writeBlogData(blogData);
  res.status(201).json({ message: "Blog created successfully", newBlog });
});

// GET method to retrieve all blog data
app.get("/Tags", (req, res) => {
  const blogData = readBlog();
  res.json(blogData);
});

app.listen(8000, () => {
  console.log(`Server is running at http://localhost:8000`);
});

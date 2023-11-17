const express = require("express");
const { readTags, writeTags } = require("../tagModel");
const router = express.Router();

router.post("/", (req, res) => {
  let tagData = readTags();

  if (!Array.isArray(tagData)) {
    tagData = [];
  }

  const newTag = req.body;

 
  if (newTag) {
    tagData.push(newTag);
    writeTags(tagData);
    res.status(201).json({ message: "Tag created successfully", newTag });
  }
});

// GET method to retrieve all tags
router.get("/", (req, res) => {
  const tagData = readTags();
  res.json(tagData);
});

module.exports = router;

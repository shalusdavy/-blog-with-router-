const fs = require("fs");

const backendTag = "Newyork.json";

const readTags =()=> {
  const data = fs.readFileSync(backendTag, "utf8");
  return JSON.parse(data);
};

const  writeTags=(tagData)=> {
  fs.writeFileSync(backendTag, JSON.stringify(tagData, null, 2), "utf8");
}

module.exports = {
  readTags,
  writeTags
};

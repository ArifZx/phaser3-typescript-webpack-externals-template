const path = require("path");
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname, "dist")));

app.listen(PORT, () => {
  console.log("Web is running at port", PORT);
});

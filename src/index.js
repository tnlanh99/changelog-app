const express = require("express");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", async (req, res) => {
  res.json({ message: "Hello, world" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

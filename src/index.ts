import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import parser from "body-parser";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(parser.json());

app.get("/", async (req, res) => {
  res.json({ message: "Hello, world" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

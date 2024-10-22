import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(7000, () => {
  console.log("Listening on port 7000");
});

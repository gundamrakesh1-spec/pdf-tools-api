import express from "express";
import multer from "multer";
import cors from "cors";
import { processTool } from "./utils/engine.js";

const app = express();
app.use(cors());
const upload = multer();

app.post("/api", upload.array("files"), async (req, res) => {
  try {
    const tool = req.body.tool;
    const files = req.files;

    const result = await processTool(tool, files);

    res.set("Content-Type", result.type);
    res.send(result.data);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));

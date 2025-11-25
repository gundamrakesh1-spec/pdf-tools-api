import * as merge from "../api/merge.js";
import * as split from "../api/split.js";
import * as compress from "../api/compress.js";

export async function processTool(tool, files) {
  switch (tool) {
    case "merge": return await merge.run(files);
    case "split": return await split.run(files);
    case "compress": return await compress.run(files);
    default:
      throw new Error("Unknown tool: " + tool);
  }
}

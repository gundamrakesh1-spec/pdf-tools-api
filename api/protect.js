import { PDFDocument } from "pdf-lib";
export async function run(files) {
  return { type: "application/pdf", data: files[0].buffer };
}

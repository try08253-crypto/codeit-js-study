import fs from "fs";

export default class CSVFileManager {
  read(filePath) {
    const result = [];
    const bufferData = fs.readFileSync(filePath);
    const strData = String(bufferData).trim().split("\n");
    for (let i = 0; i < strData.length; i++) {
      result.push(strData[i].split(","));
    }
    return result;
  }
  write(filePath, data) {
    fs.appendFileSync(filePath, `${data}\n`, "utf8");
  }
}
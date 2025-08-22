export default class CSVFileManager{
  readFile() {
      const readContent = fs.readFileSync(filename);
      const content = String(readContent);
      const parsedContent = content.trim().split("\n");
      return parsedContent;
  }
}
export default class BaseRepository {
  fileManager;
  fileSource;

  constructor(fileManager) {
    this.fileManager = fileManager;
  }
}
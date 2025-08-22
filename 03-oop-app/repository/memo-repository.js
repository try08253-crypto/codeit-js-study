import BaseRepository from "./base-repository.js";

export default class MemoRepository extends BaseRepository {
  constructor(fileManager, config) {
    super(fileManager);
    this.fileSource = config.MEMO_DATA_PATH;
  }
}
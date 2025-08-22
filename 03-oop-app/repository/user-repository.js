import User from "../entity/user.js";
import BaseRepository from "./base-repository.js";

export default class UserRepository extends BaseRepository {
  constructor(fileManager, config) {
    super(fileManager);
    this.fileSource = config.USER_DATA_PATH;
  }

  getAllUsers() {
    const users = [];
    const userRows = this.fileManager.read(this.fileSource);
    for (let i = 0; i < userRows.length; i++) {
      const [email, password, nickname] = userRows[i];
      const newUser = new User(email, password, nickname);
      users.push(newUser);
    }
    return users;
  }
  addUser(user) {
    this.fileManager.write(this.fileSource, user.toCSVData());
  }
}
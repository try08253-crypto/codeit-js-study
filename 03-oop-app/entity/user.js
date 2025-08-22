import BaseEntity from "./base-entity.js";

export default class User extends BaseEntity {
  #email;
  #password;
  #nickname;

  constructor(email, password, nickname) {
    super();
    this.#email = email;
    this.#password = password;
    this.#nickname = nickname;
  }
  toCSVData() {
    return `${this.#email},${this.#password},${this.#nickname}`;
  }
  getEmail() {
    return this.#email;
  }
  getNickname() {
    return this.#nickname;
  }
  checkPasswordMath(inputPassword) {
    if (this.#password === inputPassword) {
      return true;
    } else {
      return false;
    }
  }
}
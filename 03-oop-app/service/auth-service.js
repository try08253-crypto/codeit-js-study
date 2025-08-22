import User from "../entity/user.js";
import SignInRes from "../dto/sign-in-res.js";

export default class AuthService {
  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  signIn(email, password) {
    const users = this.#userRepository.getAllUsers();
    for (const user of users) {
      if (user.getEmail() === email && user.checkPasswordMath(password)) {
        return new SignInRes(user.getEmail(), user.getNickname());
      }
    }
    return null;
  }

  signUp(email, password, nickname) {
    const users = this.#userRepository.getAllUsers();
    if (users.some(u => u.getEmail() === email)) return false;

    const newUser = new User(email, password, nickname);
    this.#userRepository.addUser(newUser);
    return true;
  }
}
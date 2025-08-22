// 클래스: 객체를 만들기 위해 정의한 틀
export default class Warrior {
  // 인스턴스 속성(변수)(상태)
  #name;
  #health;
  #attack;
  #defense;
  #belt;

  // 메소드(함수)(행동)
  // 생성자: 객체를 생성할 때 자동으로 실행되는 메소드
  constructor(name, health, attack, defense) {
    this.#name = name;
    this.#health = health;
    this.#attack = attack;
    this.#defense = defense;
    this.#belt = [];
  }
  // 인스턴스 메소드: 인스턴스 속성을 관리한다.
  addPotion(potion) {
    if (this.#belt.length < 5) {
      this.#belt.push(potion);
    } else if (this.#belt.length === 5) {
      console.log("belt가 가득 찼습니다");
    }
  }
  usePotion() {
    if (this.#belt.length === 0) {
      console.log("포션을 모두 사용했습니다");
    } else {
      this.#health += this.#belt[0].getHealingAmount();
      this.#belt.shift();
    }
  }
  getName() {
    return this.#name;
  }
  getHealth() {
    return this.#health;
  }
  getAttack() {
    return this.#attack;
  }
  getDefense() {
    return this.#defense;
  }
  takeDamage(damage) {
    this.#health -= damage;
  }
  attckCharacter(otherCharacter) {
    const damage = this.#attack - otherCharacter.getDefense();
    otherCharacter.takeDamage(damage);
  }
  showStatus() {
    return `${this.#name}님의 남은 체력: ${this.#health}`;
  }
}
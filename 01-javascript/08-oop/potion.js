export default class Potion {
  #healingAmount;

  constructor(healingAmount) {
    this.#healingAmount = healingAmount;
  }

  getHealingAmount() {
    return this.#healingAmount;
  }
}
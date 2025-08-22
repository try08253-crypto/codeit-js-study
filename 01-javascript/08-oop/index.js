import Warrior from "../warrior.js";
import Potion from "../potion.js";

const character1 = new Warrior("광전사", 100, 10, 5);
const character2 = new Warrior("미쳐 날뛰는 전사", 200, 10, 5);

console.log(character1.showStatus());
console.log(character2.showStatus());

character1.attckCharacter(character2);

console.log(character1.showStatus());
console.log(character2.showStatus());

const potion1 = new Potion(2);
const potion2 = new Potion(2);
const potion3 = new Potion(2);
const potion4 = new Potion(2);
const potion5 = new Potion(2);
const potion6 = new Potion(2);

character2.addPotion(potion1);
character2.addPotion(potion2);
character2.addPotion(potion3);
character2.addPotion(potion4);
character2.addPotion(potion5);
character2.addPotion(potion6); // 5개 초과해서 포션을 담으려고 하면, belt가 가득 찼습니다. 라고 출력하세요.
character2.usePotion(); // 체력이 회복되고 남은 체력이 표시됩니다.
character2.usePotion(); // 체력이 회복되고 남은 체력이 표시됩니다.
character2.usePotion(); // 체력이 회복되고 남은 체력이 표시됩니다.
character2.usePotion(); // 체력이 회복되고 남은 체력이 표시됩니다.
character2.usePotion(); // 체력이 회복되고 남은 체력이 표시됩니다.
character2.usePotion(); // 남은 포션이 없다고 출력합니다.

console.log(character1.showStatus());
console.log(character2.showStatus());
// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

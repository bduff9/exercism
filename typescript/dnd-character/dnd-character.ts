export class DnDCharacter {
  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
  wisdom: number

  constructor() {
    this.charisma = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.strength = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
  }

  get hitpoints(): number {
    return DnDCharacter.getModifierFor(this.constitution) + 10;
  }

  private static getDiceThrow(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  public static generateAbilityScore(): number {
    const diceThrows = [
      this.getDiceThrow(),
      this.getDiceThrow(),
      this.getDiceThrow(),
      this.getDiceThrow(),
    ];

    return diceThrows.reduce((sum, current) => sum + current, 0) - Math.min(...diceThrows);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}

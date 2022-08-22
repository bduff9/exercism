export default class Robot {
  private static readonly AVAILABLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private static usedNames = new Set<string>();
  public name: string;

  constructor() {
    this.name = this.generateName();
  }

  private static randomString(length: number): string {
    let string = '';

    while (string.length < length) {
      const index = Math.floor(Math.random() * this.AVAILABLE_CHARS.length);

      string += this.AVAILABLE_CHARS[index];
    }

    return string;
  }

  private static randomNumber(length: number): string {
    const maxNumber = 10^length - 1;
    const number = Math.floor(Math.random() * maxNumber);

    return `${number}`.padStart(length, '0');
  }

  public generateName(): string {
    let name = `${Robot.randomString(2)}${Robot.randomNumber(3)}`;

    while (Robot.usedNames.has(name)) {
      name = `${Robot.randomString(2)}${Robot.randomNumber(3)}`;
    }

    Robot.usedNames.add(name);

    return name;
  }

  public resetName(): void {
    this.name = this.generateName();
  }

  public static releaseNames(): void {
    this.usedNames.clear();
  }
}

export class ResistorColor {
  private readonly COLOR_LIST = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  private colors: string[]

  constructor(colors: string[]) {
    if (colors.length < 2) throw new Error('At least two colors need to be present');

    // If needed, validate here that valid colors were passed in

    this.colors = colors;
  }

  value = (): number =>
    this.COLOR_LIST.indexOf(this.colors[0]) * 10 + this.COLOR_LIST.indexOf(this.colors[1]);

}

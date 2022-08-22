export default class Gigasecond {
  private readonly GIGASECOND_IN_MS = 10**12;

  constructor (private initial: Date) {}

  date(): Date {
    return new Date(this.initial.getTime() + this.GIGASECOND_IN_MS);
  }
}

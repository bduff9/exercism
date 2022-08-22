export default class Bob {
  hey(greeting: string): string {
    const trimmed = greeting.trim();
    const isSilence = trimmed.length === 0;

    if (isSilence) {
      return 'Fine. Be that way!';
    }

    const isQuestion = trimmed.endsWith('?');
    const lettersOnly = trimmed.replace(/[^a-zA-Z]*/g, '');
    const isShouting = lettersOnly.length > 0 && lettersOnly.replace(/[A-Z]*/g, '').length === 0;

    if (isQuestion) {
      if (isShouting) {
        return "Calm down, I know what I'm doing!";
      }

      return 'Sure.';
    }

    if (isShouting) {
      return 'Whoa, chill out!';
    }

    return 'Whatever.';
  }
}

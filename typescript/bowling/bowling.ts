type Frame = {
  rolls: Array<number>;
  isLastFrame: boolean;
};

export class Bowling {
  private FRAMES_IN_GAME = 10;
  private frames = new Array<Frame>();

  public roll(pins: number): void {
    if (pins < 0) throw new Error('Negative roll is invalid');

    if (pins > 10) throw new Error('Pin count exceeds pins on the lane');

    this.addRoll(pins);
  }

  private addRoll(pins: number): void {
    let frameIndex = this.frames.length - 1;
    const lastFrame = this.frames[frameIndex];
    let currentFrame = lastFrame;

    if (!currentFrame || this.isFrameDone(frameIndex)) {
      if (currentFrame?.isLastFrame) {
        throw new Error('Cannot roll after game is over');
      }

      currentFrame = {
        rolls: [],
        isLastFrame: false,
      };

      frameIndex = this.frames.push((currentFrame)) - 1;
      currentFrame.isLastFrame = frameIndex + 1 === this.FRAMES_IN_GAME;
    }

    currentFrame.rolls.push(pins);

    let pinsInFrame = 0;

    for (const roll of currentFrame.rolls) {
      pinsInFrame += roll;

      if (pinsInFrame === 10) pinsInFrame = 0;
    }

    if (pinsInFrame > 10) {
      throw new Error('Pin count exceeds pins on the lane');
    }
  }

  private isFrameDone(frameIndex: number): boolean {
    const frame = this.frames[frameIndex];

    if (frame.isLastFrame) {
      return this.isStrike(frameIndex) || this.isSpare(frameIndex) ? frame.rolls.length === 3 : frame.rolls.length === 2;
    }

    return this.isStrike(frameIndex) || frame.rolls.length === 2;
  }

  public score(): number {
    if (this.frames.length < this.FRAMES_IN_GAME) {
      throw new Error('Score cannot be taken until the end of the game');
    }

    let score = 0;

    for (let frameIndex = 0; frameIndex < this.FRAMES_IN_GAME; frameIndex++) {
      if (!this.isFrameDone(frameIndex)) {
        throw new Error('Score cannot be taken until the end of the game');
      }

      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);

        continue;
      }

      if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex);

        continue;
      }

      score += this.sumOfBallsInFrame(frameIndex);
    }

    return score;
  }

  private isStrike(frameIndex: number): boolean {
    const frame = this.frames[frameIndex];

    return frame.rolls[0] === 10;
  }

  private strikeBonus(frameIndex: number): number {
    const frame = this.frames[frameIndex];

    if (frame.isLastFrame) {
      return frame.rolls[1] + frame.rolls[2];
    }

    const nextFrame = this.frames[frameIndex + 1];
    const nextNextFrame = this.frames[frameIndex + 2];
    const rolls = [...(nextFrame?.rolls ?? []), ...(nextNextFrame?.rolls ?? [])];

    return rolls[0] + rolls[1];
  }

  private isSpare(frameIndex: number): boolean {
    const frame = this.frames[frameIndex];

    return frame.rolls[0] + frame.rolls[1] === 10;
  }

  private spareBonus(frameIndex: number): number {
    const frame = this.frames[frameIndex];
    const nextFrame = this.frames[frameIndex + 1];

    if (frame.isLastFrame) {
      return frame.rolls[2];
    }

    return nextFrame.rolls[0];
  }

  private sumOfBallsInFrame(frameIndex: number): number {
    const frame = this.frames[frameIndex];

    return frame.rolls.reduce((acc, roll) => acc + roll, 0);
  }
}

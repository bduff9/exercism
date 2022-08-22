type Input = Record<string, Array<string>>;
type Output = Record<string, number>;

const transform = (input: Input): Output => {
  return Object.entries(input).reduce((output, [point, letters]): Output => {
    letters.forEach(letter => { output[letter.toLowerCase()] = +point; });

    return output;
  }, {} as Output);
}

export default transform;

export const transpose = (input: Array<string>): Array<string> => {
  const output: Array<string> = [];

  for (let row = 0; row < input.length; row++) {
    const str = input[row];

    for (let i = 0; i < str.length; i++) {
      if (output[i] === undefined) {
        output[i] = '';
      }

      output[i] = `${output[i].padEnd(row)}${str[i]}`;
    }
  }

  return output;
};

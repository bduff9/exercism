// In-memory cache to speed up multiple runs
const FOUND_PRIMES: Array<number> = [0];

const isPrime = (num: number): boolean => {
  if (num < 2) return false;

  const ceiling = Math.floor(Math.sqrt(num));

  for (let i = 1; i < FOUND_PRIMES.length; i++) {
    const test = FOUND_PRIMES[i];

    if (test > ceiling) {
      break;
    }

    if (num % test === 0) {
      return false;
    }
  }

  return true;
};

export const nth = (n: number): number => {
  if (n < 1) {
    throw new Error('Prime is not possible')
  }

  let num = FOUND_PRIMES[FOUND_PRIMES.length - 1] + 1;

  while (!FOUND_PRIMES[n]) {
    if (isPrime(num)) {
      FOUND_PRIMES.push(num);
    }

    num++;
  }

  return FOUND_PRIMES[n];
};

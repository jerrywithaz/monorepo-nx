import { isEven } from '@zerry/package-1';

export const isOdd = (x: number) => !isEven(x);

export const isNotOdd = (x: number) => isEven(x);

export const toRem = (pixel: number) => `${pixel / 16}rem`;
export const borderRadius = (multiplier: number): string => toRem(multiplier * 4);
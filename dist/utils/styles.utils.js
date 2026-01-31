export const toRem = (pixel) => `${pixel / 16}rem`;
export const borderRadius = (multiplier) => toRem(multiplier * 4);

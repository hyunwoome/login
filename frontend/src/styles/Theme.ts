const calRem = (size: number): string => `${size / 16}rem`;

const fontSize = {
  xs: calRem(12),
  sm: calRem(14),
  md: calRem(16),
  lg: calRem(18),
  xl: calRem(20),
};

const titleSize = {
  xs: calRem(30),
  sm: calRem(40),
  md: calRem(50),
  lg: calRem(60),
  xl: calRem(70),
};

const padding = {
  xs: calRem(12),
  sm: calRem(14),
  md: calRem(16),
  lg: calRem(18),
  xl: calRem(20),
};

const margin = {
  xs: calRem(12),
  sm: calRem(14),
  md: calRem(16),
  lg: calRem(18),
  xl: calRem(20),
};

const device = {
  mobile: `only screen and (max-width: 744px)`,
};

const color = {
  white: '#ffffff',
  gray: '#f2f2f2',
  lightGray: '#8f8f8f',
  blue: '#4794F0',
};

const Theme = {
  fontSize,
  titleSize,
  padding,
  margin,
  device,
  color,
};

export {Theme};

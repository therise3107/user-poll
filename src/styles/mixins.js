export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const breakpointMax = (screenSize) =>
  `@media (max-width: ${breakpoints[screenSize] - 1}px)`;
export const breakpointMin = (screenSize) =>
  `@media (min-width: ${breakpoints[screenSize]}px)`;

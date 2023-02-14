import theme from "../store/theme";
import fontSize from "../store/fontSize";
export const toggleFontSize = (originalSize) => {
  const size = fontSize.fontSize;
  if (size === "original") return `${originalSize}rem`;
  if (size === "normal") return `${originalSize + 0.175}rem`;
  if (size === "medium") return `${originalSize + 0.275}rem`;
  if (size === "large") return `${originalSize + 0.575}rem`;
};
export const toggleClassName = (
  mainTheme,
  whiteTheme,
  blackTheme,
  contrastTheme
) => {
  const currentTheme = theme.theme;
  if (currentTheme === "main") return mainTheme;
  if (currentTheme === "white") return whiteTheme;
  if (currentTheme === "black") return blackTheme;
  if (currentTheme === "contrast") return contrastTheme;
};
export const disabled = () => {
  fontSize.normal();
  theme.white();
};

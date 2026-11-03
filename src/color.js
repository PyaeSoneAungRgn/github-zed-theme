/**
 * Returns `hex` with its alpha channel set to `alphaValue` (0–1), as an
 * 8-digit `#rrggbbaa` color. Accepts `#rgb`, `#rrggbb` and `#rrggbbaa`;
 * returns `null` for anything else.
 *
 * @param {string} hex
 * @param {number} alphaValue
 */
export function withAlpha(hex, alphaValue) {
  const hexAlpha = Math.round(alphaValue * 255).toString(16).padStart(2, '0');

  // Remove the '#' if present
  let color = hex.replace('#', '');

  // If it's already an 8-digit HEXA, replace the last two characters
  if (color.length === 8) {
    color = color.slice(0, 6) + hexAlpha;
  }
  // If it's a 6-digit HEX, append the new alpha
  else if (color.length === 6) {
    color += hexAlpha;
  }
  // If it's a 3-digit HEX, expand it and append the new alpha
  else if (color.length === 3) {
    color = color.split('').map(char => char + char).join('') + hexAlpha;
  }
  else {
    return null;
  }

  return '#' + color;
}

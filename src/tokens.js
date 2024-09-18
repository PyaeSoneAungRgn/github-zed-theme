import lightColors from "@primer/primitives/dist/figma/themes/light.json" with { type: 'json' }
import lightColorblindColors from "@primer/primitives/dist/figma/themes/light-colorblind.json" with { type: 'json' }
import lightHighContrastColors from "@primer/primitives/dist/figma/themes/light-high-contrast.json" with { type: 'json' }
import lightTritanopiaColors from "@primer/primitives/dist/figma/themes/light-tritanopia.json" with { type: 'json' }

import darkColors from "@primer/primitives/dist/figma/themes/dark.json" with { type: 'json' }
import darkColorblindColors from "@primer/primitives/dist/figma/themes/dark-colorblind.json" with { type: 'json' }
import darkHighContrastColors from "@primer/primitives/dist/figma/themes/dark-high-contrast.json" with { type: 'json' }
import darkTritanopiaColors from "@primer/primitives/dist/figma/themes/dark-tritanopia.json" with { type: 'json' }
import darkDimmedColors from "@primer/primitives/dist/figma/themes/dark-dimmed.json" with { type: 'json' }

import lightScale from "@primer/primitives/dist/figma/scales/light.json" with { type: 'json' }
import lightHightContrastScale from "@primer/primitives/dist/figma/scales/light-high-constrast.json" with { type: 'json' }
import darkScale from "@primer/primitives/dist/figma/scales/dark.json" with { type: 'json' }
import darkHighContrastScale from "@primer/primitives/dist/figma/scales/dark-high-constrast.json" with { type: 'json' }
import darkDimmedScale from "@primer/primitives/dist/figma/scales/dark-dimmed.json" with { type: 'json' }

const themes = {
  'light': lightColors,
  'light_colorblind': lightColorblindColors,
  'light_high_contrast': lightHighContrastColors,
  'light_tritanopia': lightTritanopiaColors,
  'dark': darkColors,
  'dark_colorblind': darkColorblindColors,
  'dark_high_contrast': darkHighContrastColors,
  'dark_tritanopia': darkTritanopiaColors,
  'dark_dimmed': darkDimmedColors,
};

/**
 * @typedef {keyof typeof themes} ThemeKey
 */

const scales = {
  'light': lightScale,
  'light_high_contrast': lightHightContrastScale,
  'dark': darkScale,
  'dark_high_contrast': darkHighContrastScale,
  'dark_dimmed': darkDimmedScale,

  // TODO: figure out what to do for these...
  // At the moment, primer doesn't have colorblind or tritanopia scales, 
  // only functional color tokens (generated in the themes above)
  'light_colorblind': lightScale,
  'light_tritanopia': lightScale,
  'dark_tritanopia': darkScale,
  'dark_colorblind': darkScale,
};


/**
 * Convert an rgba color to a hex color.
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 */
function rgbaToHexA(r, g, b, a) {
  return `#${Math.round(r * 255).toString(16).padStart(2, '0')}${Math.round(g * 255).toString(16).padStart(2, '0')}${Math.round(b * 255).toString(16).padStart(2, '0')}${Math.round(a * 255).toString(16).padStart(2, '0')}`;
}

/**
 * @typedef ColorToken
 * @property {string} name
 * @property {"COLOR"} type
 * @property {object} value
 * @property {number} value.r
 * @property {number} value.g
 * @property {number} value.b
 * @property {number} value.a
 */

/**
 * @typedef FloatToken
 * @property {string} name
 * @property {"FLOAT"} type
 * @property {number} value
 */

/**
 * @typedef {ColorToken | FloatToken} Token
 */

/**
 * Remap the theme to a format that is easier to use in the code.
 * @param {Token[]} theme
 */
function remapTheme(theme) {
  // imported themes are in the format with { type: 'json' }
  // [
  //   { name: "some/token", value: { r: 1, g: 1 b: 1 a: 1 } }
  // ]
  //
  // we want to convert it to
  // {
  //  "some/token": "#rrggbbaa"
  // }

  return theme.reduce(
    (acc, token) => {
      if (token.type !== 'COLOR' || !token.value) return acc;
      const { name, value } = token;
      const color = rgbaToHexA(value.r, value.g, value.b, value.a);
      acc[name] = color;
      return acc;
    },
    /** @type Record<string, string> */({})
  );
}

/**
 * @param {ThemeKey} theme
 */
export function getColorTokens(theme) {
  return { ...remapTheme(scales[theme]), ...remapTheme(themes[theme]) };
}


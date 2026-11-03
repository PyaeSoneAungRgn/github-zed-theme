import fs from 'node:fs/promises'
import { getBlurredOverrides } from './blur.js'
import { getTheme } from './theme.js'

const themes = [
  getTheme({ themeKey: 'light', name: "GitHub Light", type: 'light' }),
  getTheme({ themeKey: 'light_colorblind', name: "GitHub Light Colorblind", type: 'light' }),
  getTheme({ themeKey: 'light_high_contrast', name: "GitHub Light High Contrast", type: 'light' }),
  getTheme({ themeKey: 'light_tritanopia', name: "GitHub Light Tritanopia", type: 'light' }),
  getTheme({ themeKey: 'dark', name: "GitHub Dark", type: 'dark' }),
  getTheme({ themeKey: 'dark_colorblind', name: "GitHub Dark Colorblind", type: 'dark' }),
  getTheme({ themeKey: 'dark_high_contrast', name: "GitHub Dark High Contrast", type: 'dark' }),
  getTheme({ themeKey: 'dark_tritanopia', name: "GitHub Dark Tritanopia", type: 'dark' }),
  getTheme({ themeKey: 'dark_dimmed', name: "GitHub Dark Dimmed", type: 'dark' }),
]

const writeData = {
  "$schema": "https://zed.dev/schema/themes/v0.2.0.json",
  "name": "GitHub Theme",
  "author": "Pyae Sone Aung",
  "themes": themes,
}

await fs.mkdir('./themes', { recursive: true })

await fs.writeFile('./themes/github_theme.json', JSON.stringify(writeData, null, 2))

// Keep the blurred background settings in the README in sync with the themes.
const README_PATH = './README.md'
const START_MARKER = '<!-- blurred-overrides:start -->'
const END_MARKER = '<!-- blurred-overrides:end -->'

const blurredSettings = {
  "theme_overrides": Object.fromEntries(
    themes.map(theme => [theme.name, getBlurredOverrides(theme)])
  ),
}

const readme = await fs.readFile(README_PATH, 'utf8')
const start = readme.indexOf(START_MARKER)
const end = readme.indexOf(END_MARKER)

if (start === -1 || end < start) {
  throw new Error(`${README_PATH} must contain ${START_MARKER} followed by ${END_MARKER}`)
}

const updatedReadme = readme.slice(0, start + START_MARKER.length)
  + '\n```json\n' + JSON.stringify(blurredSettings, null, 2) + '\n```\n'
  + readme.slice(end)

if (updatedReadme !== readme) {
  await fs.writeFile(README_PATH, updatedReadme)
}

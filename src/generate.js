import fs from 'node:fs/promises'
import { getTheme } from './theme.js'

const writeData = {
  "$schema": "https://zed.dev/schema/themes/v0.1.0.json",
  "name": "Github Theme",
  "author": "Pyae Sone Aung",
  "themes": [
    getTheme({ themeKey: 'light', name: "Github Light Default", type: 'light' }),
    getTheme({ themeKey: 'light_colorblind', name: "Github Light Colorblind", type: 'light' }),
    getTheme({ themeKey: 'light_high_contrast', name: "Github Light High Contrast", type: 'light' }),
    getTheme({ themeKey: 'light_tritanopia', name: "Github Light Tritanopia", type: 'light' }),
    getTheme({ themeKey: 'dark', name: "Github Dark Default", type: 'dark' }),
    getTheme({ themeKey: 'dark_colorblind', name: "Github Dark Colorblind", type: 'dark' }),
    getTheme({ themeKey: 'dark_high_contrast', name: "Github Dark High Contrast", type: 'dark' }),
    getTheme({ themeKey: 'dark_tritanopia', name: "Github Dark Tritanopia", type: 'dark' }),
    getTheme({ themeKey: 'dark_dimmed', name: "Github Dark Dimmed", type: 'dark' }),
  ]
}

await fs.mkdir('./themes', { recursive: true })

await fs.writeFile('./themes/github_theme.json', JSON.stringify(writeData, null, 2))

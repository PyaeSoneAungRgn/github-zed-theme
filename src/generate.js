import fs from 'node:fs/promises'
import { getTheme } from './theme.js'

const writeData = {
  "$schema": "https://zed.dev/schema/themes/v0.1.0.json",
  "name": "GitHub Theme",
  "author": "Pyae Sone Aung",
  "themes": [
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
}

await fs.mkdir('./themes', { recursive: true })

await fs.writeFile('./themes/github_theme.json', JSON.stringify(writeData, null, 2))

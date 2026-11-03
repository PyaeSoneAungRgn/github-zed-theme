import { withAlpha } from './color.js'

// Opacity of the window's base layer (the app background, title bar and status
// bar), which Zed paints straight onto the blurred window.
const BASE_ALPHA = 0.7

// Opacity of the editor, which Zed paints on top of the base layer. Stacked on
// BASE_ALPHA it ends up about 85% opaque, so code stays easy to read.
const EDITOR_ALPHA = 0.5

const TRANSPARENT = '#00000000'

/**
 * Builds the `theme_overrides` entry that gives a theme a translucent, blurred
 * window background while keeping its colors.
 *
 * @param {{ style: Record<string, any> }} theme A theme built by `getTheme`.
 */
export function getBlurredOverrides({ style }) {
  /** @param {string} key */
  const base = key => withAlpha(style[key], BASE_ALPHA)
  /** @param {string} key */
  const editor = key => withAlpha(style[key], EDITOR_ALPHA)

  return {
    "background.appearance": "blurred",

    // Painted directly on the window. `background` takes the panel color, as
    // it now shows through every panel below.
    "background": base('panel.background'),
    "title_bar.background": base('title_bar.background'),
    "title_bar.inactive_background": base('title_bar.inactive_background'),
    "status_bar.background": base('status_bar.background'),

    // Painted on top of `background` in the same color, so they are cleared:
    // stacking translucent layers would make them nearly opaque.
    "panel.background": TRANSPARENT,
    "surface.background": TRANSPARENT,
    "tab_bar.background": TRANSPARENT,
    "tab.inactive_background": TRANSPARENT,
    "terminal.background": TRANSPARENT,

    // The editor and the active tab add a translucent layer of their own color
    // on top, so they stand out from the panels as in the opaque theme.
    "editor.background": editor('editor.background'),
    "editor.gutter.background": editor('editor.gutter.background'),
    "editor.active_line.background": editor('editor.active_line.background'),
    "tab.active_background": editor('tab.active_background'),
    "toolbar.background": editor('toolbar.background'),
  }
}

import { getColorTokens } from "./tokens.js";


/**
 * @param {object} params
 * @param {import("./tokens.js").ThemeKey} params.themeKey
 * @param {string} params.name
 * @param {'light' | 'dark'} params.type
 */
export function getTheme({ themeKey, name, type }) {
  const tokens = getColorTokens(themeKey)

  /**
   * @param {string} lightTokenName
   * @param {string} darkTokenName
   */
  const lightDark = (lightTokenName, darkTokenName) => {
    return themeKey.startsWith('light') ? tokens[lightTokenName] : tokens[darkTokenName]
  }

  return {
    "$schema": "https://zed.dev/schema/themes/v0.1.0.json",
    appearance: type,
    name,
    style: {
      "background": tokens['bgColor/default'],
      "border": tokens['borderColor/default'],

      "border.disabled": tokens['borderColor/disabled'],
      "border.focused": tokens['borderColor/accent-emphasis'],
      "border.selected": tokens['borderColor/accent-emphasis'],
      "border.transparent": tokens['borderColor/transparent'],
      "border.variant": tokens['borderColor/muted'],

      "conflict": tokens['fgColor/severe'],
      "conflict.background": tokens['bgColor/severe-muted'],
      "conflict.border": tokens['borderColor/severe-muted'],

      "created": tokens['fgColor/success'],
      "created.background": tokens['bgColor/success-muted'],
      "created.border": tokens['borderColor/success-muted'],

      "deleted": tokens['fgColor/danger'],
      "deleted.background": tokens['bgColor/danger-muted'],
      "deleted.border": tokens['borderColor/danger-muted'],

      "drop_target.background": tokens['bgColor/accent-muted'],

      "editor.active_line.background": tokens['bgColor/muted'],
      "editor.active_line_number": tokens['fgColor/default'],
      "editor.active_wrap_guide": tokens['borderColor/muted'],
      "editor.background": tokens['bgColor/default'],
      "editor.document_highlight.read_background": tokens['bgColor/accent-muted'],
      "editor.document_highlight.write_background": tokens['bgColor/accent-emphasis'],
      "editor.foreground": tokens['fgColor/default'],
      "editor.gutter.background": tokens['bgColor/default'],
      "editor.highlighted_line.background": tokens['bgColor/neutral-muted'],
      "editor.invisible": tokens['fgColor/disabled'],
      "editor.line_number": tokens['fgColor/muted'],
      "editor.subheader.background": tokens['bgColor/muted'],
      "editor.wrap_guide": tokens['borderColor/muted'],

      "element.active": tokens['bgColor/neutral-muted'],
      "element.background": tokens['bgColor/neutral-muted'],
      "element.disabled": tokens['bgColor/disabled'],
      "element.hover": tokens['bgColor/neutral-muted'],
      "element.selected": tokens['bgColor/neutral-muted'],

      "elevated_surface.background": tokens['bgColor/muted'],

      "error": tokens['fgColor/danger'],
      "error.background": tokens['bgColor/muted'],
      "error.border": tokens['borderColor/muted'],

      "ghost_element.active": tokens['bgColor/neutral-muted'],
      "ghost_element.background": tokens['bgColor/transparent'],
      "ghost_element.disabled": tokens['bgColor/disabled'],
      "ghost_element.hover": tokens['bgColor/default'],
      "ghost_element.selected": tokens['bgColor/neutral-muted'],

      "hint": tokens['fgColor/muted'],
      "hint.background": tokens['bgColor/muted'],
      "hint.border": tokens['borderColor/muted'],

      "icon": tokens['fgColor/default'],
      "icon.background": tokens['bgColor/default'],
      "icon.border": tokens['borderColor/default'],
      "icon.accent": tokens['fgColor/accent'],
      "icon.muted": tokens['fgColor/muted'],
      "icon.disabled": tokens['fgColor/disabled'],
      "icon.placeholder": tokens['fgColor/fgColor/placeholder'],

      "ignored": tokens['fgColor/disabled'],
      "ignored.background": tokens['bgColor/disabled'],
      "ignored.border": tokens['borderColor/disabled'],

      "info": tokens['fgColor/attention'],
      "info.background": tokens['bgColor/muted'],
      "info.border": tokens['borderColor/muted'],

      "link_text.hover": tokens['fgColor/link'],

      "modified": tokens['fgColor/attention'],
      "modified.background": tokens['bgColor/attention-muted'],
      "modified.border": tokens['borderColor/attention-muted'],

      "pane.focused_border": tokens['borderColor/default'],
      "panel.background": tokens['bgColor/inset'],
      "panel.focused_border": tokens['borderColor/default'],

      "predictive": tokens['fgColor/placeholder'],
      "predictive.background": tokens['bgColor/neutral-muted'],
      "predictive.border": tokens['borderColor/neutral-muted'],

      "renamed": tokens['fgColor/success'],
      "renamed.background": tokens['bgColor/success-muted'],
      "renamed.border": tokens['borderColor/success-muted'],

      "scrollbar.thumb.border": tokens['borderColor/transparent'],
      "scrollbar.thumb.hover_background": tokens['bgColor/muted'],
      "scrollbar.track.background": tokens['bgColor/transparent'],
      "scrollbar.track.border": tokens['borderColor/transparent'],
      "scrollbar_thumb.background": tokens['bgColor/neutal-muted'],

      "search.match_background": tokens['bgColor/attention-muted'],

      "status_bar.background": tokens['bgColor/inset'],

      "success": tokens['fgColor/success'],
      "success.background": tokens['bgColor/success-muted'],
      "success.border": tokens['borderColor/success-muted'],

      "surface.background": tokens['bgColor/inset'],

      "tab.active_background": tokens['bgColor/default'],
      "tab.inactive_background": tokens['bgColor/inset'],
      "tab_bar.background": tokens['bgColor/inset'],

      "terminal.ansi.black": tokens['color/ansi/black'],
      "terminal.ansi.bright_black": tokens['color/ansi/black-bright'],
      "terminal.ansi.dim_black": tokens['color/ansi/black'],
      "terminal.ansi.blue": tokens['color/ansi/blue'],
      "terminal.ansi.bright_blue": tokens['color/ansi/blue-bright'],
      "terminal.ansi.dim_blue": tokens['color/ansi/blue'],
      "terminal.ansi.cyan": tokens['color/ansi/cyan'],
      "terminal.ansi.bright_cyan": tokens['color/ansi/cyan-bright'],
      "terminal.ansi.dim_cyan": tokens['color/ansi/cyan'],
      "terminal.ansi.green": tokens['color/ansi/green'],
      "terminal.ansi.bright_green": tokens['color/ansi/green-bright'],
      "terminal.ansi.dim_green": tokens['color/ansi/green'],
      "terminal.ansi.magenta": tokens['color/ansi/magenta'],
      "terminal.ansi.bright_magenta": tokens['color/ansi/magenta-bright'],
      "terminal.ansi.dim_magenta": tokens['color/ansi/magenta'],
      "terminal.ansi.red": tokens['color/ansi/red'],
      "terminal.ansi.bright_red": tokens['color/ansi/red-bright'],
      "terminal.ansi.dim_red": tokens['color/ansi/red'],
      "terminal.ansi.white": tokens['color/ansi/white'],
      "terminal.ansi.bright_white": tokens['color/ansi/white-bright'],
      "terminal.ansi.dim_white": tokens['color/ansi/white'],
      "terminal.ansi.yellow": tokens['color/ansi/yellow'],
      "terminal.ansi.bright_yellow": tokens['color/ansi/yellow-bright'],
      "terminal.ansi.dim_yellow": tokens['color/ansi/yellow'],

      "terminal.background": tokens['bgColor/inset'],
      "terminal.bright_foreground": tokens['fgColor/onEmphasis'],
      "terminal.dim_foreground": tokens['fgColor/default'],
      "terminal.foreground": tokens['fgColor/muted'],

      "text": tokens['fgColor/default'],
      "text.accent": tokens['fgColor/accent'],
      "text.disabled": tokens['fgColor/disabled'],
      "text.muted": tokens['fgColor/muted'],
      "text.placeholder": tokens['fgColor/placeholder'],

      "title_bar.background": tokens['bgColor/inset'],
      "toolbar.background": tokens['bgColor/default'],

      "unreachable": tokens['fgColor/disabled'],
      "unreachable.background": tokens['bgColor/disabled'],
      "unreachable.border": tokens['borderColor/disabled'],

      "warning": tokens['fgColor/attention'],
      "warning.background": tokens['bgColor/muted'],
      "warning.border": tokens['borderColor/muted'],

      "players":
        [
          "blue",
          "orange",
          "pink",
          "green",
          "purple",
          "yellow",
          "teal",
          "red"
        ].map(color => ({
          "cursor": tokens[`data/${color}/color`],
          "background": tokens[`data/${color}/color/muted`],
          "border": tokens[`data/${color}/color/muted`]
        })),

      "syntax": {
        "attribute": {
          "color": null,
          "font_style": null,
          "font_weight": null
        },
        "boolean": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": null
        },
        "comment": {
          "color": tokens["base/color/neutral/9"],
          "font_style": null,
          "font_weight": null
        },
        "comment.doc": {
          "color": tokens["base/color/neutral/9"],
          "font_style": null,
          "font_weight": null
        },
        "constant": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": null
        },
        "constructor": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": null
        },
        "embedded": {
          "color": lightDark("base/color/red/5", "base/color/red/3"),
          "font_style": null,
          "font_weight": null
        },
        "emphasis": {
          "color": null,
          "font_style": "italic",
          "font_weight": null
        },
        "emphasis.strong": {
          "color": null,
          "font_style": null,
          "font_weight": 700
        },
        "enum": {
          "color": lightDark("base/color/orange/6", "base/color/orange/2"),
          "font_style": null,
          "font_weight": null
        },
        "function": {
          "color": lightDark("base/color/purple/5", "base/color/purple/2"),
          "font_style": null,
          "font_weight": null
        },
        "function.method": {
          "color": lightDark("base/color/purple/5", "base/color/purple/2"),
          "font_style": null,
          "font_weight": null
        },
        "function.special.definition": {
          "color": lightDark("base/color/purple/5", "base/color/purple/2"),
          "font_style": null,
          "font_weight": null
        },
        "hint": {
          "color": tokens["fgColor/muted"],
          "font_style": null,
          "font_weight": 700
        },
        "keyword": {
          "color": lightDark("base/color/red/5", "base/color/red/3"),
          "font_style": null,
          "font_weight": null
        },
        "label": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": null
        },
        "link_text": {
          "color": lightDark("base/color/blue/8", "base/color/blue/1"),
          "font_style": "italic",
          "font_weight": null
        },
        "link_uri": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": null
        },
        "number": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": null
        },
        "operator": {
          "color": tokens["fgColor/default"],
          "font_style": null,
          "font_weight": null
        },
        "predictive": {
          "color": tokens["fgColor/placeholder"],
          "font_style": "italic",
          "font_weight": null
        },
        "preproc": {
          "color": lightDark("base/color/red/5", "base/color/red/3"),
          "font_style": null,
          "font_weight": null
        },
        "primary": {
          "color": tokens["fgColor/default"],
          "font_style": null,
          "font_weight": null
        },
        "property": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": null
        },
        "punctuation": {
          "color": tokens["fgColor/default"],
          "font_style": null,
          "font_weight": null
        },
        "punctuation.bracket": {
          "color": tokens["fgColor/default"],
          "font_style": null,
          "font_weight": null
        },
        "punctuation.delimiter": {
          "color": tokens["fgColor/default"],
          "font_style": null,
          "font_weight": null
        },
        "punctuation.list_marker": {
          "color": lightDark("base/color/orange/6", "base/color/orange/2"),
          "font_style": null,
          "font_weight": null
        },
        "punctuation.special": {
          "color": lightDark("base/color/red/5", "base/color/red/3"),
          "font_style": null,
          "font_weight": null
        },
        "string": {
          "color": lightDark("base/color/blue/8", "base/color/blue/1"),
          "font_style": null,
          "font_weight": null
        },
        "string.escape": {
          "color": lightDark("base/color/green/6", "base/color/green/1"),
          "font_style": "bold",
          "font_weight": null
        },
        "string.regex": {
          "color": lightDark("base/color/blue/8", "base/color/blue/1"),
          "font_style": null,
          "font_weight": null
        },
        "string.special": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": null
        },
        "string.special.symbol": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": null
        },
        "tag": {
          "color": lightDark("base/color/green/6", "base/color/green/1"),
          "font_style": null,
          "font_weight": null
        },
        "text.literal": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": null
        },
        "title": {
          "color": lightDark("base/color/blue/6", "base/color/blue/2"),
          "font_style": null,
          "font_weight": 700
        },
        "type": {
          "color": lightDark("base/color/orange/6", "base/color/orange/2"),
          "font_style": null,
          "font_weight": null
        },
        "variable": {
          "color": tokens["fgColor/default"],
          "font_style": null,
          "font_weight": null
        },
        "variable.special": {
          "color": lightDark("base/color/red/5", "base/color/red/3"),
          "font_style": null,
          "font_weight": null
        },
        "variant": {
          "color": lightDark("base/color/orange/6", "base/color/orange/2"),
          "font_style": null,
          "font_weight": null
        }
      }
    }
  }
}

{
  "editor.snippetSuggestions": "top",
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.fontFamily": "Operator Mono",
  "editor.fontSize": 16,
  "editor.formatOnSave": true,
  "terminal.integrated.automationShell.osx": "zsh",
  "terminal.integrated.fontFamily": "Dank Mono",
  "terminal.integrated.fontSize": 15,
  "workbench.colorTheme": "Andromeda Italic Bordered",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.renderWhitespace": "all",
  "editor.fontLigatures": false,
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          //following will be in italic (=FlottFlott)
          "comment",
          "entity.name.type.class", //class names
          "keyword", //import, export, return…
          "constant", //String, Number, Boolean…, this, super
          "storage.modifier", //static keyword
          "storage.type.class.js" //class keyword
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          //following will be excluded from italics (VSCode has some defaults for italics)
          "invalid",
          "keyword.operator",
          "constant.numeric.css",
          "keyword.other.unit.px.css",
          "constant.numeric.decimal.js",
          "constant.numeric.json"
        ],
        "settings": {
          "fontStyle": ""
        }
      }
    ]
  },
  "workbench.iconTheme": "material-icon-theme",
  "javascript.preferences.quoteStyle": "single",
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "typescript.preferences.quoteStyle": "single",
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "vsicons.dontShowNewVersionMessage": true,
  "prettier.semi": false,
  "workbench.editor.labelFormat": "short",
  "workbench.sideBar.location": "left",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "mssql.connections": [
    {
      "server": "{{put-server-name-here}}",
      "database": "{{put-database-name-here}}",
      "user": "{{put-username-here}}",
      "password": "{{put-password-here}}"
    }
  ],
  "editor.cursorBlinking": "expand"
}

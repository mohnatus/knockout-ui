module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        // "corejs": {
        //   "version": "3",
        //   "proposals": true
        // },
        // "modules": false,
        // "useBuiltIns": "usage",
        "targets": {
          "browsers": [
            "edge >= 16",
            "safari >= 9",
            "firefox >= 57",
            "ie >= 10",
            "ios >= 9",
            "chrome >= 49"
          ]
        }
      }
    ]
  ],
  "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-transform-template-literals"]
}
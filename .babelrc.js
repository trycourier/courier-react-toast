module.exports = {
  "presets": [
    ["@babel/env", { "targets": ">0.25%, not ie 11, not op_mini all" }],
    "@babel/typescript",
    "@babel/react"
  ],
  "plugins": [
    [
      "babel-plugin-inline-import",
      {
        "extensions": [".css"]
      }
    ],
    "inline-react-svg",
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-styled-components",
    ["babel-plugin-react-remove-properties", { "properties": ["data-test-id"] }]
  ],
  "sourceMaps": true,
  "ignore": ['src/__tests__', 'src/__mocks__'],

}

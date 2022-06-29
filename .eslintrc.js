module.exports = {
  extends: [
    "react-app",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "simple-import-sort"
  ],
  rules: {
    "prettier/prettier": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^\\u0000"], ["^@?\\w"], ["^"], ["^\\."], ["^.+\\u0000$"]],
      }
    ]
  }
}
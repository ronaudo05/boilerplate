module.exports = {
  "extends": ["standard", "prettier"],
  "env": {
    "browser": true
  },
  "plugins": ["standard", "prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": true
      }
    ],
    "yoda": 0,
    "no-unused-vars": 1
  },
  "globals": {
    "$": false
  }
};

module.exports = {
  "extends": ["standard", "prettier"],
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": ["standard", "prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": true
      }
    ]
  }
};

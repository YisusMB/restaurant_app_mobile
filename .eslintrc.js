module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "react-native"
  ],
  "settings": {
    'import/resolver': {
      "node": {
        "extensions": ['.js', '.jsx', '.ts', '.tsx'],
        "paths": ['./']
      }
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  "extends" : [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base"
  ],
  "rules" : {
    "arrow-body-style" : 'warn',
    "import/extensions": ["off", "never"]
  }
}

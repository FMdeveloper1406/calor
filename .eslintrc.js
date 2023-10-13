module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  rules: {
    // Your other ESLint rules go here
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};

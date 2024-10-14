export default [
  {
    files: ['**/*.js'], // Target all JS files
    ignores: ['views/**/*.js'], // Ignore all files in the views folder
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
];

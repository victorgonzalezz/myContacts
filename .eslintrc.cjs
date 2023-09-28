module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs,jsx}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 'react/jsx-uses-react': 'off',
    // 'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1, { extensions: ['.js', 'jsx'] },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'max-len': [2, 80, {
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreComments: true,
    }],
  },
};

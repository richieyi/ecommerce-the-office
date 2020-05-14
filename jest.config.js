// module.exports = {
//   preset: 'ts-jest',
//   setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
//   globals: {
//     'ts-jest': {
//       tsConfig: 'tsconfig.jest.json'
//     }
//   }
// };
module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx|tsx)?$': 'babel-jest'
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    // '@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect'
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx|tsx)?$',
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/components$1',
    '@context(.*)$': '<rootDir>/context$1',
    '@pages/(.*)$': '<rootDir>/pages$1',
    '@api/(.*)$': '<rootDir>/api$1',
    '@utils/(.*)$': '<rootDir>/utils$1',
    '@data/(.*)$': '<rootDir>/data$1',
    '@firebase/(.*)$': '<rootDir>/firebase$1'
  },

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  // globals: {
  //   'ts-jest': {
  //     tsConfig: './tsconfig.test.json'
  //   }
  // }
};

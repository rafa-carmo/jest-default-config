import { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', '.next'],
  collectCoverage: true,
  automock: false,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['./setup.ts'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    'next-mdx-remote': '<rootDir>/node_modules/next-mdx-remote/rsc.js',
  },
  transform: {
    '^.+\\.tsx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!next-mdx-remote|internmap|delaunator|robust-predicates)',
    '<rootDir>/src/styles/globals.css',
  ],
}

export default config

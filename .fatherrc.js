export default {
  entry: ['src/index.js'],
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  preCommit: {
    eslint: true,
    prettier: true,
  },
  runtimeHelpers: true,
};

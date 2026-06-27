import { defineConfig } from 'dumi';

const basePath = process.env.GH_PAGES ? '/checkbox/' : '/';
const publicPath = basePath;

export default defineConfig({
  outputPath: 'docs-dist',
  base: basePath,
  publicPath,
  themeConfig: {
    name: 'Checkbox',
  },
});

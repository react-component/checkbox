import { createConfig } from '@umijs/test';

import type { Config } from '@umijs/test';

const config: Config.InitialOptions = {
  ...createConfig(),
  testEnvironment: 'jsdom',
};

export default config;

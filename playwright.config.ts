import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/test.ts"],
  timeout: 30000,
  reporter: "html",
  use: {
    headless: false,
  },
  globalSetup:"src/utils/globalSetup.ts"
};

export default config;

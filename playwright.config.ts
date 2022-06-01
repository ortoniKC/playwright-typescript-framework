import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 30000,
  reporter: "html",
  use: {
    headless: false,
  }
};

export default config;

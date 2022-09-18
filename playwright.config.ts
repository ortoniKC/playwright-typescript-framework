import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/forms.test.ts"],
  timeout: 5000,
  reporter: "html",
  use: {
    headless: false,
    screenshot: "on",
    video: "on"
  },
  globalSetup: "src/utils/globalSetup.ts"
};

export default config;

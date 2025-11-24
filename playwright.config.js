// @ts-check
import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({

  testDir: './tests',
  workers: 1,

  globalSetup: require.resolve('./Global/storage.js'),

  use: {
    storageState: './Global/storageState.json',   // ✅ match saved file
    trace: 'on',
  },

  reporter: 'html',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

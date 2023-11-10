import { defineConfig } from 'vite';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'happy-dom',
    environmentOptions: {
      happyDOM: {
        settings: {
          navigator: {
            userAgent: 'Mozilla/5.0 (linux) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/22.1.0',
          },
        },
      },
    },
    deps: {
      registerNodeLoader: true,
    },
  }
};


export default defineConfig({
  test: vitestConfig.test,
});
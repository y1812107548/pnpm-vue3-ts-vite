import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { normalizePath } from 'vite';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
const variablePath = normalizePath(resolve(__dirname, './src/style/variable.scss'));
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '#':resolve(__dirname,'./src/types'),
      'utils':resolve(__dirname, './src/utils'),
      'api':resolve(__dirname,'./src/api')
    }
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      parser: {},
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
});

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { normalizePath } from "vite";
import { resolve } from "path";
import autoprefixer from "autoprefixer";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
const variablePath = normalizePath(resolve(__dirname, "./src/style/variable.scss"));
// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const env: Partial<ImportMeta> = loadEnv(mode, process.cwd());
  console.log(env);
  return defineConfig({
    base: "./",
    optimizeDeps: {
      force: true // 忽略缓存强制刷新
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        "#": resolve(__dirname, "./src/types"),
        utils: resolve(__dirname, "./src/utils"),
        api: resolve(__dirname, "./src/api")
      }
    },
    server: {
      https: false,
      cors: true
    },
    plugins: [
      vue(),
      AutoImport({
        imports: [
          "vue",
          {
            "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
          }
        ],
        resolvers: [NaiveUiResolver(), ElementPlusResolver()]
      }),
      Components({
        resolvers: [NaiveUiResolver(), ElementPlusResolver()]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${variablePath}";`
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"]
          })
        ]
      }
    },
    build: {
      minify: "terser",
      terserOptions: {
        // 去掉生产console和debugger
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  });
};

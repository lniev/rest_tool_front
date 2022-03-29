import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
console.log(process.env.ENV);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({
      sassVariables: 'src/styles/quasar-variables.sass',
    }),
  ],
  resolve: {
    alias: {
      'src': '/src',
      'components': '/src/components'
    }
  },
  server: {
    port: 8077,
    strictPort: true,
  },
  base: process.env.ENV === 'dev' ? './' : path.resolve(__dirname, './dist/'),	// 新增
});

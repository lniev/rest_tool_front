import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/routes";
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
const app = createApp(App);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})
app.use(router);
app.mount("#app");

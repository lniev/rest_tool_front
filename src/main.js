import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import Router from '/src/router'
const myApp = createApp(App)

myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
})
myApp.use(Router)
myApp.mount('#app')

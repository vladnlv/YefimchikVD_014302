import $ from 'jquery'
import './bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './bootstrap-5.0.2-dist/css/bootstrap.min.css';
import 'bootstrap'

import './css/app.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

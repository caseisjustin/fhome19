import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import formData from "./components/FormData.vue"

const app = createApp(App)
app.component("form-data", formData)
app.mount('#app')

import { createApp } from 'vue'
import Multiselect from 'vue-multiselect'
import VueDatePicker from '@vuepic/vue-datepicker';
import router from './routes';

import '@vuepic/vue-datepicker/dist/main.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-multiselect/dist/vue-multiselect.css'

import './style.css'

import App from './App.vue'

const app = createApp(App)

app.use(router)

app.component('multiselect', Multiselect)
app.component('VueDatePicker', VueDatePicker)

app.mount('#app')

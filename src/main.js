import { createApp } from 'vue'
import App from './App.vue'
import VopdLib from '../lib/vopd-lib/src/VopdLib'

import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  } from '@headlessui/vue'
  


let app=createApp(App);

app.use(VopdLib);


app.mount('#app')

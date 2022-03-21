import { createApp } from 'vue'
import App from './App.vue'
import VopdLib from '../lib/vopd-lib/src/VopdLib'


let app=createApp(App);

app.use(VopdLib);


app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import VopdLib from '../lib/vopd-lib/src/VopdLib'



import FormRender from "./userDefine/FormRender.vue";
import InputRender from "./userDefine/InputRender.vue"

let app=createApp(App);

app.use(VopdLib,{
  render:[
    FormRender,InputRender
  ]
});

app.mount('#app')

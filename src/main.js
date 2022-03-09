import { createApp } from 'vue'
import App from './App.vue'


import {TreeView,AttrView,EventView,DataView,QueryView,EnvView,PageView,ComponentView,ContainerRender,TextRender,EchartRender} from "../lib/vopd-lib/src/main.js"

let app=createApp(App);
app.component("TreeView",TreeView)
app.component("AttrView",AttrView)
app.component("EventView",EventView)
app.component("DataView",DataView)
app.component("QueryView",QueryView)
app.component("EnvView",EnvView)
app.component("PageView",PageView)
app.component("ComponentView",ComponentView)
app.component("ContainerRender",ContainerRender)
app.component("TextRender",TextRender)
app.component("EchartRender",EchartRender)

app.mount('#app')

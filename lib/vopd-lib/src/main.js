import Vopd from './Vopd.vue'
import './assets/index.css'
import TreeView from "./view/TreeView/TreeView.vue"
import AttrView from "./view/AttrView/AttrView.vue"
import EventView from "./view/EventView/EventView.vue"
import DataView from "./view/DataView/DataView.vue"
import QueryView from "./view/DataView/QueryView.vue"
import EnvView from "./view/EnvView/EnvView.vue"
import PageView from "./view/PageView/PageView.vue"
import ComponentView from "./view/ComponentView/ComponentView.vue"

var modules=import.meta.globEager("../layers/*.vue");

for (const idx in modules) {
    console.log(idx);
  modules[idx]().then((mod) => {
    console.log(path, mod)
  })
}


export  {
    Vopd,
    TreeView,AttrView,EventView,DataView,QueryView,EnvView,PageView,ComponentView
}

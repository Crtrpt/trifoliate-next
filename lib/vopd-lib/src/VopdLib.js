
import {
  TreeView,
  AttrView,
  EventView,
  DataView,
  QueryView,
  EnvView,
  PageView,
  Widget,
} from "./main.js";
    import Vopd from './Vopd.vue'

import Workspace from "./components/Workspace.vue";
import AbstractElement from "./layers/AbstractElement.vue"



import BaseLayer from "./layers/BaseLayer.vue";
import HandlerLayer from "./layers/HandlerLayer.vue";
import GridLayer from "./layers/GridLayer.vue";

import {reposition} from 'nanopop';
import store from "./store";
export default {
    install: (app, options) => {
        app.directive("tooltip",{
            updated(e,binding) {
                window.document.querySelector(".popper").textContent=binding.value
            },
            mounted(el,binding,vnode,x){
                var popperEl=window.document.querySelector(".popper");
                if(!popperEl){
                    popperEl=window.document.createElement("div");
                    popperEl.className="popper px-2";
                    window.document.body.appendChild(popperEl);
                }
                el.onmouseenter=(e)=>{   
                    if(typeof binding.value == 'object'){
                        popperEl.textContent=binding.value.text;
                        console.log(binding.value.position);
                        reposition(e.target, popperEl ,{position: 'right-middle'});
                    } else{
                        popperEl.textContent=binding.value;
                        reposition(e.target, popperEl ,{position: 'top-middle',});  
                    }   
                    popperEl.style.visibility = 'visible';
                }
                el.onmouseleave=(e)=>{
                    popperEl.style.visibility = 'hidden';
                }
            }
        });

        (options.render||[]).forEach(r => {
            app.component(r.name,r);
        })
        app.use(store);
        console.log("install")
        app.component("AbstractElement", AbstractElement);
        app.component("TreeView",TreeView)
        app.component("AttrView",AttrView)
        app.component("EventView",EventView)
        app.component("DataView",DataView)
        app.component("QueryView",QueryView)
        app.component("EnvView",EnvView)
        app.component("PageView",PageView)
        app.component("Widget", Widget);
        app.component("Vopd",Vopd)
        app.component("Workspace", Workspace);
        app.component("HandlerLayer", HandlerLayer);
        app.component("BaseLayer", BaseLayer);
        app.component("GridLayer", GridLayer);
    }
}
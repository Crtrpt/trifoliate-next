
import {TreeView,AttrView,EventView,DataView,QueryView,EnvView,PageView,ComponentView,
    ContainerRender,TextRender,EchartRender,MapRender} from "./main.js"
    import Vopd from './Vopd.vue'
    import Right from './components/Right.vue'
    import Center from './components/Center.vue'
    import Left from "./components/Left.vue"
    import {reposition} from 'nanopop';
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
                    popperEl.textContent=binding.value;
                    reposition(e.target, popperEl ,{position: 'top-middle',});
                    popperEl.style.visibility = 'visible';
                }
                el.onmouseleave=(e)=>{
                    popperEl.style.visibility = 'hidden';
                }
                console.log();
            }
        })

        console.log("install")
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
        app.component("MapRender",MapRender)
        app.component("Vopd",Vopd)
        app.component("Right",Right)
        app.component("Center",Center)
        app.component("Left",Left)
    }
}
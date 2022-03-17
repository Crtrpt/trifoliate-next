
import {TreeView,AttrView,EventView,DataView,QueryView,EnvView,PageView,ComponentView,
    ContainerRender,TextRender,EchartRender,MapRender} from "./main.js"
    import Vopd from './Vopd.vue'
    import Right from './components/Right.vue'
    import Center from './components/Center.vue'
    import Left from "./components/Left.vue"

export default {
    install: (app, options) => {
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
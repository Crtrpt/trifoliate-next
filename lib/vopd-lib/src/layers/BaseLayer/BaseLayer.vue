<template>
    <div class="BaseLayer" :style=style>
        <template v-for="n in this.source.list" :key="n+'xx'" >
              <component class="node" v-bind:is="n.render"   :data="n" 
                        v-if="!n.attr['isDelete'] && !n.attr['isEye']"
                        @mousedown="mousedown($event,n)"
                        @mouseenter="enter(n)" 
                />
        </template>
      
    </div>
</template>
<script lang="ts">
import "./BaseLayer.scss";
import ev from "../../utils/eventbus";

import ContainerRender from "../../render/ContainerRender.vue";
import TextRender from "../../render/TextRender.vue"
import EchartRender from "../../render/EchartRender.vue"
import MapRender from "../../render/MapRender.vue";

export default {
    components:{ContainerRender,TextRender,EchartRender,MapRender},
    name:"BaseLayer",
    props:{
        ctx:Object
    },
    data(){
        return {
            source:{},
            selectIds:[],
            style:{
                // pointerEvents:"none",
                // userSelect:"none"
            }
        };
    },
    methods:{
        mousedown(e,n){
            console.log("组织时间冒泡")
            e.stopPropagation();
        },
        enter(n){
            ev.fire("BaseLayer","hoverContainer",n);
        },
        render(payload,ctx){
            console.log("取消选择");
            this.source=ctx.data.project;
        },
        active(n:any){
            this.style.pointerEvents="";
            this.style.userSelect="";
        },
        inactivated(n:any){
            //TODO 点选 框选冲突
            this.style.pointerEvents="none";
            this.style.userSelect="none";
        }
    },
    mounted(){
        console.log("加载完成");
        ev.on("BaseLayer","init",this.render);
        ev.on("BaseLayer","mousedown",this.inactivated)
        ev.on("BaseLayer","mouseup",this.active)
        ev.on("BaseLayer","change",this.render)    
    },
    setup() {
        
    },
}
</script>
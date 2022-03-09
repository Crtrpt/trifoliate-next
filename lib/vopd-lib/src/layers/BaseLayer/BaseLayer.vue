<template>
    <div class="BaseLayer" :style=style>
        <component class="node" v-bind:is="n.render"  v-for="n in this.source.list" :key="n+'xx'"  :data="n" 
        @click="click($event,n)"
        @mouseenter="enter(n)" 
 />
    </div>
</template>
<script lang="ts">
import "./BaseLayer.scss";
import ev from "../../utils/eventbus";

import ContainerRender from "../../render/ContainerRender.vue";
import TextRender from "../../render/TextRender.vue"
import EchartRender from "../../render/EchartRender.vue"

export default {
    components:{ContainerRender,TextRender,EchartRender},
    name:"BaseLayer",
    data(){
        return {
            source:{},
            style:{
                // pointerEvents:"none",
                // userSelect:"none"
            }
        };
    },
    methods:{
        click(e,n){
            console.log("选择部件")
            ev.fire("BaseLayer","selectContainer",n);
            e.stopPropagation();
        },
        enter(n){
            ev.fire("BaseLayer","hoverContainer",n);
        },
        render(payload){
            this.source=payload;
        },
        active(n){
            this.style.pointerEvents="";
            this.style.userSelect="";
        },
        inactivated(n){
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
    },
    setup() {
        
    },
}
</script>
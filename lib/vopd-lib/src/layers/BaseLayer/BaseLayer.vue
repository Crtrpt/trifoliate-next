<template>
    <div class="BaseLayer w-full h-full absolute" :style=style @drop="drop($event)">
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
import ev from "../../utils/Eventbus";



export default {
    components:{},
    name:"BaseLayer",
    props:{
        ctx:Object
    },
    data(){
        return {
            source:{
                list:[]
            },
            selectIds:[],
            style:{
                // pointerEvents:"none",
                // userSelect:"none"
            }
        };
    },
    methods:{
        drop(e){
            console.log("放下"+e.dataTransfer.getData("text/plain"));
            ev.fire("Container","addNode",{
                id:null,
                nodeId:e.dataTransfer.getData("text/plain")
            });
        },
        mousedown(e,n){
            console.log("组织时间冒泡")
            e.stopPropagation();
        },
        enter(n){
            ev.fire("BaseLayer","hoverContainer",n);
        },
        render(payload,ctx){
            console.log("渲染数据");
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
        ev.on("BaseLayer","addNode",this.render)    
    },
    setup() {
        
    },
}
</script>
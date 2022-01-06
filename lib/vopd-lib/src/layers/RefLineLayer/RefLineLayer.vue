<template>
    <div class="RefLineLayer absolute border border-blue-400 text-sm bg-blue-400 inline-block text-white p-1 opacity-80  pointer-events-none" :style="style" v-if="display">
       参考线层
    </div>
</template>
<script>
import "./RefLineLayer.scss";
import ev from "../utils/eventbus"
export default {
    name:"RefLineLayer",
    data:function(){
        return {
            display:false,
            mouse:{
                x:0,
                y:0
            }
        }
    },
     computed:{
        style:function(){
            return  {
                left:this.mouse.x+16+"px",
                top:this.mouse.y+16+"px",
            }
        }
    },
    methods:{
        enter(e){
            this.display=true;
        },
        level(e){
            this.display=false;
        },
        render(e){
            this.display=true;
            this.mouse.x=e.layerX;
            this.mouse.y=e.layerY;
        }
    },
    mounted(){
        // ev.on("RefLineLayer","mousemove",this.render)
        // ev.on("RefLineLayer","mouseenter",this.enter)
        // ev.on("RefLineLayer","mouseleave",this.level)
    },
    setup() {
        
    },
}
</script>
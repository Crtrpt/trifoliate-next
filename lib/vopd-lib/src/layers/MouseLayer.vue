<template>
    <div class="MouseLayer absolute border border-blue-400 text-sm bg-blue-400 inline-block text-white p-1 opacity-80" :style="style">
        {{mouse.x}},{{mouse.y}}
    </div>
</template>
<script>
import "./MouseLayer.scss";
import ev from "../utils/ev"
export default {
    name:"MouseLayer",
    data:function(){
        return {
            mouse:{
                x:0,
                y:0
            }
        }
    },
     computed:{
        style:function(){
            return  {
                left:this.mouse.x+10+"px",
                top:this.mouse.y+10+"px",
            }
        }
    },
    methods:{
        render(e){
            this.mouse.x=e.layerX;
            this.mouse.y=e.layerY;
        }
    },
    mounted(){
        ev.on("MouseLayer","mousemove",this.render)
    },
    setup() {
        
    },
}
</script>
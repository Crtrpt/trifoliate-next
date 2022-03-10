<template>
    <div class="HoverLayer absolute  opacity-80 border-2 pointer-events-none select-none" :style="style"
        v-if="style.width!='0px'"
      >
    </div>
</template>
<script lang="ts">
import "./HoverLayer.scss";
import ev from "../utils/eventbus"
export default {
    name:"SelectLayer",
    data(){
       return {
            mouseDown:false,
            start:{
                x:0,
                y:0,
            },
            end:{
                x:0,
                y:0,
            }
       }
    },
    computed:{
        style:function(){
            return  {
                borderColor:"#00ACDC",
                left:Math.min(this.start.x,this.end.x)+"px",
                top:Math.min(this.start.y,this.end.y)+"px",
                width:Math.abs(this.start.x-this.end.x)+"px",
                height:Math.abs(this.start.y-this.end.y)+"px"
            }
        }
    },
    methods:{
        cancelSelect(e){
            console.log("select layer 取消选择")
            this.start.x=0;
            this.end.x=0;
        },
        hover(e){

            this.start.x= parseInt(e.style.left)
            this.start.y=parseInt(e.style.top)
            this.end.x=parseInt(e.style.left)+parseInt(e.style.width)
            this.end.y=parseInt(e.style.top)+parseInt(e.style.height);
        }
    },
    mounted(){
        ev.on("HoverLayer","hoverContainer",this.hover)
        ev.on("HoverLayer","cancelHandlerContainer",this.cancelSelect)

    },        
    setup() {
        
    },
}
</script>
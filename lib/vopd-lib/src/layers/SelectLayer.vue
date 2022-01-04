<template>
    <div class="SelectLayer absolute border border-blue-400 opacity-80" :style="style" v-if="mouseDown" >
        <div class="text-sm bg-blue-400 inline-block text-white p-1 " >
            {{style.width}},{{style.height}}
        </div>
    </div>
</template>
<script>
import "./SelectLayer.scss";
import ev from "../utils/ev"
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
            },
            style:{
            }
       }
    },
    computed:{
        style:function(){
            return  {
                left:Math.min(this.start.x,this.end.x)+"px",
                top:Math.min(this.start.y,this.end.y)+"px",
                width:Math.abs(this.start.x-this.end.x)+"px",
                height:Math.abs(this.start.y-this.end.y)+"px"
            }
        }
    },
    methods:{
        down(e){
            console.log("down")
            this.mouseDown=true;
            this.start.x=e.layerX;
            this.start.y=e.layerY;
            this.end.x=e.layerX;
            this.end.y=e.layerY;
        },
        up(e){
             console.log("up")
             this.mouseDown=false;
             ev.fire("SelectLayer","selectArea",{
                 start:this.start,
                 end:this.end,
             })
        },
        move(e){
            if(this.mouseDown){
                this.end.x=e.layerX;
                this.end.y=e.layerY;
            }
        }
    },
    mounted(){
        ev.on("SelectLayer","mousedown",this.down)
        ev.on("SelectLayer","mouseup",this.up)
        ev.on("SelectLayer","mousemove",this.move)
    },        
    setup() {
        
    },
}
</script>
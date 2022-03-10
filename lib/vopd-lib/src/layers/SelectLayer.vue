<template>
    <div class="SelectLayer absolute border border-blue-400 opacity-40 bg-blue-400" :style="style" v-if="mouseDown" >
    </div>
</template>
<script lang="ts">
import "./SelectLayer.scss";
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
        style:function():any{
            return  {
                left:Math.min(this.start.x,this.end.x)+"px",
                top:Math.min(this.start.y,this.end.y)+"px",
                width:Math.abs(this.start.x-this.end.x)+"px",
                height:Math.abs(this.start.y-this.end.y)+"px"
            }
        }
    },
    methods:{
        down(e:any){
            this.mouseDown=true;
            console.log("修改为不可选择状态")
            this.start.x=e.layerX;
            this.start.y=e.layerY;
            this.end.x=e.layerX;
            this.end.y=e.layerY;
        },
        up(e:any){
             console.log("恢复为可选状态")
             this.mouseDown=false;
             ev.fire("SelectLayer","selectArea",{
                 start:this.start,
                 end:this.end,
             })
             this.start.x=0;
             this.start.y=0;
             this.end.x=0;
             this.end.y=0;
        },
        move(e:any){
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
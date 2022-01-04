<template>
    <div class="MouseLayer absolute" :style="style">
        鼠标组件
    </div>
</template>
<script>
import "./MouseLayer.scss";
import ev from "../utils/ev"
export default {
    name:"MouseLayer",
    data:function(){
        return {
        style:{
            left:"200px"
            }
        }
    },
    methods:{
        render(e){
            this.style.left=e.layerX+10+"px";
            this.style.top=e.layerY+10+"px";
        }
    },
    mounted(){
        ev.on("MouseLayer","mousemove",this.render)
    },
    setup() {
        
    },
}
</script>
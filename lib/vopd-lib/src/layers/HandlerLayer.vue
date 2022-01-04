<template>
    <div class="HandlerLayer absolute" :style="HandlerLayerStyle">
        <div class="left handler"></div>
        <div class="right handler"></div>
        <div class="top handler"></div>
        <div class="bottom handler"></div>
        <div class="left_top handler"></div>
        <div class="left_bottom handler"></div>
        <div class="right_top handler"></div>
        <div class="right_bottom handler"></div>

        <div class="left_up gutter"></div>
        <div class="left_down gutter"></div>
        <div class="right_up gutter"></div>
        <div class="right_down gutter"></div>
        
        <div class="top_left gutter"></div>
        <div class="top_right gutter"></div>
        <div class="bottom_left gutter"></div>
        <div class="bottom_right gutter"></div>
    </div>
</template>
<script>
import "./HandlerLayer.scss";
import ev from "../utils/ev"
export default {
    name:"HandlerLayer",
    data:function(){
        return {
            start:{},
            end:{},
            source:{

            }
        }
    },
    computed:{
        "HandlerLayerStyle":function(){
            return  {
                left:Math.min(this.start.x,this.end.x)+"px",
                top:Math.min(this.start.y,this.end.y)+"px",
                width:Math.abs(this.start.x-this.end.x)+"px",
                height:Math.abs(this.start.y-this.end.y)+"px"
            }
        }
    },
    methods:{
        init(e){
            this.source=e;
        },
        render(e){
           this.start=e.start;
           this.end=e.end;
        }
    },
    mounted(){
        ev.on("HandlerLayer","init",this.init)
        ev.on("HandlerLayer","selectArea",this.render)
    },
    setup() {
        
    },
}
</script>


<style lang="scss" scoped>
.HandlerLayer {
    display: inline-grid;
    grid-template-columns: 10px auto 10px auto 10px;
    grid-template-rows: 10px auto 10px auto 10px;
    grid-template-areas: 'left_top top_left  top top_right right_top'
                         'left_up . . . right_up'
                         'left . center . right'
                         'left_down . center . right_down'
                         'left_bottom bottom_left  bottom bottom_right right_bottom';
}
.handler {
    width:10px;
    height:10px;
    border:1px solid blue;
    // display: inline-block;
    // position: absolute;
}
.gutter {
     border:1px solid red;
}
.left{
     grid-area: left;
}
.right {
     grid-area: right;
}
.top {
    grid-area: top;
}
.bottom {
    grid-area: bottom;
}


.left_top {
     grid-area: left_top;
}
.left_bottom {
     grid-area: left_bottom;
}
.right_top {
    grid-area: right_top;
}
.right_bottom {
    grid-area: right_bottom;
}

.left_up {
    grid-area: left_up;
}
.left_down {
    grid-area: left_down;
}
.right_up {
    grid-area: right_up;
}
.right_down{
    grid-area: right_down;
}

.top_left {
    grid-area: top_left;
}
.top_right{
    grid-area: top_right;
}
.bottom_left {
    grid-area: bottom_left;
}
.bottom_right{
    grid-area: bottom_right;
}
</style>
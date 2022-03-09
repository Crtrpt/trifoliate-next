<template>
    <div class="HandlerLayer absolute" :style="HandlerLayerStyle"  v-if="display">
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

        <div class="center handler"></div>
    </div>
</template>
<script lang="ts">
import "./HandlerLayer.scss";
import ev from "../utils/eventbus"
export default {
    name:"HandlerLayer",
    data:function(){
        return {
            start:{x:0,y:0},
            end:{x:0,y:0},
            source:{}
        }
    },
    computed:{
        "display":function(){
            return !(
                (this.start.x-this.end.x)==0 ||
                (this.start.y-this.end.y)==0
            )
        },
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
           var source=JSON.parse(JSON.stringify(e));
           this.start=source.start;
           this.end=source.end;
        },
        select(e){
            console.log(e.style);
            this.start.x= parseInt(e.style.left)
            this.start.y=parseInt(e.style.top)
            this.end.x=parseInt(e.style.left)+parseInt(e.style.width)
            this.end.y=parseInt(e.style.top)+parseInt(e.style.height);
        }
    },
    mounted(){
        ev.on("HandlerLayer","init",this.init)
        ev.on("HandlerLayer","selectArea",this.render)


        ev.on("HandlerLayer","selectContainer",this.select)
    },
    setup() {
        
    },
}
</script>


<style lang="scss" scoped>
.HandlerLayer {
    cursor: move;
    display: inline-grid;
    grid-template-columns: 10px auto 10px auto 10px;
    grid-template-rows: 10px auto 10px auto 10px;
    border:1px solid #00ACDC;
    // background-color: #b4cd8a;
    // opacity: .75;
    grid-template-areas: 'left_top top_left  top top_right right_top'
                         'left_up . . . right_up'
                         'left . center . right'
                         'left_down . center . right_down'
                         'left_bottom bottom_left  bottom bottom_right right_bottom';
}
.handler {
    width:10px;
    height:10px;
    // border:1px solid blue;
    background-color: white;
    border:1px solid #00ACDC;
    // box-shadow: 0 0 0 1px white, 0 0 10px rgb(0 0 0 / 35%);
    // border-radius: 50%;
    // display: inline-block;
    // position: absolute;
}
.gutter {
     border:1px solid #ff00ff00;
}
.left{
     grid-area: left;
     cursor: e-resize;
     position: relative;
     left:-5px;     
}
.right {
     cursor: e-resize;
     grid-area: right;
    position: relative;
     right:-5px; 
}
.top {
    cursor: s-resize;
    grid-area: top;
    position: relative;
    top:-5px; 
}
.bottom {
    cursor: s-resize;
    grid-area: bottom;
    position: relative;
    bottom:-5px; 
}

.center {
    grid-area: center;
}

.left_top {
    cursor:se-resize;
     grid-area: left_top;
     position: relative;
    top:-5px; 
    left:-5px
}
.left_bottom {
    cursor: sw-resize;
    grid-area: left_bottom;
    position: relative;
    bottom:-5px; 
    left:-5px
}
.right_top {
    cursor: sw-resize;
    grid-area: right_top;
     position: relative;
    top:-5px; 
    right:-5px
}
.right_bottom {
    cursor:se-resize;
    grid-area: right_bottom;
     position: relative;
    bottom:-5px; 
    right:-5px
}

.left_up {
    grid-area: left_up;
     cursor: e-resize;
}
.left_down {
    grid-area: left_down;
     cursor: e-resize;
}
.right_up {
    grid-area: right_up;
     cursor: e-resize;
}
.right_down{
    grid-area: right_down;
     cursor: e-resize;
}

.top_left {
         cursor: s-resize;
    grid-area: top_left;
}
.top_right{
         cursor: s-resize;
    grid-area: top_right;
}
.bottom_left {
         cursor: s-resize;
    grid-area: bottom_left;
}
.bottom_right{
         cursor: s-resize;
    grid-area: bottom_right;
}
</style>
<template>
    <div class="HandlerLayer absolute bg-blue-500 opacity-60" :style="cstyle"  v-if="display" @dblclick="cancelSelect">
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
import ev from "../utils/eventbus"
export default {
    name:"HandlerLayer",
    props:{
        ctx:Object
    },
    data:function(){
        return {
            display:false,
            cstyle:{
                width:"0px",
                height:"0px",
                zIndex:9999,
            },
            source:{},
            data:null
        }
    },
    methods:{
        init(e){
            this.source=e;
        },
        render(e){
           var source=JSON.parse(JSON.stringify(e));
        },
        hide(){
            this.display=false;
        },
        cancelSelect(){
            this.display=false;
            ev.fire("HandlerLayer","cancelSelectContainer",{data:this.data})
        },
        select(p){
            var el= ev.ctx.hashIds.get(p.data.id).ref["layer"];
            var rec=el.getBoundingClientRect();
            this.data=p.data;
            this.cstyle.width=rec.width+"px";
            this.cstyle.height=rec.height+"px";
            this.cstyle.top=rec.top-this.ctx.rect.top+this.ctx.view.scrollTop+"px";
            this.cstyle.left=rec.left-this.ctx.rect.left+this.ctx.view.scrollLeft+"px";
            this.display=true;
        }
    },
    mounted(){
        ev.on("HandlerLayer","init",this.init)
        ev.on("HandlerLayer","selectArea",this.render)
        ev.on("HandlerLayer","selectContainer",this.select)
        ev.on("HandlerLayer","change",this.hide)
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
<template>
    <div class="GridLayer pointer-events-none select-none w-full h-full absolute " 
            :class="{
                'hidden':!ctx.displayGrid
            } "
     >
        <canvas ref="grid" id="canvas"  :width="width" :height="height" ></canvas>
    </div>
</template>

<style scoped>
</style>
<script lang="ts">
import { nextTick } from '@vue/runtime-core';
import ev from "../utils/Eventbus"
export default {
    name:"GridLayer",
    props:{
        ctx:Object
    },
    data(){
       return {
            mode:0
       }
    },
    watch:{
        "ctx":{
            deep:true,
            handler(n){
                this.render();
            }
        }
    },
    computed:{
       width(){
           return parseInt(this.ctx.style.width);
       },
       height(){
           return parseInt(this.ctx.style.height);
       }
    },
    methods:{
       render(){
           
            nextTick(()=>{
                var grid=this.$refs.grid;
                var ctx= grid.getContext('2d');
              
                ctx.strokeStyle = '#ddd'; 
                ctx.lineWidth = 1;
                ctx.setLineDash([0]);
                for(var i=0;i<parseInt(this.width);i=i+100){
                    ctx.beginPath(); 
                    let s=i+0.5
                    ctx.moveTo(s,0);
                    ctx.lineTo(s,this.height);
                    ctx.stroke();
                }
                for(var i=0;i<parseInt(this.height);i=i+100){
                    ctx.beginPath(); 
                    let s=i+0.5
                    ctx.moveTo(0,s);

                    ctx.lineTo(this.width,s);
                    ctx.stroke();
                }
            })
            
       
       }
    },
    mounted(){
        this.render();
    },        

}
</script>
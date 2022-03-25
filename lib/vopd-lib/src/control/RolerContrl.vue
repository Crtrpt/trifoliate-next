<template>
    <div>
       <div class="x h-6 absolute left-0 right-0  " :style="{
           marginLeft:-offsetLeft+'px',
           width:ctx.width
       }">
        <canvas ref="xr" :width="width+left*2" height="30"></canvas>
       </div>
       <div class="y w-6 absolute" :style="{
            marginTop:-offsetTop+'px',
           height:ctx.height
       }">
        <canvas ref="yr" :height="height+top*2" width="30"></canvas>
       </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'

export default defineComponent({
    props:{
        ctx:Object
    },
    computed:{
        width(){
           return parseInt(this.ctx.style.width);
       },
       height(){
           return parseInt(this.ctx.style.height);
       },
       offsetLeft(){
            return parseInt(this.ctx.style.scrollLeft);
       },
       offsetTop(){
            return parseInt(this.ctx.style.scrollTop);
       },
       left(){
           return parseInt(this.ctx.style.marginLeft);
       },
       top(){
           return parseInt(this.ctx.style.marginTop);
       },
       scale(){
           return this.ctx.scale;
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
    mounted(){
        this.xctx=this.$refs.xr.getContext('2d');
        this.yctx=this.$refs.yr.getContext('2d');
        this.render();
    }, 
    data(){
        return {
            xctx:null,
            yctx:null
        }
    },
    methods:{
        renderX(){
                var xctx=this.xctx;
                xctx.clearRect(0, 0, this.width+this.left*2, 30);
                xctx.strokeStyle = '#888'; 
                xctx.lineWidth = 1;
               
                var start=-this.left ;

                for(var i=start ;i<this.width+this.left*2;i=i+10){
                    xctx.beginPath(); 
                    let s=i-0.5;
                    xctx.moveTo(s,0);
                     if((i-this.left)%100==0){
                         xctx.lineTo(s,10);
                         xctx.fillText((i-this.left), s+5, 20);
                     }else{
                         xctx.lineTo(s,5);
                     }
                    xctx.stroke();
                }
        },
        renderY(){            
                var yctx=this.yctx;
                yctx.clearRect(0, 0,  30,this.height+this.top*2);
                yctx.strokeStyle = '#888'; 
                yctx.lineWidth = 1;
                var start =-this.top;
                for(var i=start;i<(this.height+this.top*2);i=i+10){
                   
                    yctx.beginPath(); 
                    let s=i-0.5
                    yctx.moveTo(0,s);
                    if((i-this.top)%100==0){
                         yctx.lineTo(15,s);
                         yctx.fillText(i-this.top, 10, s+12);
                    }else{
                         yctx.lineTo(10,s);
                     }
                     
                    yctx.stroke();
                }
        },
        render(){
              nextTick(()=>{
                this.renderX();
                this.renderY();
              })
        }
    }
})
</script>

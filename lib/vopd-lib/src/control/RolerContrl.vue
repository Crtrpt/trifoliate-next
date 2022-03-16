<template>
    <div>
       <div class="x h-6 absolute left-0 right-0 " :style="{
           width:ctx.width
       }">
        <canvas ref="xr" :width="width" height="30"></canvas>
       </div>
       <div class="y w-6 absolute" :style="{
           height:ctx.height
       }">
        <canvas ref="yr" :height="height" width="30"></canvas>
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
           return parseInt(this.ctx.width);
       },
       height(){
           return parseInt(this.ctx.height);
       },
       offsetLeft(){
            return parseInt(this.ctx.scrollLeft);
       },
       offsetTop(){
            return parseInt(this.ctx.scrollTop);
       },
       left(){
           return parseInt(this.ctx.marginLeft);
       },
       top(){
           return parseInt(this.ctx.marginTop);
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
             console.log("绘制尺线"+this.width+" "+this.height +" "+-this.left+" "+this.scale)
                var xctx=this.xctx;
                xctx.clearRect(0, 0, this.width, 30);
                xctx.strokeStyle = '#888'; 
                xctx.lineWidth = 1;
                var start=-this.left*this.scale ;


                for(var i=start ;i<this.width;i=i+10){
                    xctx.beginPath(); 
                    let s=i*this.scale-0.5;
                    xctx.moveTo(s,0);
                     if((i-this.left)%100==0){
                         xctx.lineTo(s,10);
                         xctx.fillText((i-this.left+this.offsetLeft), s+5, 20);
                     }else{
                         xctx.lineTo(s,5);
                     }
                    xctx.stroke();
                }
        },
        renderY(){
            
                var yctx=this.yctx;
                yctx.clearRect(0, 0,  30,this.height);
                yctx.strokeStyle = '#888'; 
                yctx.lineWidth = 1;
                console.log("偏移"+this.offsetTop)
                console.log(-this.top*this.scale);
                var start =-this.top*this.scale;
                for(var i=start;i<this.height;i=i+10){
                   
                    yctx.beginPath(); 
                    let s=i*this.scale-0.5
                    yctx.moveTo(0,s);
                    if((i-this.top)%100==0){
                         yctx.lineTo(15,s);
                         yctx.fillText(i-this.top+this.offsetTop, 10, s+12);
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

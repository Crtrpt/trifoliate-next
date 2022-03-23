<template>
    <div class="bg-gray-200  hover:bg-blue-500 w-1"
        @mousedown="down"
        :class='{
            " hover:w-1  cursor-col-resize":position=="row",
            "bg-blue-500":this.start
        }'
     >
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        data:Object,
        position:String
    },
    methods:{
        over(e){
            // console.log(e)
            // var offsetx=e.layerX-this.s.x;
            // console.log("offset"+offsetx)
            // var d= (this.position=="left")?1:-1
            // this.$emit("width",this.s.w+d*offsetx);
        },
        move(e){
            console.log("move===========")
            var offsetX=e.layerX-this.s.x;
            var width=this.p.style.width;
            //减前元素
            if(width.charAt(width.length-1)=="x" && width!="0px"){
                this.p.style.width= this.s.p.width+offsetX+"px";
                this.p.style.maxWidth= this.p.style.width;
                return
            }

            //减后元素
            width=this.n.style.width
   
            if(width.charAt(width.length-1)=="x" && width!="0px"){
                this.n.style.width= this.s.n.width-offsetX+"px";
                this.n.style.maxWidth= this.n.style.width;
                return
            }

            width=this.p.getBoundingClientRect().width;

            this.p.style.width= this.s.p.width+offsetX+"px";
            this.p.style.maxWidth= this.p.style.width;
 


            // this.n.style.width="200px";
        },
        down(e){
            // console.log(this.$parent?.$el.children);
            this.$parent.setMode("resize");
            this.$parent.setGutter(this);
            Array.from(this.$parent?.$el.children).forEach((item) => {
                if(item!=this.$el){
                    item.style.pointerEvents="none";
                    item.style.userSelect="none";
                }
            });
            // console.log("down")
            this.s.x=e.layerX;
            var rect=this.$el.getBoundingClientRect();
            this.p=this.$el.previousElementSibling;
            this.n=this.$el.nextElementSibling;
            this.s.p=this.p.getBoundingClientRect();
            this.s.n=this.n.getBoundingClientRect();

            this.start=true
        },
        up(e){
            this.start=false
        }
    },
    updated(){
        console.log("更新")
    },
    data(){
        return {
            start:false,
            p:null,
            n:null,
            s:{
                p:null,
                n:null,
                w:0,
                h:0,
                x:0,
                y:0,
                l:0,
            }
        }
    },
    setup() {
        
    },
})
</script>

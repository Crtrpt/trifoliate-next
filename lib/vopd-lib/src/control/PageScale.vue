<template>
     <div class="flex items-center justify-center border rounded-full bg-gray-200 shadow">
                  <i class=" item las la-search-plus leading-2 px-1 " @click="add"></i>
                  <input class=" inline text-xs w-10 bg-inherit" v-model="v" type="number" @change="change" min="0"  step="10"/>%
                  <i class="item las la-search-minus leading-2 px-1 " @click="sub"></i>
                </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ev from "../utils/Eventbus"
export default defineComponent({
    props:[
        "value"
    ],
    data(){
        return {
            v:100
        }
    },
    mounted(){
        ev.on("pagescale","zoomin",(p,ctx)=>{
            this.v=this.v+10;    
        })
        ev.on("pagescale","zoomout",(p,ctx)=>{
            this.v=this.v-10;    
        })
    },
    watch:{
        "v":{
            handler(n,v){
               console.log("放大/缩小")
               this.change();
            }
        }
    },
    methods:{
        change(){
              this.$emit("update:modelValue",this.v/100);
        },
        add(){
            this.v=this.v+1;
        },
        sub(){
            this.v=this.v-1;
        }
    },
    
    setup() {
        
    },
})
</script>

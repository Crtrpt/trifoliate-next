<template>
      <Control class=" left-8  top-4  absolute z-20"  >
              <div class="ToolView border border-t-gray-200 p-1 absolute mt-4 ">
                  <div class="item">
                    <i class="las la-mouse-pointer" @click="changeMode(0)"></i>
                  </div>
                  <div class="item">
                    <i class="las la-hand-paper" @click="changeMode(1)"></i>
                  </div>
                  <div class="item">
                    <i class="las la-plug" @click="changeMode(2)"></i>
                  </div>
              </div>
      </Control>

       <Control class=" right-5 mt-4 top-4   absolute ">
              <div class=" ">
                 <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow">
                <input class=" inline text-sm w-10 text-center bg-inherit" value="1024"/>
                <p class="text-sm">/</p>
                <input class=" inline text-sm w-10 text-center bg-inherit" value="960"/>
              </div>
              </div>
      </Control>

      <Control class=" right-5 mt-4 bottom-4  absolute ">
               <div class=" ">
                <div class="flex items-center justify-center border rounded-full bg-gray-200 shadow">
                  <i class=" item las la-search-plus leading-3 px-1 "></i>
                  <input class=" inline text-sm w-10 bg-inherit" value="100%"/>
                  <i class="item las la-search-minus leading-3 px-1 "></i>
                </div>
                </div>
            </Control> 

    <div   class="z-10 overflow-auto view h-full w-full" :class="[modeList[this.mode].cursor]"  ref="view"  >
      <div ref="canvas" class="  relative overflow-hidden  border shadow doc  bg-white" :style="{width:'1024px',height:'960px'}">
        <div class="layers">
         <Layer name="refLineLayer" />
        
         <Layer name="BaseLayer" />
        
         <Layer name="SelectLayer" />
         
         <Layer name="MouseLayer" />

         <Layer name="HandlerLayer" />
     
        </div>
      </div>
    </div>
    
            <!-- <Control class="top-0  left-0   w-full   sticky  bg-white">
                <i class="las la-eye w-6 h-6"></i>
            </Control>
            <Control class="top-0    w-full flex  absolute  bg-white">
                <div class="h-6 border shadow flex-grow"></div>
            </Control>
            <Control class="top-0  h-full flex text-center  sticky bg-white">
                <div class=" w-6 border shadow flex-grow"></div>
            </Control>
             -->
           

             <!-- <Control class=" right-5 top-6  sticky ">
              <div class=" absolute">
                
              </div>
            </Control> -->
           
            
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layer from './Layer.vue'
import ev from "../utils/eventbus"
import Control from './Control.vue'
import ToolView from '../view/ToolView/ToolView.vue'


export default defineComponent({
  components: { Layer, Control, ToolView },
  data(){
    return {
      mode:0,
      modeList:[
        {
          name:"select",
          cursor:"normal"
        },
        {
          name:"grab",
           cursor:"cursor-grabbing"
        },
         {
          name:"plug",
           cursor:"plug"
        }
      ],
      el:null
    }
  },
  methods:{
    changeMode(m:number){
      this.mode=m;
    }
  }, 
  mounted(){
    var el=this.$refs.view;
    el.addEventListener("mousemove",(e)=>{
      ev.fire("main","mousemove",e);
    }),
    el.addEventListener("mousedown",(e)=>{
      ev.fire("main","mousedown",e);
    }),
    el.addEventListener("mouseup",(e)=>{
      ev.fire("main","mouseup",e);
    }),
    el.addEventListener("mouseenter",(e)=>{
      ev.fire("main","mouseenter",e);
    }),
    el.addEventListener("mouseleave",(e)=>{
      ev.fire("main","mouseleave",e);
    })
  },
  setup() {
    
  }
})
</script>

<style scoped>
</style>


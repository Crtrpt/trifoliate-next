<template>
    <div   :class="[modeList[this.mode].cursor]"  ref="view"  >
     
      <div ref="canvas" class="  relative overflow-hidden  border shadow " :style="{width:'1024px',height:'960px'}">
        <div class="layers">
         <Layer name="refLineLayer" />
        
         <Layer name="BaseLayer" />
        
         <Layer name="SelectLayer" />
         
         <Layer name="MouseLayer" />

         <Layer name="HandlerLayer" />
     
        </div>
      </div>
       
    </div>
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


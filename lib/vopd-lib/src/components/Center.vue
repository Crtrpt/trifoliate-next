<template>
    <div class="b border-y" ref="canvas">
      <div class="layers">
         <Layer name="BaseLayer" />
        
         <Layer name="SelectLayer" />
         
         <Layer name="MouseLayer" />
      </div>
     
      <Layer name="HandlerLayer" />
    </div>
</template>

<script >
import { defineComponent } from 'vue'
import Layer from './Layer.vue'
import ev from "../utils/eventbus"


export default defineComponent({
  components: { Layer },
  data(){
    return {
      el:null
    }
  },
  mounted(){
    var el=this.$refs.canvas;
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
.layers{
  pointer-events:none
}
</style>


<template>
    <div class="vopd flex flex-row">
      <Left  class="w-15 " />
      <Center class="flex-grow-0 "/>
      <Right class="w-15"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ev from "./utils/Eventbus";

// import state from "./utils/state";
export default defineComponent({
  props:{
    value:Object,
  },
  watch:{
    value:{
      handler(n,o){
        console.log("初始化数据")
        console.log(this.value)
        ev.initCtx(this.value)
      }
    }
  },
  data(){
    return {}
  },
  mounted(){

  },
  setup() {
   
  }
})
</script>


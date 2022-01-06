<template>
    <div class="flex flex-row" style="width:100%; height:600px">
      <Left  class="w-20 " />
      <Center class="flex-grow"/>
      <Right class="w-20"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Right from './components/Right.vue'
import Center from './components/Center.vue'
import Left from "./components/Left.vue"

import ev from "./utils/eventbus";
import state from "./utils/state";
export default defineComponent({
  props:{
    value:Object,
  },
  components:{
    Left,
    Center,
    Right
  },
  render(){
      console.log("----------------")
  },
  watch:{
    value:{
      handler(n,o){
        console.log("变化")
        ev.fire("vopd","init",this.value);
      }
    }
  },
  mounted(){
    state.init();
  },
  setup() {
   
  }
})
</script>


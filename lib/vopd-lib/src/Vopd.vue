<template>
    <div class="flex flex-row" style="width:100%; height:600px">
      <Left  class="w-20 " />
      <div class="flex flex-col flex-grow">
         <Center class="flex-grow"/>
         <div class="border border-t-gray-100">时间轴</div>
      </div>
     
      <Right class="w-20"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Right from './components/Right.vue'
import Center from './components/Center.vue'
import Left from "./components/Left.vue"

import ev from "./utils/eventbus";
// import state from "./utils/state";
export default defineComponent({
  props:{
    value:Object,
  },
  components:{
    Left,
    Center,
    Right
  },
  watch:{
    value:{
      handler(n,o){
        console.log(this.value)
        ev.fire("vopd","init",this.value.project);
      }
    }
  },
  mounted(){
    // state.init();
  },
  setup() {
   
  }
})
</script>


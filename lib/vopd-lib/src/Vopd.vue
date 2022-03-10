<template>
    <div class="vopd flex flex-row">
      <Left  class="w-15 " />
      <Center class="flex-grow-0 "/>
      <Right class="w-15"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Right from './components/Right.vue'
import Center from './components/Center.vue'
import Left from "./components/Left.vue"
import ToolView from "./view/ToolView/ToolView.vue"
import TimeView from "./view/TimeView/TimeView.vue"
import ev from "./utils/eventbus";

// import state from "./utils/state";
export default defineComponent({
  props:{
    value:Object,
  },
  components:{
    Left,
    Center,
    Right,
    ToolView,
    TimeView,
  },
  watch:{
    value:{
      handler(n,o){
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


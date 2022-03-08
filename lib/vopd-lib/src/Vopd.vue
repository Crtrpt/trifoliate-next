<template>
    <div class="vopd flex flex-row" style="width:100%; height:600px">
      <Left  class="w-15 " />
      <div class="flex flex-grow border overflow-scroll   relative  window">
          <Center class="flex-grow-0 "/>
      </div>
      <Right class="w-15"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
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


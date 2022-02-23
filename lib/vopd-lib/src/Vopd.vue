<template>
    <div class="flex flex-row" style="width:100%; height:600px">
      <Left  class="w-20 " />
      <div class="flex flex-col flex-grow">
         <div class="flex flex-row flex-grow">
            <ToolView></ToolView>
            <Center class="flex-grow h-full w-full"/>
         </div>
         <TimeView></TimeView>
      </div>
     
      <Right class="w-20"/>
    </div>
</template>

<script>
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


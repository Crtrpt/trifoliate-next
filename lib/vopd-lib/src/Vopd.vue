<template>
    <div class="flex flex-row" style="width:100%">
      <Left  class="w-20 border border-gray-600" />
      <drawing-board  class="flex-grow"/>
      <Right class="w-20"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Right from './components/Right.vue'
import DrawingBoard from './components/DrawingBoard.vue'
import Left from "./components/Left.vue"


export default defineComponent({
  components:{
    Left,
    DrawingBoard,
    Right
  },
  setup() {
    
    
  }
})
</script>


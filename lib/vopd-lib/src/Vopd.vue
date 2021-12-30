<template>
    <div class="flex flex-row ">
      <Left style="width:200px " />
      <drawing-board  class="flex-grow"/>
      <attribute style="width:200px" />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Attribute from './components/Attribute.vue'
import DrawingBoard from './components/DrawingBoard.vue'
import Left from "./components/Widget.vue"
import './assets/index.css'

export default defineComponent({
  components:{
    Left,
    DrawingBoard,
    Attribute
  },
  setup() {
    
    
  }
})
</script>


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

import ev from "./utils/ev";

export default defineComponent({
  components:{
    Left,
    Center,
    Right
  },
  setup() {
    ev.install("init");
  }
})
</script>


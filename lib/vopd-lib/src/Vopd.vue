<template>
  <div class="vopd flex flex-row h-full">
    <Window :data="windowLayout"></Window>
  </div>
</template>

<script lang="ts">
import Window from "./common/wvm/Window.vue";
import { defineComponent } from "vue";
import ev from "./utils/Eventbus";
import Layout from "./viewLayout.js"


// import state from "./utils/state";
export default defineComponent({
  components: { Window },
  props: {
    value: Object,
  },
  watch: {
    value: {
      handler(n, o) {
        console.log("初始化数据");
        console.log(this.value);
        
        ev.initCtx(this.value);
      },
    },
  },
  data() {
    return {
      windowLayout:Layout,
    };
  },
});
</script>


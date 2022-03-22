<template>
  <div class="vopd flex flex-row h-full">
    <Window :data="windowLayout"></Window>
  </div>
</template>

<script lang="ts">
import {View,Window} from "vopd-wvm/dist/vopd-wvm.js";
import { defineComponent } from "vue";
import ev from "./utils/Eventbus";
import Layout from "./viewLayout.js"

console.log(View);
// import state from "./utils/state";
export default defineComponent({
  components: { Window, View },
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


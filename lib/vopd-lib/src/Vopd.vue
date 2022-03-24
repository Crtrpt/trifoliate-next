<template>
   <Window  class="vopd flex flex-row h-full" :data="windowLayout"></Window>
</template>

<script lang="ts">
import Window from "./common/wvm/Window.vue";
import { defineComponent } from "vue";
import ev from "./utils/Eventbus";
import Layout from "./viewLayout.js"

export default defineComponent({
  components: { Window },
  props: {
    value: Object,
  },
  methods:{
  }, 
  mounted(){
     ev.initCtx(this.value);
     this.$store.dispatch("init",this.value)
  },
  data() {
    return {
      windowLayout:Layout,
    };
  },
});
</script>


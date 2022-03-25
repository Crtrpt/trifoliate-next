<template>
  <div
    class="BaseLayer w-full h-full absolute"
    :style="style"
    @drop="drop($event)"
  >
    <template v-for="n in page.list" :key="n + 'xx'">
      <AbstractElement :data="n" />
    </template>
  </div>
</template>
<script lang="ts">
import AbstractElement from "./AbstractElement.vue";

export default {
  components: { AbstractElement },
  name: "BaseLayer",
  props: {
    ctx: Object,
  },
  computed: {
    page: {
      get() {
        return this.$store.getters["page/getPage"];
      },
      set(value) {},
    },
  },
  data() {
    return {
      source: {
        list: [],
      },
      selectIds: [],
      style: {
        // pointerEvents:"none",
        // userSelect:"none"
      },
    };
  },
  methods: {
    drop(e) {
        var t=JSON.parse(e.dataTransfer.getData("text/plain"));
        this.$store.dispatch("page/addNode",{id:null,nodeId:t.id,style:{
          left: e.offsetX + "px",
          top: e.offsetY + "px",
        }})
        e.stopPropagation();
    },
    render(payload, ctx) {
      this.source = ctx.data.list;
    },
    active(n: any) {
      this.style.pointerEvents = "";
      this.style.userSelect = "";
    },
    inactivated(n: any) {
      //TODO 点选 框选冲突
      this.style.pointerEvents = "none";
      this.style.userSelect = "none";
    },
  },
  mounted() {
  },
};
</script>
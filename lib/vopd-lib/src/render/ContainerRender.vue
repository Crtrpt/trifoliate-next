<template>
  <div :style="data.style" ref="node" class="transition-all w-full h-full">
    <div
      class="relative w-full flex items-center justify-center h-full select-none text-gray-400 p-2 border-2 border-dashed border-gray-400 text-center"
      v-if="data?.children?.length == 0"
    >
      <div>这里可以放置一些组件</div>
    </div>
    <template v-if="data?.children?.length > 0">
      <AbstractElement
        :data="n"
        v-for="n in data.children"
        :key="n"
      ></AbstractElement>
    </template>
  </div>
</template>

<script lang="ts">
import ev from "../utils/Eventbus";
import AbstractElement from "../layers/BaseLayer/AbstractElement.vue";

export default {
  name: "ContainerRender",
  components: { AbstractElement },
  props: {
    data: Object,
  },
  methods: {},
  mounted() {
    ev.ctx.hashIds.get(this.data.id).ref["layer"] = this.$refs.node;
  },
};
</script>

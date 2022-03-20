<template>
  <component
    :class="{
      'border-green-500': isDragenter,
      'border-2': isDragenter,
      'border-dashed': isDragenter,
    }"
    @dragenter="dragenter($event)"
    @drop="drop($event)"
    @dragleave="dragleave($event)"
    @click="click($event)"
    class="node"
    v-bind:is="data.render"
    :data="data"
    v-if="!data.attr['isDelete'] && !data.attr['isEye']"
    @mousedown="mousedown($event, data)"
    @mouseenter="enter(data)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ev from "../utils/Eventbus";

export default defineComponent({
  props: {
    data: Object,
  },
  data() {
    return {
      isDragenter: false,
    };
  },
  methods: {
    drop(e) {
      console.log("放下" + e.dataTransfer.getData("text/plain"));
      ev.fire("Container", "addNode", {
        id: this.data.id,
        nodeId: JSON.parse(e.dataTransfer.getData("text/plain")).id,
      });
      this.isDragenter = false;
      e.stopPropagation();
    },
    dragenter(e) {
      console.log("进入");
      this.isDragenter = true;
      e.stopPropagation();
    },
    dragleave(e) {
      console.log("离开");
      this.isDragenter = false;
      e.stopPropagation();
    },
    mousedown(e, n) {
      console.log("组织时间冒泡");
      e.stopPropagation();
    },
    click(e){
          if(!this.data.attr['isLock']){
                ev.fire("Container","selectContainer",{e:this.$refs.node,data:this.data})
                e.stopPropagation();
          }
    },
    enter(n) {
      ev.fire("BaseLayer", "hoverContainer", n);
    },
  },
  setup() {},
});
</script>

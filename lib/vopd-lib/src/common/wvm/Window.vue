<template>
  <div
    :class="[
      type == 'view' ? 'view' : 'windows',
      'posi_' + (copyData.position || 'top'),
    ]"
    :style="copyData.style"
    v-if="copyData.item.length > 0"
  >
    <div
      class="handler bg-gray-100 relative"
      v-if="
        type == 'view' &&
        (copyData.displayHandler == true || copyData.displayHandler == null)
      "
      @drop="drop($event)"
      @dragenter="dragenter($event)"
      @dragleave="dragleave($event)"
      @dragover="allowDrop($event)"
    >
      <div
        class="
          absolute
          border-1
          z-0
          w-full
          h-full
          pointer-events-none
          transition-all
        "
      ></div>
      <div
        class="item px-2 border-x-2 z-10"
        :class="{
          ' bg-white': idx == active,
          'bg-gray-100': idx != active,
          active: idx == active,
          'border-r-2 border-r-blue-500':
            idx == active && copyData.position == 'left',
          'border-l-2 border-l-blue-500':
            idx == active && copyData.position == 'right',
        }"
        v-for="(v, idx) in copyData.item"
        :key="v.name"
        @dragstart="dragstart($event, v, idx)"
        @dragend="dragend($event, v, idx)"
        @click="sel(v, idx)"
        :draggable="data.draggable"
      >
        <component :is="'ViewHandler'" :data="v"></component>
      </div>
    </div>
    <div
      class="content border overflow-auto"
      :class="{
        'border-l-0': copyData.position == 'left',
      }"
      v-if="type == 'view' && copyData.item.length > 0 && active!=-1"
      @drop="drop($event)"
      @dragover="allowDrop($event)"
    >
      <KeepAlive>
        <component
          :is="copyData.item[active].component"
          :data="copyData.item[active]"
          @close="close"
        ></component>
      </KeepAlive>
    </div>
    <template v-if="type == 'window'">
      <Window v-for="w in this.copyData.item" :data="w" :key="w"></Window>
    </template>
  </div>
</template>

<style lang="css" scoped>
.handler {
  display: flex;
}
.view {
  display: flex;
  flex-direction: column;
  transition: all 1s;
}
.window {
  display: flex;
  flex-direction: row;
}
.content {
  flex-grow: 1;
}
.posi_left {
  flex-direction: row;
}
.posi_left .handler {
  flex-direction: column;
}
.posi_right {
  flex-direction: row-reverse;
}
.posi_right .handler {
  flex-direction: column;
}
</style>
<script lang="ts">
import { defineComponent, nextTick } from "vue";
import View from "./View.vue";
import ViewHandler from "./ViewHandler.vue";

export default defineComponent({
  props: {
    select: {
      type: Number,
      default: 0,
    },
    data: Object,
  },
  data() {
    return {
      type: this.data.type,
      active: this.select,
      copyData: this.data,
    };
  },
  methods: {
    close() {
      this.active = -1;
    },
    allowDrop(e) {
      e.preventDefault();
    },
    dragend(e, payload, i) {
      var item = this.copyData.item;
      if (i == 0) {
        this.copyData.item = item.splice(i + 1, item.length);
      } else {
        var newV = [...item.splice(0, i), ...item.splice(i, item.length)];
        this.copyData.item = newV;
      }

      this.active = 0;
      
    },
    dragstart(e, payload, i) {
      payload.isDrag = true;
      e.dataTransfer.setData("text/plain", JSON.stringify(payload));
    },
    drop(e) {
      console.log(this.draggable);
      if (!this.data.draggable) {
        console.log("禁止放下");
        return;
      }
      var a = e.dataTransfer.getData("text/plain");
      this.copyData.item.push(JSON.parse(a));
      this.active = this.copyData.item.length - 1;
      e.stopPropagation();
    },
    dragenter(e) {
      console.log("进入");
      e.stopPropagation();
    },
    dragleave(e) {
      console.log("离开");
      e.stopPropagation();
    },
    sel(v, idx) {
      console.log("click");
      this.active = idx;
    },
  },
  setup() {},
  name: "Window",
  components: { View, ViewHandler },
});
</script>

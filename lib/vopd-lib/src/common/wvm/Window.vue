<template>
  <div
    class="flex relative  flex-shrink-0 overflow-hidden"
    :class="[copyData.type, 'posi_' + (copyData.position || 'top')]"
    :style="copyData.style"
    v-if="copyData.type == 'gutter' || copyData.item.length > 0"
    @mouseup="mouseup"
    @mousemove="mousemove"
  >
    <template v-if="type == 'view'">
      <div
        class="handler flex-shrink-0 flex  bg-gray-100 overflow-auto"
        ref="handler"
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
        <component
          :is="copyData.viewHandler"
          :data="v"
        />
        </div>

        <div
          @drop="dropRemain($event)"
          @dragenter="dragenterRemain($event)"
          @dragleave="dragleaveRemain($event)"
          class="remain flex-grow"
          :class="{ 'border-dashed border border-blue-600': dragInRemain }"
        ></div>
      </div>
      <div
        class="content  overflow-auto flex-grow-0 flex-shrink-0  relative "
        :style="{
          'width':(copyData.position == 'left'||copyData.position == 'right')?'0px':'',
           'height':(copyData.position != 'left'&&copyData.position != 'right')?'0px':''
        }"
        v-if="type == 'view' && copyData.item.length > 0 && active != -1"
        @drop="drop($event)"
        ref="content"
        @dragover="allowDrop($event)"
      >
        <KeepAlive>
          <component
            :is="copyData.item[active].component"
            :data="copyData.item[active]"
            @displayView="
              (viewName) => {
                eventHub.emit('displayView', viewName);
              }
            "
            @closeView="
              (viewName) => {
                eventHub.emit('closeView', viewName);
              }
            "
            @close="close"
          />
        </KeepAlive>
      </div>
    </template>
    <template v-if="type == 'window'">
      <template   v-for="w in this.copyData.item"
        :key="w"
        :ev="this.eventHub">
            <Window v-if="w.type!='gutter'" :data="w"></Window>
            <Gutter class="flex-shrink-0" v-if="w.type=='gutter'" :data="w" :position="'row'" ></Gutter>
        </template>
    
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
}
.window {
  display: flex;
  flex-direction: row;
}
.content {
  flex-grow: 1;
  overflow:auto;
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
import { defineComponent } from "vue";
import View from "./View.vue";
import store from "../../utils/eventbus";
import ViewHandler from "./ViewHandler.vue";
import Gutter from "./Gutter.vue";
export default defineComponent({
  props: {
    select: {
      type: Number,
      default: 0,
    },
    ev: Object,
    data: Object,
  },
  created() {
    if (this.data.type != "gutter") {
      console.log("订阅",this.data.name,"closeView")
      this.eventHub.on(this.data.name,"closeView", this.closeView);
      this.eventHub.on(this.data.name,"displayView", this.displayView);
    }
  },
  watch: {
    active: {
      handler(v) {
        if (v == -1) {
          // console.log("变更下");
          var rect = this.$refs.handler.getBoundingClientRect();
          this.copyData.style.maxWidth = rect.width + "px";
        } else {
          // console.log("恢复");
          this.copyData.style.maxWidth = this.copyData.style.width;
        }
      },
    },
  },
  data() {
    return {
      eventHub: store,
      type: this.data.type,
      active: this.select,
      copyData: this.data,
      dragInRemain: false,
      mode:"none",
      gutter:"",
    };
  },
  methods: {
    setMode(mode){
      console.log("设置"+mode);
      this.mode=mode;
    },
    setGutter(gutter){
      this.gutter=gutter;
    },
    mousemove(e){
       if(this.mode=="resize"){
        //  console.log("移动")
        this.gutter.move(e);
       }
    },
    mouseup(e){
      
      if(this.mode=="resize"){
          Array.from(this.$el.children).forEach((item) => {
              if(item!=this.$el){
                  item.style.pointerEvents="";
                  item.style.userSelect="";
              }
          });
          this.gutter.up();
          this.mode="none";
      }
      
      e.preventDefault();
    },
    dragS(){
      console.log("开始")
      console.log(this)
    },
    dragE(){
      console.log("结束")
    },
    dragO(){
      console.log("变化")
    },
    changeWidth(offset){
      console.log(offset);
      this.data.style.maxWidth=offset+'px';
      this.data.style.width=offset+'px';
    },
    dragleaveRemain(e) {
      this.dragInRemain = false;
    },
    dragenterRemain(e) {
      this.dragInRemain = true;
    },
    dropRemain(e) {
      this.dragInRemain = false;
      this.drop(e);
    },
    closeView(viewName: String) {
      console.log("close", viewName);
      if (this.active == -1) {
        return;
      }
      if (this.copyData.item[this.active].name == viewName) {
        this.active = -1;
      }
      // this.copyData.style.maxWidth= parseInt(rect.width) +"px";
    },
    displayView(viewName: String) {
      console.log("display"+viewName)
      this.copyData.item.forEach((e, i) => {
        if (e.name == viewName) {
          this.active = i;
        }
      });
    },
    close() {
      this.active = -1;
      // var rect= this.$refs.handler.getBoundingClientRect();
      // console.log(rect);
      // this.copyData.style.maxWidth= parseInt(rect.width) +"px";
    },
    allowDrop(e) {
      e.dataTransfer.dropEffect = "move";
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
      // console.log(payload);
      console.log("删除元素" + this.active);
    },
    dragstart(e, payload, i) {
      payload.isDrag = true;

      e.dataTransfer.setData("text/plain", JSON.stringify(payload));
      var de = this.$refs.content;
      e.dataTransfer.setDragImage(de, 10, 10);
    },
    drop(e) {
      if (!this.data.draggable) {
        return;
      }
      var a = e.dataTransfer.getData("text/plain");
      this.copyData.item.push(JSON.parse(a));
      this.active = this.copyData.item.length - 1;
      e.stopPropagation();
    },
    dragenter(e) {
      e.stopPropagation();
    },
    dragleave(e) {
      e.stopPropagation();
    },
    sel(v, idx) {
      this.active = idx;
      this.copyData.style.maxWidth = this.data.style.width;
    },
  },
  setup() {},
  name: "Window",
  components: { View, ViewHandler, Gutter },
});
</script>

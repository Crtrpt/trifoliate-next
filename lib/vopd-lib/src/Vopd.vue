<template>
  <div class="vopd flex flex-row h-full">
    <Window :data="windowLayout"></Window>
  </div>
</template>

<script lang="ts">
import View from "./common/wvm/View.vue";
import Window from "./common/wvm/Window.vue";
import { defineComponent } from "vue";
import ev from "./utils/Eventbus";

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
      windowLayout: {
        type: "window",
        style: {
          display: "flex",
          width: "100%",
          height: "100%",
        },
        item: [
          {
            type: "view",
            position: "left",
            draggable: true,
            viewHandler: "ViewHandler",
            style: {
              width: "300px",
            },
            item: [
              {
                name: "部件",
                icon: "las la-plus",
                component: "ComponentView",
              },
              {
                name: "变量",
                icon: "las la-dice-d20",
                component: "EnvView",
              },
            ],
          },
          {
            type: "view",
            content: "222",
            draggable: false,
            viewHandler: "ViewHandler",
            displayHandler: false,
            style: {
              width:"600px",
              flexGrow: "1",
            },
            item: [
              {
                 name: "变量",
                icon: "las la-dice-d20",
                component: "Center",
              },
            ],
          },
          {
            type: "view",
            content: "222",
            style: {
              width: "300px",
            },
            draggable: true,
            viewHandler: "ViewHandler",
            position: "right",
            item: [
              {
                name: "层级",
                icon: "las la-layer-group",
                component: "TreeView",
              },
              {
                name: "属性",
                icon: "las la-bars",
                component: "AttrView",
              },
              {
                name: "数据",
                icon: "las la-database",
                component: "DataView",
              },
              {
                name: "结果",
                icon: "las la-table",
                component: "QueryView",
              },
            ],
          },
        ],
      },
    };
  },
});
</script>


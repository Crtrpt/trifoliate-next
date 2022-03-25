<template>
  <div class="HandlerLayer" v-if="page.displaySelect">
    <div
      class="box absolute shadow-inner transition"
      ref="box"
      :style="page.selectStyle"
      @dragenter="dragenter($event)"
      @mousedown="start($event)"
      @dblclick="cancelSelect"
    >
      <div
        class="
          absolute
          rounded-full
          flex-nowrap
          text-xs text-white
          cursor-pointer
        "
        style="top: -1.5rem"
      >
        <div class="bg-blue-400 rounded-full flex flex-row">
          <!-- <i
          v-tooltip="'选择上级'"
         :class="{
            'la-circle':!this.data.parent,
            'la-angle-double-up':this.data.parent
         }"
         class="las   rounded-l-full  px-1 leading-4   hover:bg-blue-500" @click="displayPath" ></i>-->
          <!-- <p 
          v-tooltip="'组件名称'"
        class=" rounded-r-full whitespace-nowrap hover:bg-blue-500 px-1"> {{ data.name }}</p>  -->
        </div>
      </div>
      <!-- <div class="flex justify-center absolute w-5  flex-nowrap  text-xs   text-white cursor-pointer "
      style="right:-30px">
        <div class="bg-blue-400 rounded-full px-1">
           <i  v-tooltip="'组件属性'" class="las la-dot-circle hover:bg-blue-500 rounded-t-full  "></i>
        </div>
      </div> -->
      <div class="left_top handler" @mousedown="setHandler('leftTop')"></div>
      <div
        class="left_bottom handler"
        @mousedown="setHandler('leftBottom')"
      ></div>
      <div class="right_top handler" @mousedown="setHandler('rightTop')"></div>
      <div
        class="right_bottom handler"
        @mousedown="setHandler('rightBottom')"
      ></div>

      <div class="left gutter" @mousedown="setHandler('left')"></div>
      <div class="right gutter" @mousedown="setHandler('right')"></div>

      <div class="top gutter" @mousedown="setHandler('top')"></div>
      <div class="bottom gutter" @mousedown="setHandler('bottom')"></div>
    </div>
  </div>
</template>
<script lang="ts">
import ev from "../utils/Eventbus";

export default {
  name: "HandlerLayer",
  props: {
    ctx: Object,
    mitt: Object,
  },
  computed: {
    page: {
      get() {
        return this.$store.getters["page/getPage"];
      },
      set(value) {},
    },
  },
  watch: {
    data: {
      deep: true,
      handler(n, o) {
        if (n.attr["isDelete"]) {
          this.display = false;
        }
      },
    },
  },
  data: function () {
    return {
      handler: null,
      display: true,
      drag: false,
      isMove: false,
      s: {},
      pstyle: {
        width: "",
        height: "",
        left: "",
        top: "",
      },
      cstyle: {
        width: "0px",
        height: "0px",
        zIndex: 9999,
      },
      source: {},
      data: null,
    };
  },
  methods: {
    displayPath() {
      if (this.data.parent != null) {
        ev.fire("handler", "selectContainer", {
          data: {
            id: this.data.parent,
          },
        });
      }
    },
    dragenter(e) {
      this.display = false;
    },
    setHandler(postion) {
      this.handler = postion;
    },
    start(e) {
      if (this.$refs.box == e.path[0]) {
        this.isMove = true;
      } else {
        this.drag = true;
      }
      this.mitt.on("mousemove", this.move);
      this.mitt.on("mouseup", this.end);
      this.s.x = e.screenX;
      this.s.y = e.screenY;
      var s = (this.s.el = this.$refs.box);
      this.s.rect = this.$refs.box.getBoundingClientRect();
      this.s.left = parseInt(this.$refs.box.style.left);
      this.s.top = parseInt(this.$refs.box.style.top);
      this.s.width = parseInt(this.$refs.box.style.width);
      this.s.height = parseInt(this.$refs.box.style.height);
    },
    end(e) {
      this.drag = false;
      this.isMove = false;
      this.handler = null;
      //写入快照
      this.mitt.off("mousemove");
      this.mitt.off("mouseup");

      var newCs = window.getComputedStyle(this.s.el);
      this.$store.dispatch("page/moveNode", {
        style: {
          left: newCs.left,
          top: newCs.top,
          width: newCs.width,
          height: newCs.height,
        },
      });
      e.stopPropagation();
    },
    move(e) {
      let s = this.s;
      if (this.isMove) {
        // console.log("平移");

        s.x1 = e.screenX;
        s.y1 = e.screenY;
        var offsetx = s.x1 - s.x;
        var offsety = s.y1 - s.y;

        s.el.style.left = parseInt(s.left) + offsetx + "px";
        s.el.style.top = parseInt(s.top) + offsety + "px";
      }
      if (this.drag) {
        // console.log("变形");

        s.x1 = e.screenX;
        s.y1 = e.screenY;
        var offsetx = s.x1 - s.x;
        var offsety = s.y1 - s.y;
        if (this.handler == "left") {
          s.el.style.left = parseInt(s.left) + offsetx + "px";
          s.el.style.width = parseInt(s.width) - offsetx + "px";
        }

        if (this.handler == "top") {
          s.el.style.top = parseInt(s.top) + offsety + "px";
          s.el.style.height = parseInt(s.height) - offsety + "px";
        }

        if (this.handler == "bottom") {
          s.el.style.height = parseInt(s.height) + offsety + "px";
        }

        if (this.handler == "right") {
          s.el.style.width = parseInt(s.rect.width) + offsetx + "px";
        }

        if (this.handler == "leftTop") {
          s.el.style.top = parseInt(s.top) + offsety + "px";
          s.el.style.left = parseInt(s.left) + offsetx + "px";
          s.el.style.width = parseInt(s.width) - offsetx + "px";
          s.el.style.height = parseInt(s.height) - offsety + "px";
        }

        if (this.handler == "leftBottom") {
          s.el.style.left = parseInt(s.left) + offsetx + "px";
          s.el.style.height = parseInt(s.height) + offsety + "px";
          s.el.style.width = parseInt(s.width) - offsetx + "px";
        }

        if (this.handler == "rightTop") {
          s.el.style.width = parseInt(s.rect.width) + offsetx + "px";
          s.el.style.height = parseInt(s.rect.height) - offsety + "px";
          s.el.style.top = parseInt(s.top) + offsety + "px";
        }

        if (this.handler == "rightBottom") {
          s.el.style.width = parseInt(s.rect.width) + offsetx + "px";
          s.el.style.height = parseInt(s.rect.height) + offsety + "px";
        }

        // var cs=window.getComputedStyle(this.s.el);
        // this.p.w=parseInt(cs.width);
        // this.p.h=parseInt(cs.height);
      }
    },
    cancelSelect(e) {
      this.display = false;
      this.$store.dispatch("page/cancelSelect");
      e.stopPropagation();
    },
  },
  mounted() {},
  setup() {},
};
</script>

<style lang="scss" scoped>
.box {
  cursor: move;
  display: inline-grid;
  grid-template-columns: 10px auto 10px;
  grid-template-rows: 10px auto 10px;

  //  grid-template-columns: 10px auto 10px auto 10px;
  // grid-template-rows: 10px auto 10px auto 10px;
  border: 1px solid #00acdc;
  // background-color: #b4cd8a;
  // opacity: .75;
  grid-template-areas:
    "left_top   top  right_top"
    // "left_up . . . right_up"
    "left  center  right"
    // "left_down . center . right_down"
    "left_bottom   bottom  right_bottom";
}
.handler {
  width: 10px;
  height: 10px;
  // border:1px solid blue;
  background-color: white;
  border: 2px solid #00acdc;
}
.gutter {
  border: 2px solid #ff00ff00;
}
.left {
  grid-area: left;
  cursor: e-resize;
  position: relative;
  left: -5px;
}
.right {
  cursor: e-resize;
  grid-area: right;
  position: relative;
  right: -5px;
}
.top {
  cursor: s-resize;
  grid-area: top;
  position: relative;
  top: -5px;
}
.bottom {
  cursor: s-resize;
  grid-area: bottom;
  position: relative;
  bottom: -5px;
}

.center {
  grid-area: center;
}

.left_top {
  cursor: se-resize;
  grid-area: left_top;
  position: relative;
  top: -5px;
  left: -5px;
}
.left_bottom {
  cursor: sw-resize;
  grid-area: left_bottom;
  position: relative;
  bottom: -5px;
  left: -5px;
}
.right_top {
  cursor: sw-resize;
  grid-area: right_top;
  position: relative;
  top: -5px;
  right: -5px;
}
.right_bottom {
  cursor: se-resize;
  grid-area: right_bottom;
  position: relative;
  bottom: -5px;
  right: -5px;
}

.left_up {
  grid-area: left_up;
  cursor: e-resize;
}
.left_down {
  grid-area: left_down;
  cursor: e-resize;
}
.right_up {
  grid-area: right_up;
  cursor: e-resize;
}
.right_down {
  grid-area: right_down;
  cursor: e-resize;
}

.top_left {
  cursor: s-resize;
  grid-area: top_left;
}
.top_right {
  cursor: s-resize;
  grid-area: top_right;
}
.bottom_left {
  cursor: s-resize;
  grid-area: bottom_left;
}
.bottom_right {
  cursor: s-resize;
  grid-area: bottom_right;
}
</style>

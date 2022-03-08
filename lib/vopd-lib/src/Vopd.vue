<template>
    <div class="vopd flex flex-row" style="width:100%; height:600px">
      <Left  class="w-15 " />
      <div class="flex flex-grow border overflow-scroll   relative  window">
       
          <Center class="flex-grow-0   doc "/>
         <div class=" w-full h-full view   sticky  top-0  " style=" margin-left:-1024px; pointer-events: none;">
            <Control class=" left-8 top-8  absolute"  style="pointer-events: normal">
              <div class="ToolView border border-t-gray-200 p-1">
                  <div class="item">
                    <i class="las la-mouse-pointer" @click="changeMode(0)"></i>
                  </div>
                  <div class="item">
                    <i class="las la-hand-paper" @click="changeMode(1)"></i>
                  </div>
                  <div class="item">
                    <i class="las la-plug" @click="changeMode(2)"></i>
                  </div>
              </div>
            </Control>
            <Control class="top-0  left-0   w-full flex  absolute  bg-white">
                <i class="las la-eye w-6 h-6"></i>
            </Control>
            <Control class="top-0    w-full flex  absolute  bg-white">
                <div class="h-6 border shadow flex-grow">111</div>
            </Control>
            <Control class="top-0  h-full flex text-center  absolute bg-white">
                <div class=" w-6 border shadow flex-grow">222</div>
            </Control>
            <Control class=" right-5 top-4  absolute flex">
              <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow">
                <input class=" inline text-sm w-10 text-center bg-inherit" value="1024"/>
                <p class="text-sm">/</p>
                <input class=" inline text-sm w-10 text-center bg-inherit" value="960"/>
              </div>
              <div class="flex items-center justify-center border rounded-full shadow bg-gray-200">
                  <i class="lab la-chrome leading-3 px-1 "></i>
              </div>
            </Control>
            <Control class=" right-2 bottom-2 absolute ">
                <div class="flex items-center justify-center border rounded-full bg-gray-200 shadow">
                  <i class=" item las la-search-plus leading-3 px-1 "></i>
                  <input class=" inline text-sm w-10 bg-inherit" value="100%"/>
                  <i class="item las la-search-minus leading-3 px-1 "></i>
                </div>
            </Control>
        </div>
      </div>
      <Right class="w-15"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { defineComponent } from 'vue'
import Right from './components/Right.vue'
import Center from './components/Center.vue'
import Left from "./components/Left.vue"
import ToolView from "./view/ToolView/ToolView.vue"
import TimeView from "./view/TimeView/TimeView.vue"
import ev from "./utils/eventbus";

// import state from "./utils/state";
export default defineComponent({
  props:{
    value:Object,
  },
  components:{
    Left,
    Center,
    Right,
    ToolView,
    TimeView,
  },
  watch:{
    value:{
      handler(n,o){
        console.log(this.value)
        ev.initCtx(this.value)
      }
    }
  },
  data(){
    return {}
  },
  mounted(){

  },
  setup() {
   
  }
})
</script>


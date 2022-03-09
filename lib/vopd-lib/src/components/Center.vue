<template>
    
        <Control class=" left-8  top-4  absolute z-20 control rounded-sm"  >
                <div class="border border-t-gray-200 p-2 absolute mt-4  shadow">
                    <div class="">
                      <i class="las la-mouse-pointer  "
                        :class="{
                          'text-blue-400':mode==0
                        }"
                       @click="changeMode(0)"></i>
                    </div>
                    <div class="">
                      <i class="las la-hand-paper" 
                      
                         :class="{
                          'text-blue-400':mode==1
                        }"
                      @click="changeMode(1)"></i>
                    </div>
                    <div class="">
                      <i class="las la-plug" @click="changeMode(2)" 
                      
                         :class="{
                          'text-blue-400':mode==2
                        }"
                      ></i>
                    </div>
                </div>
        </Control>

        <Control class=" right-5 mt-4 top-4   absolute control">
                <div class=" ">
                  <PageSize :width="page.width"  :height="page.height" @input="changeSize"></PageSize>
                </div>
        </Control>

        <Control class=" right-5 mt-4 bottom-4  absolute control">
                <div class=" ">
                  <PageScale v-model="page.scale"></PageScale>
                  </div>
        </Control> 

      <div   class="z-10 overflow-auto view h-full w-full" :class="[modeList[this.mode].cursor]"  ref="view"  >
        <div ref="canvas" class="  relative overflow-hidden  border shadow doc  bg-white" 
              :style="{
                width: page.width,
                height:page.height,
                margin:'80px 80px 80px 80px',
                transform: 'scale('+page.scale+')',
                'transform-origin': 'left top'
                }">
          <div class="layers">
          <!-- <Layer name="refLineLayer" /> -->
          
          <Layer name="BaseLayer" />
          
          <Layer name="SelectLayer" />
          
          <!-- <Layer name="MouseLayer" /> -->

          <Layer name="HoverLayer" />

          <Layer name="HandlerLayer" />

          </div>
        </div>
      </div>         
</template>

<style scoped>
.control {
  z-index: 999;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import Layer from './Layer.vue'
import ev from "../utils/eventbus"
import Control from './Control.vue'
import ToolView from '../view/ToolView/ToolView.vue'
import PageScale from '../control/PageScale.vue'
import PageSize from '../control/PageSize.vue'


export default defineComponent({
  components: { Layer, Control, ToolView, PageScale, PageSize },
  computed:{
    pageScale(){
      return (this.page.scale)*100
    }
  },
  data(){
    return {
      page:{
        width:"1024px",
        height:"960px",
      },
      mode:0,
      modeList:[
        {
          name:"select",
          cursor:"normal"
        },
        {
          name:"grab",
           cursor:"cursor-grabbing"
        },
         {
          name:"plug",
           cursor:"plug"
        }
      ],
      el:null
    }
  },
  methods:{
    changeSize(p:any){
      console.log(this);
      console.log(p);
        this.page.width=p.w;
        this.page.height=p.h;
    },
    changeMode(m:number){
      this.mode=m;
    },
    render(p:any){
      console.log("页面初始化")
      this.page=p.page;
    }
  }, 
  mounted(){
    ev.on("EditorView","init",this.render)
    let  el:any=this.$refs.view;

    el.addEventListener("mousemove",(e)=>{
      ev.fire("main","mousemove",e);
    }),
    el.addEventListener("mousedown",(e)=>{
      ev.fire("main","mousedown",e);
    }),
    el.addEventListener("mouseup",(e)=>{
      ev.fire("main","mouseup",e);
    }),
    el.addEventListener("mouseenter",(e)=>{
      ev.fire("main","mouseenter",e);
    }),
    el.addEventListener("mouseleave",(e)=>{
      ev.fire("main","mouseleave",e);
    })
  },
  setup() {
    
  }
})
</script>

<style scoped>
</style>


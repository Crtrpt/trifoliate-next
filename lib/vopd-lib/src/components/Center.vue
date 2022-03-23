<template>

        <div class="flex-grow border  relative  window bg-gray-50 overflow-hidden h-full " ref="window">
        <Control class=" left-8  top-10  absolute  control rounded-sm z-40"  >
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

        <Control class=" absolute  z-40">
               <RolerContrl :ctx="page" />
        </Control>
        <Control class="left-40 mt-4 top-4    absolute control z-40 flex">
               <ActionContrl :ctx="page" />
        </Control>

        <Control class=" left-20 mt-4 top-4   absolute control z-40 flex">
               <HistoryContrl />
        </Control>

        <Control class=" right-5 mt-4 top-4   absolute control z-40 flex">
                <PageSize   :ctx="page" @input="changeSize"></PageSize>
                <PageScale v-model="page.scale"></PageScale>
                <GridContrl :ctx="page" @input="(p)=>{page.displayGrid=p}"></GridContrl>
                <!-- <SettingContrl :ctx="page"></SettingContrl> -->
        </Control>


        <div   class="z-10 overflow-auto view h-full w-full" :class="[modeList[this.mode].cursor]"  ref="view"  @scroll="scroll"  @wheel="wheel">
          <div ref="canvas" class="  relative overflow-hidden  border shadow doc  bg-white" 
                :style="{
                  width: page.width,
                  height:page.height,
                  marginLeft:page.marginLeft ,
                  marginRight:page.marginRight ,
                  marginTop:page.marginTop ,
                  marginBottom:page.marginBottom ,
                  transform: 'scale('+page.scale+')',
                  'transform-origin': 'left top'
                  }"
              @dragover="allowDrop($event)"
            >
            <div class="layers" ref="layer">
          
              <Layer name="GridLayer"  :ctx="page" />
              <Layer name="BaseLayer"  :ctx="page" />
              
              <!-- <Layer name="SelectLayer" :ctx="page" /> -->

              <Layer name="HandlerLayer" :ctx="page" />
      
            </div>
          </div>
        </div>    
        </div>     
     
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue'
import Layer from './Layer.vue'
import ev from "../utils/Eventbus"
import Control from './Control.vue'
import ToolView from '../view/ToolView/ToolView.vue'
import PageScale from '../control/PageScale.vue'
import PageSize from '../control/PageSize.vue'
import GridContrl from '../control/GridContrl.vue'
import HistoryContrl from '../control/HistoryContrl.vue'
import RolerContrl from '../control/RolerContrl.vue'
import SettingContrl from '../control/SettingContrl.vue'
import ActionContrl from '../control/ActionContrl.vue'
import ContextMenu from "../common/context/ContextMenu.js"

export default defineComponent({
  components: { Layer, Control, ToolView, PageScale, PageSize, GridContrl, HistoryContrl, RolerContrl, SettingContrl, ActionContrl },
  computed:{
    pageScale(){
      return (this.page.scale)*100
    }
  },
  data(){
    return {
      page:{
        rect:{},
        width:"1024px",
        height:"960px",
        displayGrid:true,
        marginLeft:"80px" ,
        marginRight:"80px" ,
        marginTop:"80px" ,
        marginBottom:"80px",
        scrollTop:"0",
        scrollLeft:'0',
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
    wheel(e){
      // console.log(e);
      if(e.ctrlKey){
          e.preventDefault();
          if(e.deltaY>0){
            ev.fire("main","zoomin",null);
          }else{
            ev.fire("main","zoomout",null);
          }
      }else{

      }
    },
    scroll(e){
      this.page.scrollTop=this.$refs.view.scrollTop
      this.page.scrollLeft=this.$refs.view.scrollLeft
      // console.log(this.page);
    },
    allowDrop(e){
        e.preventDefault();
    },  
    changeSize(p:any){
        this.page.width=p.w;
        this.page.height=p.h;
    },
    changeMode(m:number){
      this.mode=m;
    },
    render(p:any){
      // console.log("页面初始化")
      this.page=p.page;
      this.page.rect=this.$refs.layer.getBoundingClientRect();
      this.page.scrollTop=this.$refs.view.scrollTop
      this.page.scrollLeft=this.$refs.view.scrollLeft
      this.page.view=this.$refs.view;
    }
  }, 
  mounted(){

    const menu = new ContextMenu( this.$refs.window, [
                {text: '保存为组件', value: 'save_widget', onclick: ()=>{}},
                null,
                {text: '删除', value: 'remove', onclick: ()=>{}},
    ]);
    menu.install();


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


<template>
    <div class="w-[40rem] flex">
        <div class="border  w-[20rem] flex flex-col">
            <Tab class=" border-t flex-grow  h-1/2 " :data="rightTop"></Tab>
            <Tab class=" h-1/2" :data="right"></Tab>
        </div>
         <div class="border  w-[20rem]">
             <DataView class="border-t  h-1/2"/>
             <QueryView class="border-t h-1/2"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TreeView from "../view/TreeView/TreeView.vue"
import AttrView from "../view/AttrView/AttrView.vue"
import EventView from "../view/EventView/EventView.vue"
import DataView from "../view/DataView/DataView.vue"
import QueryView from "../view/DataView/QueryView.vue"

import MultipleSelectView from "../view/MultipleSelectView/MultipleSelectView.vue"
import Tab from '../common/Tab.vue'
import TabItem from '../common/TabItem.vue'
export default defineComponent({
  components:{ TreeView, AttrView, DataView, MultipleSelectView, QueryView, EventView, Tab, TabItem },
  data(){
      return {
          rightTop:[{
              title:"层级",
              icon:"las la-layer-group",
              componemt:"TreeView"
          }],
          right:[{
              title:"属性",
              icon:"las la-bars",
              componemt:"AttrView"
          },{
              title:"事件",
              icon:"las la-ellipsis-v",
              componemt:"EventView"
          }]
      }
  },
  setup() {
    
  }
})
</script>


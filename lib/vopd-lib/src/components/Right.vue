<template>
     <Tab  class="h-full" direction="right" :data="right"></Tab>
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
          right:[
            {
              title:"层级",
              icon:"las la-layer-group",
              componemt:"TreeView"
          },  
         {
              title:"属性",
              icon:"las la-bars",
              componemt:"AttrView"
          },
 
        //   {
        //       title:"事件",
        //       icon:"las la-ellipsis-v",
        //       componemt:"EventView"
        //   },

          {
              title:"数据",
              icon:"las la-database",
              componemt:"DataView"
          },{
              title:"结果",
              icon:"las la-table",
              componemt:"QueryView"
          }
          
          ]
      }
  },
  setup() {
    
  }
})
</script>


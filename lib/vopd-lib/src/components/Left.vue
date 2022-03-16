<template>
     <Tab class="h-full" direction="left" :data="leftTop" :select="1"></Tab>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tab from '../common/Tab.vue'
import TabItem from '../common/TabItem.vue'
export default defineComponent({
  components:{ Tab, TabItem },
  data(){
      return {
          leftTop:[
          {
              title:"部件",
              icon:"las la-cubes",
              componemt:"ComponentView"
          },
          {
              title:"层级",
              icon:"las la-layer-group",
              componemt:"TreeView"
          },
        //   {
        //       title:"页面",
        //       icon:"lar la-copy",
        //       componemt:"PageView"
        //   },
          {
              title:"变量",
              icon:"las la-dice-d20",
              componemt:"EnvView"
          }]
      }
  },
  setup() {
    
  }
})
</script>


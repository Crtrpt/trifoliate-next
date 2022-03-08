<template>
    <div class="w-[20rem] flex">
       <Tab class=" border-t flex-grow "  direction="left" :data="leftTop" :select="1"></Tab>
    </div>
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
              title:"页面",
              icon:"lar la-copy",
              componemt:"PageView"
          },{
              title:"变量",
              icon:"las la-ellipsis-v",
              componemt:"EnvView"
          }]
      }
  },
  setup() {
    
  }
})
</script>


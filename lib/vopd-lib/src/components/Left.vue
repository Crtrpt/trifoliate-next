<template>
    <div class="grid grid-cols-2  gap-1 auto-rows-max         p-1 w-[11rem] border  overflow-auto">
      <div v-for="i in list" v-bind:key="i" class="border h-20 w-20 text-center cursor-pointer">
         <div class="flex  justify-center items-center h-full">
           <div>{{i.name}}</div>
         </div>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
    return {
      list:[
        {
          id:1,
          name:"文字"
        },
        {
          id:2,
          name:"图片"
        },
        {
          id:3,
          name:"视频"
        },
        {
          id:4,
          name:"其他"
        },
        {
           id:5,
          name:"增加"
        }
      ]
    }
  },
  setup() {
    
  }
})
</script>


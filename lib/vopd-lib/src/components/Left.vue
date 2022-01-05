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
          name:"文字",
          widget:"Text",
        },
        {
          id:2,
          name:"图片",
          widget:"Image",
        },
        {
          id:3,
          name:"视频",
          widget:"Video",
        },
        {
          id:4,
          name:"图表",
          widget:"Chart"
        },
      ]
    }
  },
  setup() {
    
  }
})
</script>


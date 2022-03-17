<template>
     <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow">
       <i class="las la-cog cursor-pointer" ></i>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import keyboardJS from "keyboardjs";
import env from "../utils/Eventbus"
export default defineComponent({
    mounted(){
      keyboardJS.bind('del',(e)=>{
        console.log("删除=======================")
        env.fire("none","deleteSelect",null);
      })
      keyboardJS.watch();
    }
})
</script>

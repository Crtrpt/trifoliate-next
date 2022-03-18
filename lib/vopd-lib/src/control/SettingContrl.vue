<template>
     <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow"
     
      v-tooltip="'页面设置'"
     >
       <i class="las la-cog cursor-pointer"  ref="ref" @mouseenter="enter" @mouseleave="out"  ></i>
    </div>
</template>

<script lang="ts">

import {reposition} from 'nanopop';

import { defineComponent } from 'vue'
import keyboardJS from "keyboardjs";
import env from "../utils/Eventbus"
export default defineComponent({
    data(){
      return {
        display:false
      }
    },
    methods:{
      enter(){
         this.display=true;
      },
      out(){
        this.display=false;
      }
    },
    mounted(){
     
      keyboardJS.bind('del',(e)=>{
        console.log("删除=======================")
        env.fire("none","deleteSelect",null);
      })
      keyboardJS.watch();
    }
})
</script>

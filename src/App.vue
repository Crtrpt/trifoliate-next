<script setup>
import Vopd from '../lib/vopd-lib/src/Vopd.vue'
import './index.css'
</script>

<template>
  <div>
    <div class="mb-3">演示</div>
    <Vopd :value="data"/>
  </div>
  
</template>
<script>


export default {
  components:{Vopd},
  data(){
    return {
      data:{
        list:[{
          id:1,
          name:"文字",
          style:{
            width:"200px",
            left:"200px",
            top:"100px",
            position: "absolute"
          }
        },
        {
          id:2,
          name:"图片",
          style:{
            width:"400px",
            left:"400px",
            top:"200px",
            position: "absolute"
          }
          
        }]
      }
    }
  },
  setup() {
    
  },
}
</script>

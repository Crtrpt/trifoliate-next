<script setup>
import Vopd from '../lib/vopd-lib/src/Vopd.vue'
import './index.css'
</script>

<template>
  <div>
    <div class="mb-3">演示</div>
    <Vopd v-model="data"/>
  </div>
  
</template>

<script>


export default {
  components:{Vopd},
  data(){
    return {
      data:[
        {
          id:1,
        },
        {
          id:2,
        }
      ]
    }
  },
  setup() {
    
  },
}
</script>

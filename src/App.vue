<script setup>
import Vopd from '../lib/vopd-lib/src/Vopd.vue'
import './index.css'
</script>

<template>
  <div>
    <div class="mb-3 text-center  ">演示</div>
    <Vopd :value="data" ref="vopd"/>
  </div>
  
</template>
<script>

export default {
  components:{Vopd},
  data(){
    return {
      data:{
        datasource:[],
        list:[],
        api:"",
      }
    }
  },
  created(){
    var _this=this;
    fetch("http://127.0.0.1:8080/get").then((response)=>{
        return response.json()
    }).then(res=>{
       _this.data=res;
    })
  },
  setup() {
    
  },
}
</script>

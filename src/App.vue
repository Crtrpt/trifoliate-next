<template>
  <div class="flex flex-col h-full">
    <div class="m-3 text-center  " >演示</div>

    <Vopd :value="data" ref="vopd"  style="height:90vh"/>
  </div>
  
</template>
<script lang="ts">


import './index.css'
import "../public/css/line-awesome.min.css"

import nodelist from "./nodelist.js"

export default {
  data(){
    return {
      nodeList:nodelist,
      data:{
        datasource:[],
        list:[],
        api:"",
        env:[],
      }
    }
  },
  created(){
    var _this=this;
    fetch("http://127.0.0.1:8080/get").then((response)=>{
        return response.json()
    }).then(res=>{
      res.nodeList=this.nodeList;
      console.log("合并数据")
       _this.data=res;
    })
  },
  setup() {
    
  },
}
</script>

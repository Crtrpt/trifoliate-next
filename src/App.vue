<template>
  <div class="flex flex-col h-full  w-full" style="height:80%">
    <Vopd :value="data" ref="vopd"/>
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
        nodeList:[],
      }
    }
  },
  created(){
    var _this=this;
    fetch("http://127.0.0.1:8080/get").then((response)=>{
        return response.json()
    }).then(res=>{
      res.nodeList=this.nodeList;
       _this.data=res;
    })
  }
}
</script>

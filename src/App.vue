<template>
  <div class="flex flex-col h-full">
    <div class="m-3 text-center  " >演示</div>

    <Vopd :value="data" ref="vopd"  style="height:90vh"/>
  </div>
  
</template>
<script lang="ts">

import Vopd from '../lib/vopd-lib/src/Vopd.vue'
import './index.css'

export default {
  components:{Vopd
  },
  data(){
    return {
      nodeList:[
                {
                    id:"1",
                    name:"容器",
                    render:"ContainerRender",
                    widget:"Container",
                    icon:"las la-stop",
                    style:{
                      width:"400px",
                      height:"200px",
                    },
                    children:[]
                },
                {
                    id:"5",
                    name:"文字",
                    widget:"Text",
                    render:"TextRender",
                    icon:"las la-font",
                    style:{
                      "display":"inline"
                    }
                },
                {
                    id:"6",
                    name:"图表",
                    render:"EchartRender",
                    widget:"Echart",
                    icon:"las la-chart-pie",
                    style:{
                      "width":"100%",
                      "height":"100%",
                    },
                    data:{
                      "tooltip": {},
                      "xAxis": {
                        "data": ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"]
                      },
                      "yAxis": {},
                      "series": [
                        {
                          "name": "sales",
                          "type": "bar",
                          "data": [10, 20, 30, 40, 50, 60]
                        }
                      ]
                    },
                  },
                {
                    id:"7",
                    name:"地图",
                    render:"MapRender",
                    widget:"Map",
                    icon:"las la-map",
                    style:{
                      "width":"100%",
                      "height":"100%",
                    }
                }
      ],
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
       _this.data=res;
    })
  },
  setup() {
    
  },
}
</script>

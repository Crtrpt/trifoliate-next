<template>
  <div class="flex flex-col h-full">
    <div class="m-3 text-center  " >演示</div>

    <Vopd :value="data" ref="vopd"  style="height:90vh"/>
  </div>
  
</template>
<script lang="ts">


import './index.css'

export default {
  data(){
    return {
      nodeList:[
                {
                  name:"固定",
                  list:[
                    {
                    id:"100",
                    name:"固定布局",
                    render:"ContainerRender",
                    widget:"Container",
                    icon:"las la-stop",
                    style:{
                      height:"200px"
                    },
                    children:[]
                },
                {
                    id:"110",
                    name:"浮动布局",
                    render:"ContainerRender",
                    widget:"Container",
                    icon:"las la-stop",
                    style:{
                      position:"absolute",
                      left:"100px",
                      top:"100px",
                      width:"400px",
                      height:"200px",
                    },
                    children:[]
                },
                {
                    id:"101",
                    name:"行布局",
                    render:"ContainerRender",
                    widget:"Container",
                    icon:"las la-stop",
                    style:{
                      display:"flex",
                    },
                    children:[]
                },
                 {
                    id:"111",
                    name:"列布局",
                    render:"ContainerRender",
                    widget:"Container",
                    icon:"las la-columns",
                    style:{
                      flexDirection: "column",
                      display:"flex",
                    },
                    children:[]
                },
                {
                    id:"102",
                    name:"1/2宽布局",
                    render:"ContainerRender",
                    widget:"Container",
                    icon:"las la-stop",
                    style:{
                      flexDirection: "column",
                      display:"flex",
                      width:"50%",
                    },
                    children:[]
                },
                {
                    id:"103",
                    name:"1/3宽布局",
                    render:"ContainerRender",
                    widget:"Container",
                    icon:"las la-stop",
                    style:{
                      flexDirection: "column",
                      display:"flex",
                     width:"33.33%",
                    },
                    children:[]
                },
                {
                    id:"104",
                    name:"1/4宽布局",
                    render:"ContainerRender",
                    widget:"Container",
                    icon:"las la-stop",
                    style:{
                      flexDirection: "column",
                      display:"flex",
                      width:"25%",
                    },
                    children:[]
                },
                {
                    id:"105",
                    name:"1/5宽布局",
                    render:"ContainerRender",
                    widget:"Container",
                    icon:"las la-stop",
                    style:{
                      flexDirection: "column",
                      display:"flex",
                      width:"20%",
                    },
                    children:[]
                },
                {
                    id:"106",
                    name:"剩余空间布局",
                    render:"ContainerRender",
                    widget:"Container",
                    icon:"las la-stop",
                    style:{
                     
                      display:"flex",
                      flexGrow:"1",
                    },
                    children:[]
                },
                  {
                          id:"201",
                          name:"表单布局",
                          render:"FormRender",
                          widget:"Form",
                          icon:"las la-stop",
                          style:{
                            width:"100%"
                          },
                          children:[]
                      },
                
                ]
                },
                {
                  name:"元素",
                  list:[
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
                },
                {
                  name:"表单",
                  list:[
                      {
                          id:"202",
                          name:"输入框",
                          render:"InputRender",
                          widget:"Input",
                          icon:"las la-stop",
                          meta:{
                            type:"text",
                          },
                          style:{

                          },
                          children:[]
                      },
                      {
                          id:"203",
                          name:"选择框",
                          render:"InputRender",
                          widget:"Input",
                          icon:"las la-stop",
                          meta:{
                            type:"checkbox",
                          },
                          style:{

                          },
                          children:[]
                      }
                  ]
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
      console.log("合并数据")
       _this.data=res;
    })
  },
  setup() {
    
  },
}
</script>

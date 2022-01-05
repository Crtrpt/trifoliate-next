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
        datasource:[
                {
                    name:"测试数据1",
                    render:"Mysql",
                    apList:[
                        {
                            name:"测试查询1",
                            query:"select * from test1"
                        },
                        {
                            name:"测试查询2",
                            query:"select * form test2"
                        }
                    ]
                },
                {
                    name:"测试数据2",
                    render:"Postgresql",
                    apList:[
                        {
                            name:"select * from test1"
                        },
                        {
                            name:"select * form test2"
                        }
                    ]
                },
                {
                    name:"测试Api查询",
                    render:"Api",
                    apList:[
                        {
                            name:"获取聚合查询1",
                            query:{
                                method:"GET",
                                url:"/test1",
                                query:"",
                                header:[

                                ]
                            }
                        },
                         {
                            name:"POST 查询获取请求",
                             query:{
                                method:"POST",
                                url:"/test2",
                                query:"",
                                header:[
                                    
                                ]
                            }
                        }
                    ]
                },
                 {
                    name:"Mqtt订阅数据",
                    render:"Mqtt",
                    apList:[
                        {
                            name:"获取聚合查询1",
                            topic:"#/test",
                        },
                         {
                            name:"获取聚合查询2",
                            topic:"#/test1"
                        }
                    ]
                }
        ],
        list:[{
          id:1,
          name:"容器",
          render:"ContainerRender",
          widget:"Container",
          children:[
            {
            id:3,
            name:"文字",
            render:"TextRender",
            content:"显示一段文本",
            widget:"Text",
              style:{
                width:"100px",
                left:"100px",
                top:"100px",
                position: "absolute",
                border:"1px solid red",
               
              }
            },
          ],
          style:{
            width:"200px",
            height:"200px",
            left:"200px",
            top:"100px",
            position: "absolute",
            background:"lightblue"
          }
        },
        {
          id:2,
          name:"容器",
          render:"ContainerRender",
          widget:"Container",
          children:[
          ],
          style:{
            width:"400px",
            left:"400px",
            height:"200px",
            top:"200px",
            position: "absolute",
            background:"lightblue"
          }
          
        }]
      }
    }
  },
  setup() {
    
  },
}
</script>

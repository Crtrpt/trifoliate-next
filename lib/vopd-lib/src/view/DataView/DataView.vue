<template>
    <div>
        <div class="p-1 border-b">数据视图</div>
        <div class="pt-1 pl-1 py-1">
               <div class="" v-for="l in list" :key="l">
                  <div> {{l.name}}</div>
                  <div class="ml-3">
                      <div v-for="ap in l.apList" :key="ap"> 
                        {{ap.name}}
                      </div>
                  </div>
               </div>
              
        </div>
    </div>
</template>

<script>
export default {
    name:"DataView",
    data(){
        return {
            list:[
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
            ]
        }
    }
}
</script>

<template>
    <div class="flex  flex-col"> 
        <div class="p-1 border-b flex flex-row">
            <div class="flex-grow">
                <i class="las la-cloud-download-alt"></i>
                查询结果视图 {{ap.id}} </div>
            <div class="action">
                <a @click="query" class=" cursor-pointer hover:text-blue-400"><i class="las la-play"></i></a>
            </div>
            </div>
        <component v-bind:is="type.render"  :data="ap" :type="type" class=" h-1/3 scroll-auto"/>
        <component v-bind:is="type.renderQuery" :data="res" class=" flex-grow h-2/3 scroll-auto"/>
    </div>
</template>

<script>
import ev from "../../utils/eventbus"
import JDBC from "../../datasource/JDBC.vue"
import RESTFUL from "../../datasource/RESTFUL.vue"

import JDBCQuery from "../../datasource/JDBCQuery.vue"
import RESTFULQuery from "../../datasource/RESTFULQuery.vue"

export default {
    components:{JDBC,JDBCQuery,RESTFUL,RESTFULQuery},
    data(){
        return {
            type:"",
            ap:"",
            api:"",
            res:null,
        }
    },
    methods:{
        changeAp(ap){
            this.type=ap.type;
            this.ap=ap.ap;
            console.log("修改Ap")
        },
        query(){
            var _this=this;
            fetch(this.api+"/query/"+this.type.id+"/"+this.ap.id).then(res=>res.text()).then((data)=>{
                console.log("查询结果");
                console.log(data);
                this.res=data;
            })
        },
        config(p){
            this.api=p.api
        }
    },
      mounted(){
        console.log("订阅AP")
        ev.on("QueryView","ChangeAp",this.changeAp)
        ev.on("QueryView","init",this.config)
    }
}
</script>
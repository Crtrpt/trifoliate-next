<template>
    <div class=""> 
        <div class="p-1 border-b">查询结果视图 {{ap.id}}</div>
        <div>
            <component v-bind:is="type.render"  :data="ap" :type="type"/>
        </div>
        <div>
            <component v-bind:is="type.renderQuery" />
        </div>
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
        }
    },
    methods:{
        changeAp(ap){
            this.type=ap.type;
            this.ap=ap.ap;
            console.log("修改Ap")
        }
    },
      mounted(){
        console.log("订阅AP")
        ev.on("QueryView","ChangeAp",this.changeAp)
    }
}
</script>
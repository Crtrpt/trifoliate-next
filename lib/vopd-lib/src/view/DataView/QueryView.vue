<template>
    <div class="flex  flex-col"> 
        <div class="p-1 border-b flex flex-row">
            <div class="flex-grow">
                <i class="las la-cloud-download-alt"></i>
                结果:{{ap.id}} </div>
            <div class="action">
                <a @click="query" class=" cursor-pointer hover:text-blue-400"><i class="las la-play"></i></a>
                <i class="las la-window-maximize"></i>
            </div>
            </div>
        <component  v-bind:is="type.render" :api="api" :data="ap" :type="type" ref="render" />
    </div>
</template>

<script lang="ts">
import ev from "../../utils/Eventbus"
import JDBC from "../../datasource/JDBC.vue"
import RESTFUL from "../../datasource/RESTFUL.vue"
import MQTT from "../../datasource/MQTT.vue"

export default {
    components:{JDBC,RESTFUL,MQTT},
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
        },
        query(){
            var _this=this;
            this.$refs.render.exec();
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
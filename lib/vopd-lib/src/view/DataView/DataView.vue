<template>
    <div>
        <div class="p-1 border-b">数据视图</div>
        <div class="pt-1 pl-1 py-1">
               <div class="" v-for="l in list" :key="l">
                  <div> {{l.name}}</div>
                  <div class="ml-3">
                      <div v-for="ap in l.apList" :key="ap" @click="updateQueryView"> 
                        {{ap.name}}
                      </div>
                  </div>
               </div>
              
        </div>
    </div>
</template>

<script>
import ev from "../../utils/eventbus"
export default {
    name:"DataView",
    methods:{
        updateQueryView(){

        },
        render(p){
            this.list=p.datasource;
        }
    },
    data(){
        return {
            list:[]
        }
    },
    mounted(){
         ev.on("DataView","init",this.render)
    }
}
</script>

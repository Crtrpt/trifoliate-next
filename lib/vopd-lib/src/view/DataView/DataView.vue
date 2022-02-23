<template>
    <div>
        <div class="p-1 border-b"><i class="las la-database"></i>数据视图</div>
        <div class="pt-1 pl-1 py-1">
               <div class="" v-for="l in list" :key="l">
                  <div class="cursor-pointer"> {{l.name}}</div>
                  <div class="ml-3">
                      <div v-for="ap in l.apList" :key="ap" @click="updateQueryView(l,ap)"  class="cursor-pointer"> 
                          <div class="name">{{ap.name}}</div>
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
        updateQueryView(source,ap){
            ev.fire("DataView","ChangeAp",{"type":source,"ap":ap})
            console.log("初始化");
            console.log(ev);
        },
        render(p){
            console.log(JSON.stringify(p));
            this.list=p.datasource;
        }
    },
    data(){
        return {
            list:[]
        }
    },
    mounted(){
         console.log("挂载")
         ev.on("DataView","init",this.render)
    }
}
</script>

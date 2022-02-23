<template>
    <div class="flex flex-col">
        <div class="p-1 border-b flex flex-row  justify-start items-center">
            <i class="las la-database"></i>
            <div class="name flex-grow">数据</div>
            <div class="action">
                <i class="las la-plus-circle"></i>
                <i class="las la-window-maximize"></i>
            </div>
        </div>
        <div class="px-1 overflow-auto flex-grow">
            <div class="" v-for="l in list" :key="l">
                   <div class="cursor-pointer flex flex-row items-center" @click="click(l)">
                        <i class="las la-caret-right" v-if="!l?.isExpand "></i>
                        <i class="las la-caret-down" v-if="l?.isExpand "></i>
                        <p class=" flex-grow">{{l.name}}</p>
                        <div class="action">
                                <i class="las la-trash"></i>
                        </div>
                    </div>
                  <div class="ml-5   " v-if="l?.isExpand">
                      <div v-for="ap in l.apList" :key="ap" @click="updateQueryView(l,ap)"  class="cursor-pointer flex  items-center"> 
                          <div class="name flex-grow">{{ap.name}}</div> 
                          <i class="las la-trash"></i>
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
        },
        click(i){
            i.isExpand=!(i?.isExpand);
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

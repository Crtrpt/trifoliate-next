<template>
    <BaseView>
         <template v-slot:lead>
                   <SearchBox class="flex-grow" v-model="filter.keywords" placeholder="搜索你要查找的环境变量"></SearchBox>
        </template>
        <template v-slot:action>
                    <i class="las la-plus-circle  cursor-pointer" @click="add"></i>
                    <i class="las la-times-circle  cursor-pointer" @click="close"></i>
        </template>
         <template v-slot:content>
             <div class="flex-grow overflow-hidden">
                  <template  v-for="i in list" v-bind:key="i.name">
                    <div class="flex" v-if="filter.keywords=='' || i.name.search(filter.keywords)>-1">   
                        <div class="p-1 w-1/3">
                        <input  class="border inline-block  w-full" v-model="i.name"/>
                        </div>
                        <div class="p-1 w-2/3">
                            <input  class="border inline-block   w-full" v-model="i.value"/>
                        </div>
                    </div>
             </template>
             </div>
            
        </template>
    </BaseView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseView from "../BaseView.vue"

import ev from "../../utils/Eventbus"
import SearchBox from '../../common/SearchBox.vue'
export default defineComponent({
    name:"EnvView",
    data(){
        return {
            filter:{
                keywords:"",
            },
            list:[
                {
                    name:"xxx",
                    value:"xxx"
                },
            ]
        }
    },
    components:{
    BaseView,
    SearchBox
},
    methods:{
        close(v){
            this.$emit("close")
        },
        render(p:any){
            console.log("环境变量")
               console.log(p)
             this.list=p.env;
        },
        add(){
            this.list.push({
                name:"",
                value:""
            })
        }
    },
    mounted(){
        this.render(ev.ctx.data.project);
        ev.on("EnvView","init",this.render)
    },
})
</script>

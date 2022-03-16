<template>
     <BaseView>
         <template v-slot:lead>
                <VSwitch v-model="isMultipleSelect"  ></VSwitch>
        </template>
        <template v-slot:action>
               <div class="flex items-center">
                    <i class="las la-times-circle cursor-pointer" @click="$emit('close')"></i>
               </div>
        </template>
         <template v-slot:content>
             <div class="flex flex-col">
                <div class="flex-grow py-1 overflow-auto">
                    <template v-for="i in source.list" :key="i" >
                         <Tree  v-if="!i.attr['isDelete']" :data="i" :level="1" :isMultipleSelect="isMultipleSelect"></Tree>
                    </template>
                </div>
            </div> 
        </template>
    </BaseView>
</template>

<script lang="ts">
import ev from "../../utils/eventbus"
import Tree from "./Tree.vue"
import BaseView from "../BaseView.vue"
import SearchBox from "../../common/SearchBox.vue"
import VSwitch from "../../common/VSwitch.vue"
export default {
    components:{ Tree, BaseView, SearchBox, VSwitch },
    data(){
        return {
            lastSelect:null,
            selectList:[],
            isMultipleSelect:true,
            filter:{
                    keywords:""
            },
            searchList:[

            ],
            source:{
                list:[],
            }
        };
    },
    watch:{
        "filter.keywords":{
            handler(n){
                //TODO 树搜索
                this.search(this.source.list,path);
            }
        }
    },
    methods:{
        search(list,ctx){
            
        },
        changeSelectMode(){
                this.isMultipleSelect=!this.isMultipleSelect
        },
        render(payload:any,ctx:any){
            console.log(ctx.data.project);
            this.source=ctx.data.project;
        }
    },
    mounted(){
        this.render(ev.ctx.data.project,ev.ctx);
        ev.on("TreeView","init",this.render)
        //数据变更的时候重新拉取数据
        ev.on("TreeView","change",this.render)
    }
}
</script>
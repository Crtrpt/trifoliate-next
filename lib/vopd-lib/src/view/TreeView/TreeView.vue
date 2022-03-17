<template>
     <BaseView>
         <template v-slot:lead>
                
                <VSwitch v-model="isMultipleSelect" class="p-1" ></VSwitch>
                <SearchBox class="flex-grow" placeholder="搜索文档中的组件"></SearchBox>
        </template>
        <template v-slot:action>
               <div class="flex items-center">
                    <i class="las la-times-circle cursor-pointer p-1" @click="$emit('close')"></i>
               </div>
        </template>
         <template v-slot:content>
             <div class="flex flex-col  h-full">
                <div class="flex-grow py-1 overflow-auto">
                    <div class="p-2    text-center  border-graw-400 border-dashed border-2" 
                    @dragenter="dragenter($event)"
                    @dragleave="dragleave($event)"
                    @drop="drop($event)"
                     @dragover="allowDrop($event)"
                    :class='{
                        "border-green-500":isDragenter,
                        "border-2":isDragenter,
                    }'
                    v-if="source.list.length==0" >
                        可以把组件拖放到这里
                    </div>
                    <template v-for="i in source.list" :key="i.id+'tree'" >
                         <Tree  v-if="!i.attr['isDelete']" :data="i" :level="1" :isMultipleSelect="isMultipleSelect"></Tree>
                    </template>
                </div>
            </div> 
        </template>
    </BaseView>
</template>

<script lang="ts">
import ev from "../../utils/Eventbus"
import Tree from "./Tree.vue"
import BaseView from "../BaseView.vue"
import SearchBox from "../../common/SearchBox.vue"
import VSwitch from "../../common/VSwitch.vue"
import { env } from 'echarts'
export default {
    components:{ Tree, BaseView, SearchBox, VSwitch },
    data(){
        return {
            isDragenter:false,
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
        dragenter(e){
             console.log("进入")
            this.isDragenter=true;
             e.stopPropagation();
        },
        allowDrop(e){
            e.preventDefault();
        },
        dragleave(e){
            console.log("离开")
            this.isDragenter=false;
            e.stopPropagation();
        },
        drop(e){
            console.log("放下"+e.dataTransfer.getData("text/plain"));
            ev.fire("Container","addNode",{
                id:null,
                nodeId:e.dataTransfer.getData("text/plain")
            });
            e.stopPropagation();
        },
        search(list,ctx){
            
        },
        changeSelectMode(){
                this.isMultipleSelect=!this.isMultipleSelect
        },
        render(payload:any,ctx:any){
            console.log("重绘");
            console.log(ev.ctx.data);
            this.source=ev.ctx.data.project;
        },
    },
    mounted(){
        
        ev.on("TreeView","init",this.render)
        //数据变更的时候重新拉取数据
        ev.on("none","change",this.render)
    }
}
</script>
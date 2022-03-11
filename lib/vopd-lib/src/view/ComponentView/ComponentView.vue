<template>
    <BaseView>
         <template v-slot:lead>
                    <SearchBox class="flex-grow" v-model="filter.keywords" @input="change" placeholder="搜索你需要的组件"></SearchBox>
        </template>
        <template v-slot:action>
                    <i class="las la-times-circle cursor-pointer" @click="close"></i>
        </template>
         <template v-slot:content>
            <div class="grid grid-cols-2  gap-1 auto-rows-max         p-1    overflow-auto">
                <template v-for="i in list" v-bind:key="i" >
                   <div v-if="filter.keywords=='' || i.name.search(filter.keywords)>-1" class="border h-20  text-center cursor-pointer hover:bg-gray-200 "  @click="add(i)">
                        <div class="flex  justify-center items-center h-full" draggable="true">
                            <div>{{i.name}}</div>
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
import ev from "../../utils/eventbus"
import SearchBox from '../../common/SearchBox.vue'
export default defineComponent({
    name:"ComponentView",
    data(){
        return {
            filter:{
                keywords:""
            },
                list:[
                {
                id:1,
                name:"文字",
                widget:"Text",
                },
                {
                id:2,
                name:"图片",
                widget:"Image",
                },
                {
                id:3,
                name:"视频",
                widget:"Video",
                },
                {
                id:4,
                name:"图表",
                widget:"Chart"
                },
                {
                id:5,
                name:"地图",
                widget:"Map"
                },
                 {
                id:6,
                name:"表格",
                widget:"Table"
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
        change(v){
            console.log("变更下")
        },  
        add(i:any){
            console.log("增加")
           ev.fire("ComponentView","addComponent",i)
        }
    },
    setup() {
    },
})
</script>

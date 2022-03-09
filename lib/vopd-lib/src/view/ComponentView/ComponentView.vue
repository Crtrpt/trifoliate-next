<template>
    <BaseView>
         <template v-slot:lead>
                    <SearchBox class="flex-grow" v-model="filter.keywords" @input="change" placeholder="搜索你需要的组件"></SearchBox>
        </template>
        <template v-slot:action>
                    <i class="las la-plus-circle"></i>
                    <i class="las la-window-maximize"></i>
                    <i class="las la-ellipsis-v"></i>
        </template>
         <template v-slot:content>
            <div class="grid grid-cols-2  gap-1 auto-rows-max         p-1    overflow-auto">
                <div v-for="i in list" v-bind:key="i" class="border h-20  text-center cursor-pointer hover:bg-gray-200 " @click="add(i)">
                    <div class="flex  justify-center items-center h-full">
                        <div>{{i.name}}</div>
                    </div>
                </div>
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
                keywords:"111"
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
            ]
        }
    },
    components:{
    BaseView,
    SearchBox
},
    methods:{
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

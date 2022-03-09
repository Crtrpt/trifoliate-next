<template>
     <BaseView>
         <template v-slot:lead>
                   <SearchBox class="flex-grow" v-model="filter.keywords"></SearchBox>
        </template>
        <template v-slot:action>
                    <i class="las la-check"  v-if="!isMultipleSelect" @click="changeSelectMode"></i>
                    <i class="las la-check-double"  v-if="isMultipleSelect" @click="changeSelectMode"></i>
                    <i class="las la-plus-circle"></i>
        </template>
         <template v-slot:content>
             <div class="flex flex-col">
                <div class="flex-grow p-1 overflow-auto">
                    <Tree v-for="i in source.list" :key="i" :data="i" :level="1"></Tree>
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
export default {
    components:{ Tree, BaseView, SearchBox },
    data(){
        return {
            lastSelect:null,
            selectList:[],
            isMultipleSelect:true,
            filter:{
                    keywords:""
            },
            source:{
               
                list:{}
            }
        };
    },
    methods:{
        changeSelectMode(){
                this.isMultipleSelect=!this.isMultipleSelect
        },
        render(payload:any){
            console.log(payload);
            this.source=payload;
        }
    },
    mounted(){
        ev.on("TreeView","init",this.render)
    }
}
</script>
<template>
    <BaseView>
         <template v-slot:lead>
                    <SearchBox class="flex-grow" v-model="filter.keywords" @input="change" placeholder="搜索你需要的组件"></SearchBox>
        </template>
        <template v-slot:action>
                    <!-- <i class="las la-thumbtack" @click="pin"></i> -->
                    <i class="las la-times-circle cursor-pointer" @click="close"></i>
        </template>
         <template v-slot:content>
     
            <div   class="grid grid-cols-2  gap-1 auto-rows-max         p-1    overflow-auto" >
                <template v-for="i in list" v-bind:key="i" >
                   <div v-if="filter.keywords=='' || i.name.search(filter.keywords)>-1" class="border h-20  text-center cursor-pointer hover:bg-gray-200 "  @click="add(i)">
                        <div class="flex  justify-center items-center h-full" draggable="true" @dragstart="dragstart($event,i)">
                             <i :class="i.icon" class="px-1"></i>
                            <div>{{i.name}}</div>
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </BaseView>
</template>


<style scoped>


</style>
<script lang="ts">
import { defineComponent } from 'vue'

import BaseView from "../BaseView.vue"
import ev from "../../utils/Eventbus"
import SearchBox from '../../common/SearchBox.vue'



export default defineComponent({
    name:"ComponentView",
    data(){
        return {
            filter:{
                keywords:""
            },
            list:[]
        }
    },
    components:{
    BaseView,
    SearchBox
},
    methods:{
        dragstart(e,i){
             e.dataTransfer.setData("Text", i.id);
        },
        pin(v){
            this.$emit("pin")
        },
        close(v){
            this.$emit("close")
        },
        change(v){
            console.log("变更下")
        },  
        add(i:any){
           ev.fire("ComponentView","addComponent",i)
        },
        render(p,ctx){
            console.log("渲染");
            this.list=ctx.nodeList;
        }
    },
    mounted(){
     
        // const nanopop = reposition(this.$refs.view, this.$refs.tooltip)
        
       
        console.log("初始化容器部件")
        ev.on("ComponentView","init",this.render)
    },
    setup() {
    },
})
</script>

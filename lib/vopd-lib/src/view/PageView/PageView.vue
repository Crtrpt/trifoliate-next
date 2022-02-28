<template>
    <BaseView>
         <template v-slot:lead>
                    <i class="las la-search"></i>
        </template>
        <template v-slot:action>
                    <i class="las la-plus-circle"></i>
                    <i class="las la-window-maximize"></i>
                    <i class="las la-ellipsis-v"></i>
        </template>
         <template v-slot:content>
            <div class="grid  gap-1 auto-rows-max         p-1    overflow-auto">
                <div v-for="i in list" v-bind:key="i" class="border h-10  text-center cursor-pointer">
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

export default defineComponent({
    name:"ComponentView",
    data(){
        return {
                list:[
                {
                id:1,
                name:"第一页",
                widget:"Text",
                },
                {
                id:2,
                name:"第一页",
                widget:"Image",
                },
            ]
        }
    },
    components:{
        BaseView
    },
    setup() {
    },
})
</script>

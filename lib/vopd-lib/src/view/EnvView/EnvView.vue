<template>
    <BaseView>
         <template v-slot:lead>
                    <i class="las la-search"></i>
        </template>
        <template v-slot:action>
                    <i class="las la-plus-circle"></i>
        </template>
         <template v-slot:content>
             <div class="flex" v-for="i in list" v-bind:key="i.name">
                 <div class="p-1 w-1/2">
                     <input  class="border inline-block  w-full" v-model="i.name"/>
                 </div>
                 <div class="p-1 w-1/2">
                    <input  class="border inline-block   w-full" v-model="i.value"/>
                 </div>
             </div>
           
        </template>
    </BaseView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseView from "../BaseView.vue"

export default defineComponent({
    name:"EnvView",
    data(){
        return {
            list:[
                {
                    name:"xxx",
                    value:"xxx"
                },
                {
                    name:"333",
                    value:"xxx"
                },
                {
                    name:"444",
                    value:"xxx"
                },
                {
                    name:"222",
                    value:"xxx"
                },
                {
                    name:"111",
                    value:"xxx"
                },
                {
                    name:"xxx",
                    value:"xxx"
                }
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

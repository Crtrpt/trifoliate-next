<template>
     <div class="flex items-center justify-center border rounded-full bg-gray-200 shadow">
                  <i class=" item las la-search-plus leading-2 px-1 " @click="add"></i>
                  <input class=" inline text-xs w-10 bg-inherit" v-model="v" type="number" @change="change" min="0" />%
                  <i class="item las la-search-minus leading-2 px-1 " @click="sub"></i>
                </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:[
        "value"
    ],
    data(){
        return {
            v:100
        }
    },
    methods:{
        change(){
             this.$emit("update:modelValue",this.v/100);
        },
        add(){
            this.v=this.v+1;
            this.change();
        },
        sub(){
            this.v=this.v-1;
            this.change();
        }
    },
    
    setup() {
        
    },
})
</script>

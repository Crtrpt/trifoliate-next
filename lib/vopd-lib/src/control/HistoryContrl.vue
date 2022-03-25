<template>
    <div class="flex items-center justify-center    ">
       <i class="las la-undo bg-gray-200 shadow cursor-pointer hover:bg-blue-500  hover:text-white py-1 px-2  rounded-l-full" @click="undo()" v-tooltip="'撤销'"></i>
       <i class="las la-redo bg-gray-200 shadow cursor-pointer hover:bg-blue-500  hover:text-white py-1 px-2  rounded-r-full" @click="redo()" v-tooltip="'重做'"></i>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import keyboardJS from "keyboardjs";

export default defineComponent({
    mounted(){
        keyboardJS.bind("ctrl > z",(e)=>{this.undo()});
        keyboardJS.bind("ctrl > y",(e)=>{this.redo()});
        keyboardJS.watch();
    },
    props: {
        
    },
    data() {
        return {
           
        };
    },
    methods: {
        undo(){
            this.$store.dispatch("page/undo",{})
        },
        redo(){
            this.$store.dispatch("page/redo",{})
        }
    },
    components: {  }
})
</script>

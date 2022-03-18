<template>
    <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow">
       <i class="las la-undo cursor-pointer" @click="undo()" v-tooltip="'撤销'"></i>
       <i class="las la-redo cursor-pointer" @click="redo()" v-tooltip="'重做'"></i>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import ev from "../utils/Eventbus"
import {command} from "../utils/Commander";
import keyboardJS from "keyboardjs";

export default defineComponent({
    mounted(){
        keyboardJS.bind("ctrl > z",(e)=>{command.undo()});
        keyboardJS.bind("ctrl > y",(e)=>{command.redo()});
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
            command.undo()
        },
        redo(){
            command.redo()
        }
    },
    components: {  }
})
</script>

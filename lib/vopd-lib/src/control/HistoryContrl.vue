<template>
    <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow">
       <i class="las la-undo cursor-pointer"></i>
       <i class="las la-redo cursor-pointer"></i>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import ev from "../utils/eventbus"


export default defineComponent({
    props: {
        
    },
    data() {
        return {
           
        };
    },
    methods: {
        change() {
            console.log("change");
           
        }
    },
    components: {  }
})
</script>

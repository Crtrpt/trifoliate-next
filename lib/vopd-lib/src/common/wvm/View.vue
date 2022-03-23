<template>
    <div style="height:100%;width:100%">{{data.content}}
        <div class="" style="width:300px">300px</div>
        <div class="px-2 border inline-block" @click="close">close</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        data:Object
    },
    destroyed(){
        console.log("销毁")
    },
    created(){
        console.log("创建")
    },
    methods:{
        close(){
            this.$emit("close");
        }
    },
    setup() {
        
    },
})
</script>

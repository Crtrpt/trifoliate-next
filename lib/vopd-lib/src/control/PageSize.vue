<template>
    <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow">
                <input class=" inline text-xs w-12 text-center bg-inherit" v-model="width" @change="change" />
                <p class="text-xs">/</p>
                <input class=" inline text-xs w-12 text-center bg-inherit" v-model="height" @change="change" />
              </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        page:Object
    },
    data(){
        return {
            width:"1024",
            height:"960"
        }
    },
    mounted(){
       
    },
    methods:{
        change(){
            var p=this.$props.page;
            p.width=this.width+"px";
            p.height=this.height+"px";
            this.$emit("update:modelValue",p);
        }
    },
    setup() {
        
    },
})
</script>

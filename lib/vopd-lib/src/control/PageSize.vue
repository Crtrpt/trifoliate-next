<template>
    <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow">
      
                <input class=" inline text-xs w-12 text-center bg-inherit" v-model="w" @change="change" type="num" />
                <p class="text-xs">/</p>
                <input class=" inline text-xs w-12 text-center bg-inherit" v-model="h" @change="change" type="num" />
              </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        width:String,
        height:String
    },
    data(){
        return {
            w:"",
            h:"",
        }
    },
    watch:{
       
    },
    created(){
        console.log(this.width);
        this.w=this.width;
        this.h=this.height;
    },
    methods:{
        change(){
            var p={w:this.w,h:this.h}
            console.log(p);
            this.$emit("input",p);
        }
    },
    setup() {
        
    },
})
</script>

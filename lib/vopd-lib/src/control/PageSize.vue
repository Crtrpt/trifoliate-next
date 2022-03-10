<template>
    <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow items-center">
                <i class="las la-desktop"></i>
                <!-- <input  v-model="w" @change="change" type="num" /> -->
                <p class=" inline text-xs w-12 text-center bg-inherit"> {{w}}</p>
                <p class="text-xs">*</p>
                 <p class=" inline text-xs w-12 text-center bg-inherit"> {{h}}</p>
                <!-- <input class=" inline text-xs w-12 text-center bg-inherit" v-model="h" @change="change" type="num" /> -->
              </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        ctx:Object
    },
    data(){
        return {
            w:this.ctx.width||"1024px",
            h:this.ctx.height||"960px",
        }
    },
    watch:{
        "ctx":{
            deep:true,
            handler(n){
                this.w=n.width;
                this.h=n.height;
            }
        }
    },
    mounted(){

    },
    methods:{
        change(){
            var p={w:this.w,h:this.h}
            console.log(p);
            // this.$emit("input",p);
        }
    },
    setup() {
        
    },
})
</script>

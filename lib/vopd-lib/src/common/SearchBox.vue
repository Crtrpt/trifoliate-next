<template>
    <div class="border rounded-full">
                        <i class="las la-search px-1"></i>
                        <input class=" outline-none" v-model="v" @change="change" v-bind="$attrs">
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props:{
        value:String
    },
    data(){
        return {
            v:""
        }
    },
    methods:{
        change(){
            console.log(this.v);
            this.$emit("update:modelValue",this.v);
        }
    },
    mounted(){
        console.log(this.$attrs.modeValue);
       this.v=this.$attrs.modeValue
    }
})
</script>
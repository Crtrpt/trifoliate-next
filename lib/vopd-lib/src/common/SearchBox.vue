<template>
    <div class="border rounded-full">
                        <i class="las la-search px-1"></i>
                        <input class=" outline-none" v-model="v"  v-bind="$attrs">
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props:{
        modelValue:String
    },
    data(){
        return {
            v:this.modelValue
        }
    },
    methods:{
        change(){
            this.$emit("update:modelValue",this.v);
        }
    },
})
</script>
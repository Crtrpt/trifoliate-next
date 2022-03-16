<template>
    <div>
        <div v-for="d in  modelValue" :key="d"> {{d}}</div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props:{
        modelValue:Array
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
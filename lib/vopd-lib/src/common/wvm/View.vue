<template>
    <component :is="data.componemt" style="height:100%;width:100%"  ></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        data:Object
    },
    setup() {
        
    },
})
</script>

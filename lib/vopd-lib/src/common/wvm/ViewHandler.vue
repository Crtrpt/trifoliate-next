<template>
    <div class="  text-center">
        <i :class="data.icon" class="text-3xl" ></i>
        <p class=" text-xs">{{data.name}}</p>
    </div>
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

<template>
    <component v-bind:is="name"></component>
</template>

<script>
import BaseLayer from "./BaseLayer.vue"
export default {
    components:{BaseLayer},
    props:{
        name:String
    },
    setup() {
        
    },
}
</script>
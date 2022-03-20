<template>
    <component v-bind:is="name" v-bind="$attrs" :ctx="ctx"></component>
</template>

<script lang="ts">

import BaseLayer from "../layers/BaseLayer.vue";;
import HandlerLayer from "../layers/HandlerLayer.vue"
import GridLayer from "../layers/GridLayer.vue"
export default {
    components:{BaseLayer,HandlerLayer,GridLayer},
    props:{
        ctx:Object,
        name:String
    },
    setup() {
       
    },
}
</script>
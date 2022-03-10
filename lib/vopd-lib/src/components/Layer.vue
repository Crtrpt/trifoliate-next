<template>
    <component v-bind:is="name" v-bind="$attrs" :ctx="ctx"></component>
</template>

<script lang="ts">

import BaseLayer from "../layers/BaseLayer/BaseLayer.vue";
import MouseLayer from "../layers/MouseLayer.vue";
import SelectLayer from "../layers/SelectLayer.vue";
import HandlerLayer from "../layers/HandlerLayer.vue"
import HoverLayer from "../layers/HoverLayer.vue"
import GridLayer from "../layers/GridLayer.vue"
export default {
    components:{BaseLayer,MouseLayer,SelectLayer,HandlerLayer,HoverLayer,GridLayer},
    props:{
        ctx:Object,
        name:String
    },
    setup() {
       
    },
}
</script>
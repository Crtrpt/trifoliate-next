<template>
    <component v-bind:is="name"></component>
</template>

<script lang="ts">

import BaseLayer from "../layers/BaseLayer/BaseLayer.vue";
import MouseLayer from "../layers/MouseLayer.vue";
import SelectLayer from "../layers/SelectLayer.vue";
import HandlerLayer from "../layers/HandlerLayer.vue"
import HoverLayer from "../layers/HoverLayer.vue"
export default {
    components:{BaseLayer,MouseLayer,SelectLayer,HandlerLayer,HoverLayer},
    props:{
        name:String
    },
    setup() {
       
    },
}
</script>
<template>
    <component v-bind:is="name"></component>
</template>

<script>

import BaseLayer from "../layers/BaseLayer.vue";
import MouseLayer from "../layers/MouseLayer.vue";
import SelectLayer from "../layers/SelectLayer.vue";
import HandlerLayer from "../layers/HandlerLayer.vue"
export default {
    components:{BaseLayer,MouseLayer,SelectLayer,HandlerLayer},
    props:{
        name:String
    },
    setup() {
       
    },
}
</script>
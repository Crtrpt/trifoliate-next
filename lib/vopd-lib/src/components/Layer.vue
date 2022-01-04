<template>
    <component v-bind:is="name"></component>
</template>

<script>

import BaseLayer from "../layers/BaseLayer.vue";
import MouseLayer from "../layers/MouseLayer.vue";
export default {
    components:{BaseLayer,MouseLayer},
    props:{
        name:String
    },
    setup() {
       
    },
}
</script>
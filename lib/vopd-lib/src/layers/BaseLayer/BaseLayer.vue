<template>
    <div class="BaseLayer" :style=style>
        <component v-bind:is="n.render"  v-for="n in this.source.list" :key="n+'xx'"  :data="n" />
    </div>
</template>
<script lang="ts">
import "./BaseLayer.scss";
import ev from "../../utils/eventbus";

import ContainerRender from "../../render/ContainerRender.vue";
import TextRender from "../../render/TextRender.vue"
import EchartRender from "../../render/EchartRender.vue"

export default {
    components:{ContainerRender,TextRender,EchartRender},
    name:"BaseLayer",
    data(){
        return {
            source:{},
            style:{
                pointerEvents:"none",
                userSelect:"none"
            }
        };
    },
    methods:{
        render(payload){
            this.source=payload;
        }
    },
    mounted(){
        console.log("加载完成");
        ev.on("BaseLayer","init",this.render);
        
    },
    setup() {
        
    },
}
</script>
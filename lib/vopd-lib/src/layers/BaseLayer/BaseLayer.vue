<template>
    <div class="BaseLayer" :style=style>
        <component v-bind:is="n.render"  v-for="n in this.source.list" :key="n"  :data="n" />
    </div>
</template>
<script>
import "./BaseLayer.scss";
import ev from "../../utils/eventbus";
import ContainerRender from "../../render/ContainerRender.vue";
import TextRender from "../../render/TextRender.vue"
export default {
    components:{ContainerRender,TextRender},
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
        
        ev.on("BaseLayer","init",this.render)
    },
    setup() {
        
    },
}
</script>
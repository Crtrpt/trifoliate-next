<template>
    <div class="BaseLayer">
        <Container v-for="n in this.source.list" :key="n"  :data="n" >
            {{n.name}}
        </Container>
    </div>
</template>
<script>
import "./BaseLayer.scss";
import ev from "../../utils/eventbus"
import Container from "./Container.vue"
export default {
    components:{Container},
    name:"BaseLayer",
    data(){
        return {
            source:{}
        };
    },
    methods:{
        render(payload){
            console.log(payload);
            this.source=payload;
        }
    },
    mounted(){
        console.log("加载完成");
        ev.on("BaseLayer","init",this.render)
    },
    setup() {
        
    },
}
</script>
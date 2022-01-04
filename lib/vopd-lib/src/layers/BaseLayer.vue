<template>
    <div class="BaseLayer">
        <div v-for="n in this.source.list" :key="n" :style=n.style >
            {{n.name}}
        </div>
    </div>
</template>
<script>
import "./BaseLayer.scss";
import ev from "../utils/ev"
export default {
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
<template>
    <div>
        <div class="p-1 border-b">属性视图: {{source.widget}}</div>
        <div class="p-1">
            <component v-bind:is="source.widget" v-if="source?.widget!=null" :data="source"></component>
        </div>
    </div>
</template>

<script>
import Text from "../../widget/Text.vue";
import Image from "../../widget/Image.vue";
import Video from "../../widget/Video.vue";
import Chart from "../../widget/Chart.vue";
import Container from "../../widget/Container.vue";

import ev from "../../utils/eventbus"
export default {
    name:"AttrView",
    data(){
        return {
            source:{
                widget:null
            }
        }
    },
    components:{
        Text,Image,Video,Chart,Container
    },
    methods:{
       selectContainer(p){
        //    console.log("选择容器")
           this.source=p;
       }
    },
    mounted(){
        ev.on("AttrView","selectContainer",this.selectContainer)
    },
}
</script>

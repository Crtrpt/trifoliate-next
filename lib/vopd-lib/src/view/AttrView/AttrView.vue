<template>
     <BaseView>
            <template v-slot:lead>
                   <SearchBox class="flex-grow" v-model="filter.keywords"></SearchBox>
            </template>
            <template v-slot:action>
                    <i class="las la-times-circle cursor-pointer" @click="$emit('close')"></i>
            </template>
            <template v-slot:content>
                    <component v-bind:is="source.widget" v-if="source?.widget!=null" :data="source" @change="change"></component>
            </template>
    </BaseView>
</template>

<script lang="ts">
import Text from "../../widget/Text.vue";
import Video from "../../widget/Video.vue";
import Echart from "../../widget/Echart.vue";
import Container from "../../widget/Container.vue";

import ev from "../../utils/Eventbus"
import BaseView from "../BaseView.vue";
import SearchBox from "../../common/SearchBox.vue";
export default {
    name:"AttrView",
    data(){
        return {
            filter:{
                keywords:""
            },
            source:{
                widget:null
            }
        }
    },
    components:{
    Text,
    Image,
    Video,
    Echart,
    Container,
    BaseView,
    SearchBox
},
    methods:{
       selectContainer(p,ctx){
            console.log("选择容器")
           this.source=p.data;
       },
       change(p){
           console.log("回写属性变化")
           ev.fire("AttrView","changeStyle",p);
           ev.fire("AttrView","change",this.source);
       }
    },
    mounted(){
        ev.on("AttrView","selectContainer",this.selectContainer)
    },
}
</script>

<template>
    <div :style="data.style" @click="click($event)" ref="node">
        {{data.content}}
    </div>
</template>

<script lang="ts">
import ev from "../utils/Eventbus"
export default {
    props:{
        data:Object
    },
    methods:{
        click(e){
            ev.fire("Container","selectContainer",{e:this.$refs.node,data:this.data})
            e.stopPropagation();
        }
    },
    name:"TextRender",
     mounted(){

   
         ev.ctx.hashIds.get(this.data.id).ref["layer"]=this.$refs.node;
    } 
}
</script>
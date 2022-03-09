<template>
    <div :style="data.style" @click="click($event)">
        {{data.content}}
    </div>
</template>

<script lang="ts">
import ev from "../utils/eventbus"
export default {
    props:{
        data:Object
    },
    methods:{
        click(e:any){
            e.stopPropagation();
            ev.fire("Container","selectContainer",this.data)
        }
    },
    name:"TextRender"
}
</script>
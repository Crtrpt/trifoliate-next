<template>
    <div :style="data.style" @click="click($event)">
        {{data.content}}
    </div>
</template>

<script>
import ev from "../utils/eventbus"
export default {
    props:{
        data:Object
    },
    methods:{
        click(e){
            e.stopPropagation();
            ev.fire("Container","selectContainer",this.data)
        }
    },
    name:"TextRender"
}
</script>
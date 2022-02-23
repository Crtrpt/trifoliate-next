<template>
    <div class="node cursor-pointer" @click="click($event)">
        <div class="name">
            {{data.name}}
        </div>
        <div class="children" :style="{marginLeft:20*level+'px'}" v-if="data?.children?.length>0">
            <Tree v-for="n in data.children" :key="n.id" :data="n" :level="level+1"></Tree>
        </div>
    </div>
</template>

<script>
import ev from "../../utils/eventbus"
export default {
    props:{
        data:Object,
        level:Number
    },
    methods:{
        click(e){
            e.stopPropagation();
            ev.fire("TreeView","selectContainer",this.data)
        }
    },
    name:"Tree"
}
</script>


<template>
    <div class="node">
        <div class="name">
            {{data.name}}
        </div>
        <div class="children" :style="{marginLeft:20*level+'px'}" v-if="data?.children?.length>0">
            <Tree v-for="n in data.children" :key="n.id" :data="n" :level="level+1"></Tree>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:Object,
        level:Number
    },
    name:"Tree"
}
</script>


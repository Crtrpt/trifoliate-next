<template>
    <div :style="data.style" @click="click($event)">
        <template v-if="data?.children?.length>0" >
            <!-- <Container v-for="n in data.children" :key="n.id" :data=n></Container> -->
            <component v-bind:is="n.render"  v-for="n in data.children" :key="n"  :data="n"  />
        </template>
    </div>
</template>

<script lang="ts">
import ev from "../utils/eventbus"

export default {
    components:{},
    props:{
        data:Object
    },
    methods:{
        click(e){
            e.stopPropagation();
            ev.fire("Container","selectContainer",this.data)
        }
    },
    name:"ContainerRender"
}
</script>
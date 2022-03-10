<template>
    <div :style="data.style" @click="click($event)">
        <template v-if="data?.children?.length>0" >
            <template  v-for="n in data.children" :key="n" >
                    <!-- 增加判断是否被删除 -->
                <component v-bind:is="n.render" v-if="!n.attr['isDelete'] && !n.attr['isEye']"  :data="n"   />
            </template>
            
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
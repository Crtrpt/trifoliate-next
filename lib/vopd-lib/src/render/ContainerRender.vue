<template>
    <div :style="data.style" @click="click($event)" ref="node">
        <template v-if="data?.children?.length>0" >
            <template  v-for="n in data.children" :key="n" >
                    <!-- 增加判断是否被删除 -->
                <component v-bind:is="n.render" v-if="!n.attr['isDelete'] && !n.attr['isEye']"  :data="n"    />
            </template>
            
        </template>
    </div>
</template>

<script lang="ts">
import ev from "../utils/eventbus"

export default {
    name:"ContainerRender",
    components:{},
    props:{
        data:Object
    },
    methods:{
        click(e){
            ev.fire("Container","selectContainer",{e:this.$refs.node,data:this.data})
            e.stopPropagation();
        }
    },
    mounted(){
         ev.ctx.hashIds.get(this.data.id).ref["layer"]=this.$refs.node;
    } 
}
</script>
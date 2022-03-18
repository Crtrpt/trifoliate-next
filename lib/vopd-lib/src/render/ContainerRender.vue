<template>
    <div :style="data.style" @click="click($event)" ref="node"
        class=" transition-all w-full h-full"
        :class=' {
            "border-green-500":isDragenter,
            "border-2":isDragenter,
            "border-dashed":isDragenter
        }'
     @dragenter="dragenter($event)"
     @drop="drop($event)"
     @dragleave="dragleave($event)"
     >
        <div class="relative w-full h-full select-none text-gray-400 p-2 border-2 border-dashed border-gray-400 text-center" v-if="data?.children?.length==0">
            这里可以放置一些组件
        </div>
        <template v-if="data?.children?.length>0" >
            <template  v-for="n in data.children" :key="n" >
                    <!-- 增加判断是否被删除 -->
                <component v-bind:is="n?.render" v-if="!n?.attr['isDelete'] && !n?.attr['isEye']"  :data="n"    />
            </template>
            
        </template>
    </div>
</template>

<script lang="ts">
import ev from "../utils/Eventbus"

export default {
    name:"ContainerRender",
    components:{},
    props:{
        data:Object,
    },
    data(){
       return {
            isDragenter:false,
       }
    },
    methods:{
        drop(e){
            console.log("放下"+e.dataTransfer.getData("text/plain"));
            ev.fire("Container","addNode",{
                id:this.data.id,
                nodeId:e.dataTransfer.getData("text/plain")
            });
            this.isDragenter=false;
            e.stopPropagation();
        },
        dragenter(e){
             console.log("进入")
            this.isDragenter=true;
             e.stopPropagation();
        },
        dragleave(e){
            console.log("离开")
            this.isDragenter=false;
            e.stopPropagation();
        },
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
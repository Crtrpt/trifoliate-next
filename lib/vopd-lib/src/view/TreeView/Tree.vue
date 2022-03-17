<template>
    <div class="node cursor-pointer border   hover:border hover:border-gray-200  "
        @drop="drop($event)"
        @dragover="allowDrop($event)"
        @dragenter="dragenter($event)"
        @dragleave="dragleave($event)"

    :class='{
        "border-green-500":isDragenter,
        "border-2":isDragenter,
        "border-dashed":isDragenter,
        "border-blue-400":data.attr["isSelect"],
        "text-blue-400":data.attr["isSelect"],
        "border-white":!data.attr["isSelect"],
    }'
    @mouseenter="enter()"
     >
        <div class="name flex flex-row items-center px-2" @mouseover="hover" @mouseout="hover1">
            <i class="las la-caret-right"  @click="expand(data,$event)" v-if="!data.attr['isExpand'] && data.children?.length>0 "></i>
            <i class="las la-caret-down"  @click="expand(data,$event)" v-if="data.attr['isExpand']  && data.children?.length>0 "></i>

             <i class="w-4"   v-if=" data.children?.length==0 "></i>
            <p class="flex-grow flex items-center" @click="click(data,$event)" > 
                <div>{{data.name}} </div>
                <div class=" ml-2 text-xs px-1  rounded-full text-white bg-gray-300 " 
                :class="{
                    ' bg-blue-500':data.attr['isSelect']
                }" > {{data.id}} </div>
            </p>
            <div class="action" >
                    <i class="las la-eye"
                        :class='{
                        "la-eye":!data.attr["isEye"],
                        "la-eye-slash":data.attr["isEye"]
                    }'
                     @click="eye(data,$event)"></i>
                    <i class="las la-trash" @click="trash(data,$event)"></i>
                    <i class="las " :class='{
                        "la-lock":data.attr["isLock"],
                        "la-unlock":!data.attr["isLock"]
                    }' @click="lock(data,$event)"></i>
            </div>
        </div>
        <div class="children" :style="{marginLeft:10*level+'px'}" v-if=" data.attr['isExpand']  && data.children?.length>0">
            <template v-for="n in data.children" :key="n.id+'tree'">
                <Tree  :data="n" :level="level+1" v-if="!n.attr['isDelete']"></Tree>
            </template>
            
        </div>
    </div>
</template>

<script lang="ts">
import { handleError } from '@vue/runtime-core';
import ev from "../../utils/Eventbus"
export default {
    props:{
        data:Object,
        level:Number,
        isMultipleSelect:Boolean,
    },
    data:function(){
        return {
            isDragenter:false
        }
    },
    methods:{
        
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
        drop(e){
            console.log("tree 放下"+e.dataTransfer.getData("text/plain"));
            ev.fire("Container","addNode",{
                id:this.data.id,
                nodeId:e.dataTransfer.getData("text/plain")
            });
            this.isDragenter=false;
            e.stopPropagation();
        },
        allowDrop(e){
            e.preventDefault();
        },
        enter(){
             ev.fire("TreeView","hoverContainer",this.data);
        },
        eye(node,e:any){
            ev.fire("TreeView","eyeContainer",node)
            ev.fire("none","change",node)
             e.stopPropagation();
        },
        trash(node,e:any){
            ev.fire("TreeView","deleteContainer",node)
            ev.fire("none","change",node)
            e.stopPropagation();
        },
        lock(node,e:any){
            ev.fire("TreeView","lockContainer",node)
            ev.fire("none","change",node)
            e.stopPropagation();
        },
        click(node,e:any){
            ev.fire("TreeView","selectContainer",{data:this.data})
            // ev.fire("none","change",node)
            e.stopPropagation();
        },
        expand(node,e){
            ev.fire("TreeView","expandContainer",node)
            e.stopPropagation();
        }
    },
    name:"Tree"
}
</script>


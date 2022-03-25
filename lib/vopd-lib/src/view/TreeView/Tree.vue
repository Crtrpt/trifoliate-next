<template>
    <div class="node cursor-pointer border   hover:border hover:border-gray-200  "
        @drop="drop($event)"
        @dragover="allowDrop($event)"
        @dragenter="dragenter($event)"
        @dragleave="dragleave($event)"

    :class='{
        "border-green-500":data.attr["isDragenter"],
        "border-2":data.attr["isDragenter"],
        "border-dashed":data.attr["isDragenter"],
        "border-blue-400 text-blue-400":data.attr["isSelect"],
        "border-white":!data.attr["isSelect"],
    }'
    @mouseenter="mouseenter()"
     >
        <div class="name flex flex-row items-center px-2" @mouseover="hover" @mouseout="hover1">
            <i class="las la-caret-right"  @click="expand(data,$event)" v-if="!data.attr['isExpand'] && data.children?.length>0 "></i>
            <i class="las la-caret-down"  @click="expand(data,$event)" v-if="data.attr['isExpand']  && data.children?.length>0 "></i>

             <i class="w-4"   v-if=" data.children?.length==0 "></i>
            <p class="flex-grow flex items-center text-sm" @click="click(data,$event)" > 
                <div @dblclick="edit" v-if="!isEdit">{{data.name}} </div>
                <div v-if="isEdit" class="border-blue-500 border px-1">
                    <input class=" outline-none"  v-on:keyup.enter="enter"  v-model="data.name" type="text"/> </div>
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

import ev from "../../utils/Eventbus"
import { mapActions } from "vuex"


export default {
    props:{
        data:Object,
        level:Number,
        isMultipleSelect:Boolean,
    },
    data:function(){
        return {
            isEdit:false
        }
    },
    methods:{
        mouseenter(){

        },
        enter(){
            console.log("修改x")
            this.isEdit=false
        },
        edit(){
            console.log("进入编辑状态")
            this.isEdit=true
        },
        dragenter(e){
            console.log("进入")
            this.$store.dispatch("page/setAttr",{id:this.data.id,attr:"isDragenter",val:true})
            e.stopPropagation();
        },
        dragleave(e){
             console.log("离开")
           this.$store.dispatch("page/setAttr",{id:this.data.id,attr:"isDragenter",val:false})
            e.stopPropagation();
        },
        drop(e){
            var t=JSON.parse(e.dataTransfer.getData("text/plain"));
            this.$store.dispatch("page/addNode",{id:this.data.id,nodeId:t.id})
            e.stopPropagation();
        },
        allowDrop(e){
            e.preventDefault();
        },
        eye(node,e:any){
            this.$store.dispatch("page/setAttr",{id:this.data.id,attr:"isEye",})
            e.stopPropagation();
        },
        trash(node,e:any){
            this.$store.dispatch("page/setAttr",{id:this.data.id,attr:"isDelete"})
            e.stopPropagation();
        },
        lock(node,e:any){
            this.$store.dispatch("page/setAttr",{id:this.data.id,attr:"isLock"})
            e.stopPropagation();
        },
        click(node,e:any){
            this.$store.dispatch("page/setAttr",{id:this.data.id,attr:"isSelect",val:!this.data.attr['isSelect']})
            e.stopPropagation();
        },
        expand(node,e){
            this.$store.dispatch("page/setAttr",{id:this.data.id,attr:"isExpand"})
            e.stopPropagation();
        }
    },
    name:"Tree"
}
</script>


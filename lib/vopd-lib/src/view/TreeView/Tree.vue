<template>
    <div class="node cursor-pointer border   hover:border hover:border-gray-200  "
        @dragover="allowDrop($event)"
    :class='{
        "border-blue-400":data.attr["isSelect"],
        "text-blue-400":data.attr["isSelect"],
        "border-white":!data.attr["isSelect"],
    }'
    @mouseenter="enter()"
     >
        <div class="name flex flex-row items-center px-2" @mouseover="hover" @mouseout="hover1">
            <i class="las la-caret-right"  @click="expand" v-if="!isExpand && data?.children?.length>0"></i>
            <i class="las la-caret-down"  @click="expand" v-if="isExpand && data?.children?.length>0"></i>
            <p class="flex-grow flex items-center" @click="click(data,$event)" > 
                <div>{{data.name}} </div>
                <div class=" ml-2 text-xs px-1  rounded-full text-white bg-gray-300 " 
                :class="{
                    ' bg-blue-500':data.attr['isSelect']
                }" > {{data.id}}</div>
                 </p>
            <div class="action" v-if="isHover">
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
        <div class="children" :style="{marginLeft:20*level+'px'}" v-if=" isExpand && data?.children?.length>0">
            <template v-for="n in data.children" :key="n.id">
                <Tree  :data="n" :level="level+1" v-if="!n.attr['isDelete']"></Tree>
            </template>
            
        </div>
    </div>
</template>

<script lang="ts">
import ev from "../../utils/eventbus"
export default {
    props:{
        data:Object,
        level:Number,
        isMultipleSelect:Boolean,
    },
    data:function(){
        return {
            isHover:true,
            isExpand:true,
            isLock:false,
            isEye:true,
            isTrash:true,
            isDelete:false,
        }
    },
    methods:{
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
        expand(){
            this.isExpand=!this.isExpand;
        }
    },
    name:"Tree"
}
</script>


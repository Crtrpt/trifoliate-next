<template>
    <div class="node cursor-pointer border   hover:border hover:border-gray-200  "
    
    :class='{
        "border-blue-400":isSelect,
        "text-blue-400":isSelect,
        "border-white":!isSelect
    }'
    @mouseenter="enter()"
     @click="click($event)">
        <div class="name flex flex-row items-center px-2" @mouseover="hover" @mouseout="hover1">
            <i class="las la-caret-right"  @click="expand" v-if="!isExpand && data?.children?.length>0"></i>
            <i class="las la-caret-down"  @click="expand" v-if="isExpand && data?.children?.length>0"></i>
            <p class="flex-grow" @click="expand"> {{data.name}}</p>
            <div class="action" v-if="isHover">
                    <i class="las la-eye"
                        :class='{
                        "la-eye":isEye,
                        "la-eye-slash":!isEye
                    }'
                     @click="eye(data)"></i>
                    <i class="las la-trash" @click="trash(data)"></i>
                    <i class="las " :class='{
                        "la-lock":isLock,
                        "la-unlock":!isLock
                    }' @click="lock(data)"></i>
            </div>
        </div>
        <div class="children" :style="{marginLeft:20*level+'px'}" v-if=" isExpand && data?.children?.length>0">
            <Tree v-for="n in data.children" :key="n.id" :data="n" :level="level+1"></Tree>
        </div>
    </div>
</template>

<script lang="ts">
import ev from "../../utils/eventbus"
export default {
    props:{
        data:Object,
        level:Number
    },
    data:function(){
        return {
            isHover:true,
            isExpand:true,
            isLock:false,
            isEye:true,
            isTrash:true,
            isSelect:false,
        }
    },
    methods:{
        enter(){
             ev.fire("TreeView","hoverContainer",this.data);
        },
        hover(){
            // this.isHover=true;
        },
         hover1(){
            // this.isHover=false;
        },
        eye(){
            this.isEye=!this.isEye;
        },
        trash(){

        },
        lock(){
            this.isLock=!this.isLock;
        },
        click(e:any){
            this.isSelect=!this.isSelect;
            e.stopPropagation();
            ev.fire("TreeView","selectContainer",this.data)
        },
        expand(){
            this.isExpand=!this.isExpand;
        }
    },
    name:"Tree"
}
</script>


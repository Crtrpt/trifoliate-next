<template>
    <div class="node cursor-pointer" @click="click($event)">
        <div class="name flex flex-row items-center">
            <i class="las la-caret-right" v-if="!isExpand && data?.children?.length>0"></i>
            <i class="las la-caret-down" v-if="isExpand && data?.children?.length>0"></i>
            <p class="flex-grow" @click="expand"> {{data.name}}</p>
            <div class="action">
                    <i class="las la-eye"></i>
                    <i class="las la-trash"></i>
                    <i class="las la-lock"></i>
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
            isExpand:true
        }
    },
    methods:{
        click(e:any){
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


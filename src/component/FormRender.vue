<template>
    <div :style="data.style"
     >
        <div class="relative w-full h-full text-gray-400 p-2 border-2 border-dashed border-gray-400 text-center" v-if="data?.children?.length==0">
            这里可以放置表单组件
        </div>
        <template v-if="data?.children?.length>0" >
            <template  v-for="n in data.children" :key="n" >
                <component v-bind:is="n?.render" v-if="!n?.attr['isDelete'] && !n?.attr['isEye']"  :data="n"    />
            </template>
        </template>
    </div>
</template>

<script lang="ts">

export default {
    name:"FormRender",
    components:{},
    props:{
        data:Object,
    },
    data(){
    },
    methods:{
      
    },
    mounted(){
       
    } 
}
</script>
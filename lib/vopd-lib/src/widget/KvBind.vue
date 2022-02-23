<template>
        <i class="px-2 las la-link" @click="click"></i>
</template>

<style>

</style>
<script lang="ts">

export default {
    name:"KvBind",
    props:{
        meta:Object,
    },
    methods:{
        click(){
            alert("绑定数据")
        }
    },
    mounted(){
    },
    data(){
        return {
            ins:null
        }
    }
}
</script>
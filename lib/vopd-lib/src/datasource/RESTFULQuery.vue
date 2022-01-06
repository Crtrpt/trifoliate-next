<template>
    <div>
         <div class="py-1 border-y pl-1 scroll-auto">http 请求结果</div>
         <div  class="py-1" >{{data}}</div>
    </div>
</template>

<script>
export default {
    props:{
        data:Object
    }
}
</script>
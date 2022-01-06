<template>
    <div>
        <div class="py-1 border-y">数据库查询结果</div>

        <div class="py-1 border-y">
            {{data}}
        </div>
    </div>
</template>


<script>
export default {
    props:{
        data:Object
    }
}
</script>
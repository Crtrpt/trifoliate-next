<template>
    <div>
        <div class="pl-1">url:{{type.config.url}}</div>

        <div class="p-1">
            {{data.query}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:Object,
        type:Object
    }
}
</script>
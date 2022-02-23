<template>
    <div>
        <div class="pl-1 break-words flex flex-row">
            <div class="w-1/3">url:</div>
            <div class="w-2/3   whitespace-nowrap">{{type.config.url}}</div>
        </div>

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
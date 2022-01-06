<template>
    <div>
        <div  class="border-b pl-1">url:{{type.config.url}}</div>
        <div class="p-1">
            <div class="flex">
                 <div class="name w-1/3">method:</div>
                {{data.query.method}}</div>
            <div  class="flex">
                <div class="name w-1/3">headers:</div>
                <div v-for="h in data.query.header" :key="h" >
                        {{h.name}}:{{h.value}}
                </div>
            </div>
            <div  class="flex"><div class="name w-1/3">path:</div>{{data.query.path}}</div>
            <div  class="flex"><div class="name w-1/3">payload:</div>{{data.query.requestBody}}</div>
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
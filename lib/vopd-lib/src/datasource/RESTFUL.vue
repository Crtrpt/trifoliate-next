<template>
    <div class="overflow-auto">
         <div class="pl-1 break-words flex flex-row">
            <div class="w-1/3">url:</div>
            <div class="w-2/3   whitespace-nowrap">{{type.config.url}}</div>
        </div>
        <div class="p-1 ">
            <div class="flex">
                 <div class="name w-1/3">method:</div>
                {{data.query.method}}</div>
            <div  class="flex">
                <div class="name w-1/3">headers:</div>
                <div v-for="h in data.query.header" :key="h" class="w-1/3 whitespace-nowrap">
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
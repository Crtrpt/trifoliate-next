<template>
        <div class="cell flex my-1">
            <div class="w w-1/3">{{meta.displayName}}:</div>
            <input class="border flex-grow" v-model="meta.value" :placeholder="meta.placeholder"/>
        </div>
</template>


<script>
export default {
    name:"KvInt",
    props:{
        meta:Object,
    }
}
</script>
<template>
        <div class="cell flex my-1 items-center">
            <div class="w w-1/3">{{meta.displayName}}:</div>
            <input class="border flex-grow" v-model="meta.value" :placeholder="meta.placeholder"/>
            <kv-bind></kv-bind>
        </div>
</template>


<script lang="ts">
import KvBind from './KvBind.vue'
export default {
  components: { KvBind },
    name:"KvInt",
    props:{
        meta:Object,
    }
}
</script>
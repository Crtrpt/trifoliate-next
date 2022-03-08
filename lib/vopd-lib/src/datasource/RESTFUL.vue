<template>
    <div class="h-full overflow-hidden">

        <div class="overflow-auto h-1/2">
            <div class="pl-1 break-words flex flex-row">
                <div class="w-1/3">url:</div>
                <div class="w-2/3   whitespace-nowrap">{{type.config.url}}</div>
            </div>
            <div class="p-1 ">
                <div class="flex">
                    <div class="name w-1/3">method:</div>
                    <div>{{data.query.method}}</div>
                </div>
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
        <RESTFULQuery class="h-1/2" :data="res"></RESTFULQuery>
    </div>
</template>

<script lang="ts">
import RESTFULQuery from "./RESTFULQuery.vue";
export default {
    props: {
        data: Object,
        type: Object
    },
    data(){
        return {
            res:""
        }
    },
    methods: {
        exec() {
            fetch(this.api + "/query/" + this.type.id + "/" + this.data.id).then(res => res.text()).then((data) => {
                console.log("查询结果");
                console.log(data);
                this.res = data;
            });
        }
    },
    components: { RESTFULQuery }
}
</script>
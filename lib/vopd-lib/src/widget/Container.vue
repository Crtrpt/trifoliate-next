<template>
    <div v-for="i in attr" :key="i">
        <component v-bind:is="i.type"  :meta="i" v-model="i.value" />
    </div>
</template>

<script lang="ts">
import KvStr from './KvStr.vue'
import KvInt from './KvInt.vue'
import KvColor from './KvColor.vue'
export default {
    components: { KvStr,KvInt },
    name:"Container",
    props:{
        data:Object
    },
    watch:{
        "data":{
            deep:true,
            handler(n,o){
                this.attr.id.value=n.id;
                console.log("属性变化")
            }
        }
    },
    mounted(){
         this.attr.id.value=this.data.id;
    },
    data(){
        return  {
                   attr: {
                        id:{
                            name:"id",
                            displayName:"标识符",
                            type:"KvInt",
                            value: 0,
                            placeholder:"全局唯一",
                        }
                }
        }
    }
}
</script>
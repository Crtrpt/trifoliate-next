<template>
    <div v-for="i in attr" :key="i">
        <component v-bind:is="i.type"  :meta="i" v-model="i.value" />
    </div>
</template>

<script>
import KvStr from './KvStr.vue'
import KvInt from './KvInt.vue'
export default {
    components: { KvStr,KvInt },
    name:"Text",
    props:{
        data:Object
    },
    watch:{
        "data":{
            deep:true,
            handler(n,o){
                this.attr.id.value=n.id;
                this.attr.content.value=n.content;
            }
        }
    },
    mounted(){
         this.attr.id.value=this.data.id;
         this.attr.content.value=this.data.content;
    },
    data(){
        return  {
                   attr: {
                        id:{
                            name:"id",
                            displayName:"全局标识符",
                            type:"KvInt",
                            value: 0,
                            placeholder:"全局唯一",
                        },
                        content:{
                            name:"content",
                            displayName:"显示内容",
                            type:"KvStr",
                            value: "要显示的内容",
                            placeholder:"要显示的内容",
                        }
                }
        }
    }
}
</script>
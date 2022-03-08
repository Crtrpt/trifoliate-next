<template>
    <div v-for="i in attr" :key="i">
        <component v-bind:is="i.type"  :meta="i" v-model="i.value" />
    </div>
</template>

<script lang="ts">
import KvStr from './KvStr.vue'
import KvInt from './KvInt.vue'
import KvColor from './KvColor.vue'
import KvBox from './KvBox.vue'
import KvText from './KvText.vue'
export default {
    components: { KvStr,KvInt,KvColor,KvBox,KvText},
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
                            displayName:"标识符",
                            type:"KvInt",
                            value: 0,
                            placeholder:"全局唯一",
                        },
                        name:{
                            name:"name",
                            displayName:"名称",
                            type:"KvStr",
                            value: 0,
                            placeholder:"名称",
                        },
                        content:{
                            name:"content",
                            displayName:"显示内容",
                            type:"KvStr",
                            value: "要显示的内容",
                            placeholder:"要显示的内容",
                        },
                        color:{
                            name:"color",
                            displayName:"前景色",
                            type:"KvColor",
                            value: "要显示的内容",
                            placeholder:"要显示的内容",
                        },
                        backgroundColor:{
                            name:"background-color",
                            displayName:"背景色",
                            type:"KvColor",
                            value: "要显示的内容",
                            placeholder:"要显示的内容",
                        },
                        box:{
                            name:"box",
                            displayName:"内间距",
                            type:"KvBox",
                            value: "要显示的内容",
                            placeholder:"要显示的内容",
                        },
                        text:{
                            name:"text",
                            displayName:"文本",
                            type:"KvText",
                            value: "要显示的内容",
                            placeholder:"要显示的内容",
                        }
                }
        }
    }
}
</script>
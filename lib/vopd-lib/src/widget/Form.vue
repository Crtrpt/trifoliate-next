<template>
    <div v-for="i in attr" :key="i" > 
        <component v-bind:is="i.type"  :meta="i" v-model="i.value"  @update:modelValue="change"/>
    </div>
</template>

<script lang="ts">
import KvStr from './KvStr.vue'
import KvInt from './KvInt.vue'
import KvArray from './KvArray.vue'
export default {
    components: { KvStr,KvInt,KvArray },
    name:"Form",
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
    methods:{
        change(e){
            console.log("收集变化")
            var attr={};
            for(var a in this.attr){
                attr[a]=this.attr[a].value
            }
            this.$emit("change",attr);
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
                        },
                        display:{
                            name:"display",
                            displayName:"显示",
                            type:"KvStr",
                            value: "normal",
                            placeholder:"全局唯一",
                        },
                        postion:{
                            name:"postion",
                            displayName:"位置",
                            type:"KvStr",
                            value: "absolute",
                            placeholder:"postion",
                        },
                        padding:{
                            name:"padding",
                            displayName:"内边距",
                            type:"KvStr",
                            value: "0px",
                            placeholder:"内边距",
                        },
                        margin:{
                            name:"margin",
                            displayName:"外边距",
                            type:"KvStr",
                            value: "0px",
                            placeholder:"外边距",
                        },
                        border:{
                            name:"border",
                            displayName:"边框",
                            type:"KvStr",
                            value: "0px",
                            placeholder:"边框",
                        },
                        background:{
                            name:"background",
                            displayName:"背景",
                            type:"KvStr",
                            value: "",
                            placeholder:"背景",
                        },
                         width:{
                            name:"width",
                            displayName:"宽度",
                            type:"KvStr",
                            value: "",
                            placeholder:"宽度",
                        },
                         height:{
                            name:"height",
                            displayName:"高度",
                            type:"KvStr",
                            value: "",
                            placeholder:"高度",
                        }
                }
        }
    }
}
</script>
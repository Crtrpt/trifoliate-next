<template>
    <div v-for="i in attr" :key="i">
        <component v-bind:is="i.type"  :meta="i" v-model="i.value" />
    </div>
</template>

<script lang="ts">
import KvStr from './KvStr.vue'
import KvJson from "./KvJson.vue"
import KvInt from './KvInt.vue'
import KvColor from './KvColor.vue'
import KvBox from './KvBox.vue'
import KvText from './KvText.vue'
export default {
    components: { KvStr,KvInt,KvColor,KvBox,KvText,KvJson},
    name:"Echart",
    props:{
        data:Object
    },
    watch:{
        "data":{
            deep:true,
            handler(n,o){
                this.attr.id.value=n.id;
                this.attr.data.value=this.data.data;
            }
        }
    },
    mounted(){
        this.attr.id.value=this.data.id;
        this.attr.data.value=this.data.data;
        console.log("数据"+this.attr.data.value)
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
                        data:{
                            name:"data",
                            displayName:"数据",
                            type:"KvJson",
                            value: "",
                            placeholder:"要显示的内容",
                        },  
                }
        }
    }
}
</script>
<template>
    <input :style="data.style" 
    @click="click($event)"
     ref="node"
     :type="data.meta.type"
     v-model="data.value"  />
</template>

<script lang="ts">
import ev from "../utils/Eventbus"
import Input from '../widget/Input.vue';
export default {
  components: { Input },
    props:{
        data:Object
    },
    methods:{
        click(e){
            ev.fire("Container","selectContainer",{e:this.$refs.node,data:this.data})
            e.stopPropagation();
        }
    },
    name:"InputRender",
     mounted(){

   
         ev.ctx.hashIds.get(this.data.id).ref["layer"]=this.$refs.node;
    } 
}
</script>
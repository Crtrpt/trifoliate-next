<template>
    <div class="flex items-center justify-center border  rounded-full mx-1 px-2 bg-gray-200 shadow"
    
    v-tooltip='display?"隐藏网格":"显示网格"'>
        <i class="las la-border-all"   ></i>
        <VSwitch v-model="display" @update:modelValue="change" ></VSwitch>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import ev from "../utils/Eventbus"
import VSwitch from "../common/VSwitch.vue"


export default defineComponent({
    directives:{
    },
    props: {
        ctx: Object
    },
    data() {
        return {
            tooltipDisplay:false,
            display: this.ctx.displayGrid || true
        };
    },
    methods: {
        enter(){

         
        
      },
      out(){

       
      },
        change() {
            console.log(this.display);
            this.$emit("input", this.display);
        }
    },
    components: { VSwitch }
})
</script>

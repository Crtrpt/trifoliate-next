<template>
  <div class="py-0">
    <Switch
      v-model="v"
      :class="v ? 'bg-gray-400' : 'bg-gray-300'"
      class="relative inline-flex flex-shrink-0 h-[15px] w-[30px] 
            border-2 border-transparent rounded-full cursor-pointer 
            transition-colors ease-in-out duration-200 focus:outline-none
             focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"

    >
     
      <span
        aria-hidden="true"
        :class="v ? 'translate-x-3' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[11px] w-[11px] rounded-full
         bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
      />
    </Switch>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

export default {
    components:{
        Switch
    },
    props:{
        modelValue:Boolean
    },
    data(){
        return {
            v:this.modelValue
        }
    },
    methods:{
        toggle1(){
            this.v=!this.v;
        }
    },
    watch:{
        "v":{
            handler(n){
                this.$emit("update:modelValue",n)
            }
        }
    }
}
</script>

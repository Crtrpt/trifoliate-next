<template>
        <div class="cell flex my-1  items-baseline">
            <div class="w w-1/3">{{meta.displayName}}:</div>
            <div class=" flex-grow-0">
                <v-select-v1 v-model="meta.data"></v-select-v1>
            </div>
            <kv-bind></kv-bind>
        </div>
</template>



<script setup lang="ts">
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import VSelect from '../common/VSelect.vue'
import VSelectV1 from '../common/VSelectV1.vue'

</script>


<script lang="ts">
import KvBind from './KvBind.vue'
export default {
  components: { KvBind,VSelect },
    name:"KvArray",
    props:{
        meta:Object,
    }
}
</script>
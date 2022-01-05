<template>
    <div class="border  w-[20rem]">
        <MultipleSelectView class="border-t " />
        <DataView class="border-t "/>
    </div>
    <div class="border  w-[20rem]">
        <TreeView class="border-t "/>
        <AttrView class="border-t " />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import TreeView from "../view/TreeView/TreeView.vue"
import AttrView from "../view/AttrView/AttrView.vue"

import DataView from "../view/DataView/DataView.vue"
import MultipleSelectView from "../view/MultipleSelectView/MultipleSelectView.vue"
export default defineComponent({
  components:{TreeView,AttrView,DataView,MultipleSelectView},
  setup() {
    
  }
})
</script>


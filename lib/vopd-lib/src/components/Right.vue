<template>
    <div class="w-[60rem] flex">
        <div class="border  w-[20rem]">
            <MultipleSelectView class="border-t " />
            
        </div>
        <div class="border  w-[20rem]">
            <TreeView class="border-t "/>
            <AttrView class="border-t " />
        </div>
         <div class="border  w-[20rem]">
            <DataView class="border-t "/>
            <QueryView class="border-t "/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import TreeView from "../view/TreeView/TreeView.vue"
import AttrView from "../view/AttrView/AttrView.vue"

import DataView from "../view/DataView/DataView.vue"
import QueryView from "../view/DataView/QueryView.vue"

import MultipleSelectView from "../view/MultipleSelectView/MultipleSelectView.vue"
export default defineComponent({
  components:{TreeView,AttrView,DataView,MultipleSelectView,QueryView},
  setup() {
    
  }
})
</script>


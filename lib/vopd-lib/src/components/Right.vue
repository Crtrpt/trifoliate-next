<template>
    <div class="w-[40rem] flex">
        <!-- <div class="border  w-[20rem]">
            <MultipleSelectView class="border-t " />
            
        </div> -->
        <div class="border  w-[20rem] flex flex-col">
            <TreeView class="border-t flex-grow  h-1/2"/>
            <AttrView class="border-t flex-grow  h-1/2" />
            <EventView class="border-t flex-grow  h-1/2" />
        </div>
         <div class="border  w-[20rem]">
            <DataView class="border-t  h-1/2"/>
            <QueryView class="border-t h-1/2"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TreeView from "../view/TreeView/TreeView.vue"
import AttrView from "../view/AttrView/AttrView.vue"
import EventView from "../view/EventView/EventView.vue"
import DataView from "../view/DataView/DataView.vue"
import QueryView from "../view/DataView/QueryView.vue"

import MultipleSelectView from "../view/MultipleSelectView/MultipleSelectView.vue"
export default defineComponent({
  components:{TreeView,AttrView,DataView,MultipleSelectView,QueryView,EventView},
  setup() {
    
  }
})
</script>


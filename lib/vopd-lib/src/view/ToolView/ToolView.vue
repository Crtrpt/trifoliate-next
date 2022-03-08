<template>
    <div class="ToolView border border-t-gray-200 p-1">
              <div class="item">
                <i class=" item las la-mouse-pointer"></i>
              </div>
              <div class="item">
                <i class="las la-hand-paper"></i>
              </div>
              <div class="item">
                <i class="las la-plug"></i>
              </div>
    </div>
</template>

<script lang="ts">
import "./ToolView.scss";
import ev from "../../utils/eventbus"
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

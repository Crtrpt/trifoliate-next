<template>
    <BaseView name="事件">
         <template v-slot:content>
             view 内容
        </template>
    </BaseView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseView from "../BaseView.vue"

export default defineComponent({
    name:"EventView",
    components:{
        BaseView
    },
    setup() {
        
    },
})
</script>

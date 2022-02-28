<template>
    <BaseView>
         <template v-slot:lead>
                    <i class="las la-search"></i>
        </template>
        <template v-slot:action>
                    <i class="las la-plus-circle"></i>
                    <i class="las la-window-maximize"></i>
                    <i class="las la-ellipsis-v"></i>
        </template>
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

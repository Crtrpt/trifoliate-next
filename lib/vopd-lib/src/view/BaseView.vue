<template>
    <div class="flex flex-col">
        <div class="flex flex-row  justify-start items-center border border-b-gray-300">
            <i :class="icon"></i>
            <p class="name  flex-grow">{{name}}</p>
            <div class="action  p-1">
                <slot name="action">
                    <i class="las la-plus-circle"></i>
                    <i class="las la-window-maximize"></i>
                    <i class="las la-ellipsis-v"></i>
                </slot>
            </div>
          
        </div>
        <div class="flex-grow">
                <slot  name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"BaseView",
    props:{
        icon:{
            type:String,
            default:"las la-recycle p-1"
        },
        name:Object
    },
    setup() {
        
    },
})
</script>

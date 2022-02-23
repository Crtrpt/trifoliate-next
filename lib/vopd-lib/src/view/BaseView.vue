<template>
    <div class="flex flex-col">
        <div class="flex flex-row  justify-start items-center border border-b-gray-300">
            <i :class="icon"></i>
            <div class="flex-grow flex flex-row items-center">
                 <p class="name">{{name}}</p>
                  <slot name="lead"></slot>
            </div>
            <div class="action  p-1">
                <slot name="action">
                    <i class="las la-ellipsis-v"></i>
                </slot>
            </div>
          
        </div>
        <div class="flex-grow px-1">
            <slot  name="content" ></slot>
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

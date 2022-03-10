<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0  z-50 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0  backdrop-blur" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-2 my-8 overflow-hidden
               text-left align-middle transition-all transform bg-white shadow-xl  rounded-md border"
            >
              <DialogTitle
                as="h2"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                {{title}}
              </DialogTitle>
                <slot></slot>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

export default defineComponent({
  components:{
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogOverlay,
      DialogTitle,
  },
  props:{
    title:String
  },
  data(){
    return {
      isOpen:false
    }
  },
  methods:{
    open(){
      this.isOpen=true;
    },
    close(){
      this.isOpen=false;
    },
    closeModal(){
      this.isOpen=false;
    }
  }
})
</script>

<script setup>




</script>

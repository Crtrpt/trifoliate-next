<template>
  <div class="w-full">
    <Listbox v-model="selected" >
      <div class="relative">
        <ListboxButton
          class="relative py-0 pl-2 pr-5 text-left rounded-lg  
          w-full
          cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
        >
          <span class="block truncate  text-xs text-center">{{ selected.name }}</span>
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
          >
            <i class="las la-exchange-alt w-2 h-5 text-gray-400 leading-5"></i>
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute  w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="(person,i) in people"
              :key="person.name"
              :value="person"
              as="template"
            >
              <li
              @click="change(i)"
                :class="[
                  active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate   text-xs',
                  ]"
                  >{{ person.name }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
              
                  <i class="w-5 h-5 las la-check"></i>
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref, watch  } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'


const props=defineProps(
  {
    modelValue:Number,
    list:Array
  }
)

const people = props.list;

const e= defineEmits(["update:modelValue"])

const selected = ref(props.list[props.modelValue])

const change=(i)=>{
  e("update:modelValue",i)
}
// watch(selected,(n,p)=>{
//   console.log("变更")
//    
// })

</script>

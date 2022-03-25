<template>
  <BaseView>
    <template v-slot:lead>
      <SearchBox
        class="flex-grow"
        v-model="filter.keywords"
        @input="change"
        placeholder="搜索你需要的组件"
      ></SearchBox>
    </template>
    <template v-slot:action>
      <!-- <i class="las la-thumbtack" @click="pin"></i> -->
      <i class="las la-times-circle cursor-pointer" @click="close"></i>
    </template>
    <template v-slot:content>
      <div class="w-full py-1  bg-white">
        <Disclosure
          v-slot="{ open }"
          v-for="g in list"
          :key="g"
          :default-open="g.isOpen"
        >
          <DisclosureButton
            class="
              flex
              justify-between
              w-full
              px-2
              py-1
              text-sm
              mb-1
              font-medium
              text-left
              bg-gray-100
              hover:bg-gray-200
              focus:outline-none
              focus-visible:ring
              focus-visible:ring-blue-500
              focus-visible:ring-opacity-75
            "
          >
            <span>{{ g.name }}</span>
            <i
              :class="open ? 'las la-angle-up' : 'las la-angle-down'"
              class="w-5 h-5 text-blue-500 text-center leading-5"
            ></i>
          </DisclosureButton>
          <DisclosurePanel
            class="grid grid-cols-2 gap-1 auto-rows-max py-1 overflow-auto"
          >
            <template v-for="i in g.list" v-bind:key="i">
              <div
                v-if="
                  filter.keywords == '' || i.name.search(filter.keywords) > -1
                "
                class="border h-16 text-center cursor-pointer hover:bg-gray-200"
                @click="add($event,i)"
              >
                <div
                  v-tooltip="{
                    text: i.desc || i.name,
                    position: 'right-middle',
                  }"
                  class="flex justify-center items-center h-full"
                  draggable="true"
                  @dragstart="dragstart($event, i)"
                >
                  <i :class="i.icon" class="px-1"></i>
                  <div>{{ i.name }}</div>
                </div>
              </div>
            </template>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </template>
  </BaseView>
</template>


<style scoped>
</style>
<script lang="ts">
import { defineComponent } from "vue";
import {mapGetters} from "vuex"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

import BaseView from "./BaseView.vue";
import ev from "../utils/Eventbus";
import SearchBox from "../common/SearchBox.vue";

export default defineComponent({
  name: "ComponentView",
  computed: {
    list:{
      get(){
        return this.$store.getters['page/widgetList'];
      },
      set(value){

      }
    }
  },
  data() {
    return {
      open: true,
      filter: {
        keywords: "",
      },
 
    };
  },
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    BaseView,
    SearchBox,
  },
  destroyed(){
     
  },
  methods: {
    dragstart(e, i) {
      console.log(e);
      e.dataTransfer.setData(
        "Text",
        JSON.stringify({
          offsetX: e.offsetX,
          offsetY: e.offsetY,
          id: i.id,
        })
      );
    },
    pin(v) {
      this.$emit("pin");
    },
    close(v) {
      this.$emit("close");
    },
    change(v) {
      console.log("变更下");
    },
    add(e:any,data: any) {
      this.$store.dispatch("page/addNode",{id:null,nodeId:data.id})
      e.stopPropagation();
    },
    render(p, ctx) {
      // this.list = ctx.nodeList;
    },
  },
  created(){

  },
});
</script>

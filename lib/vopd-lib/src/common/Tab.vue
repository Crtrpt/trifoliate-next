<template>
    <div class="flex ">
        <div class="flex flex-col border border-t-gray-200 " v-if="direction=='left'">
            <div :class="{
                'handler border  cursor-pointer p-1 text-sm  text-center ':true,
                'bg-gray-200':this.select==i,
            }" style="writing-mode: vertical-rl; text-orientation: upright;" v-for="(e,i) in data" :key="e.title" @click="changeSelect(i)">
                <i :class="e.icon"></i>
                <!-- {{e.title}} -->
            </div>
        </div>
        <div class="content flex-grow overflow-auto border">
            <KeepAlive>
                <component :is="vnode.componemt" ref="cur" />
            </KeepAlive>
        </div>
        <div class="flex flex-col border border-t-gray-200 " v-if="direction=='right'">
            <div :class="{
                'handler border  cursor-pointer  text-sm  text-center p-1':true,
                'bg-gray-200':this.select==i,
            }" style="writing-mode: vertical-rl;" v-for="(e,i) in data" :key="e.title" @click="changeSelect(i)">
                <i :class="e.icon"></i>
                <!-- {{e.title}} -->
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent,nextTick } from 'vue'
import { KeepAlive } from 'vue'
import TabItem from './TabItem.vue'


export default defineComponent({
    props:{
        data:Array,
        direction:String,
    },
    data() {
        return {
            select: 0
        };
    },
    computed:{
      vnode(){
          return this.data[this.select];
      } 
    },
    methods:{
        changeSelect(i:number){
            this.select=i;
        }
    },
    mounted() {
        console.log("加载");
    },
    setup() {
    },
    components: { TabItem,KeepAlive ,}
})
</script>

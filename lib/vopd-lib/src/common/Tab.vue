<template>
    <div class="flex flex-col">
        <div class="flex border border-t-gray-200 pt-1 pl-1  ">
            <div :class="{
                'handler border px-2 cursor-pointer':true,
                'bg-gray-200':this.select==i,
            }" v-for="(e,i) in data" :key="e.title" @click="changeSelect(i)">
                <i :class="e.icon"></i>
                {{e.title}}
            </div>
        </div>
        <div class="content flex-grow overflow-auto">
            <KeepAlive>
                <component :is="vnode.componemt" />
            </KeepAlive>
        </div>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { KeepAlive } from 'vue'
import TabItem from './TabItem.vue'


export default defineComponent({
    props:{
        data:Array,
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

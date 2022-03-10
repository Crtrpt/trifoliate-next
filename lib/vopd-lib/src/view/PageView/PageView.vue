<template>
    <BaseView>
         <template v-slot:lead>
                   <SearchBox class="flex-grow " v-model="filter.keywords"></SearchBox>
        </template>
        <template v-slot:action>
                <i class="las la-plus-circle  cursor-pointer" @click="add"></i>
                <VDialog :open="isOpen" ref="vdialog" title="">
                    <input  placeholder="输入页面名称"  class="form-input w-full h-full outline-none leading-10 text-xl" type="text" v-model="form.name" v-on:keyup.enter="save"/>
                </VDialog>
        </template>
         <template v-slot:content>
            <div class="grid  gap-1 auto-rows-max         p-1    overflow-auto">
                <template v-for="(i,idx) in list" v-bind:key="i" >
                    <div  @click="edit(i,idx)"  class=" flex  h-8  text-center cursor-pointer items-center border px-1  hover:border-blue-400" v-if="(filter.keywords=='' || i.name.search(filter.keywords)>-1)&& i._delete!=true" >
                                <div  class="flex flex-grow  items-center  text-sm">{{i.name}}</div>
                                <div class="px-1"> 
                                    <i class="las la-pen" @click="edit(i,idx)"></i>
                                    <i class="las la-trash" @click="remove(i)"></i>
                                </div>
                    </div>
                </template>
            </div>
        </template>
    </BaseView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseView from "../BaseView.vue"
import SearchBox from '../../common/SearchBox.vue'
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  } from '@headlessui/vue'
import VDialog from '../../common/VDialog.vue'

export default defineComponent({
    name:"ComponentView",
    data(){
        return {
            isOpen:false,
            editIdx:-1,
            filter:{
                keywords:""
            },
            form:{
                name:""
            },
                list:[
                {
                id:1,
                name:"第一页",
                },
                {
                id:2,
                name:"第二页",
                },
            ]
        }
    },
    components:{
    BaseView,
    SearchBox,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
    VDialog
},
    methods:{
        save(){
            this.$refs.vdialog.close();
            if(this.editIdx=-1){
                    this.list.push(this.form)
            }
        },
        cancel(){

        },
        edit(i,idx){
            this.editIdx=idx;
            this.form=i;
            this.$refs.vdialog.open();
        },
        remove(p){
            p._delete=true
        },
        add(){
            this.isOpen=true
            this.form={
                name:""
            }
            this.$refs.vdialog.open();
           
        }
    },
    setup() {
    },
})
</script>

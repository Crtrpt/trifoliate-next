<template>
    <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow items-center"    
         v-tooltip="'下拉选择页面的大小尺寸'"
    >
                <i class="las la-desktop"></i>
                <VSelect class="w-30" :list="mediaList" v-model="media"></VSelect>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VSelect from '../common/VSelect.vue';

export default defineComponent({
    props: {
        ctx: Object
    },
    data() {
        return {
            media:0,
            mediaList:[
                {
                    name:"800px*600px",
                    w:"800px",
                    h:"600px",
                },{
                    name:"1024px*960px",
                    w:"1024px",
                    h:"960px",
                }
            ],
        };
    },
    watch: {
        "media":{
            handler(n){
                var s=this.mediaList[n];
                 this.$emit("input",s);
            }
        }
    },
    mounted() {
     
    },
    methods: {

    },
    setup() {
    },
    components: { VSelect }
})
</script>

<template>
    <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow items-center"
    
         v-tooltip="'下拉选择页面的大小尺寸'"
    >
                <i class="las la-desktop"></i>
                <VSelect class="w-30"></VSelect>
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
            w: this.ctx.width || "1024px",
            h: this.ctx.height || "960px",
        };
    },
    watch: {
        "ctx": {
            deep: true,
            handler(n) {
                this.w = n.width;
                this.h = n.height;
            }
        }
    },
    mounted() {
     
    },
    methods: {
        change() {
            var p = { w: this.w, h: this.h };
            console.log(p);
            // this.$emit("input",p);
        }
    },
    setup() {
    },
    components: { VSelect }
})
</script>

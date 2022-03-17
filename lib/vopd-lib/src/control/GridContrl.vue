<template>
    <div class="flex items-center justify-center border rounded-full mx-1 px-2 bg-gray-200 shadow">
        <i class="las la-border-all"></i>
        <VSwitch v-model="display" @update:modelValue="change"></VSwitch>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import ev from "../utils/Eventbus"
import VSwitch from "../common/VSwitch.vue"

export default defineComponent({
    props: {
        ctx: Object
    },
    data() {
        return {
            display: this.ctx.displayGrid || true
        };
    },
    methods: {
        change() {
            console.log(this.display);
            this.$emit("input", this.display);
        }
    },
    components: { VSwitch }
})
</script>

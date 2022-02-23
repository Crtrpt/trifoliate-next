<template>
        <div class="cell flex my-1 items-center">
            <div class="w w-1/3">{{meta.displayName}}:</div>
            <input class="border flex-grow" v-model="meta.value" :placeholder="meta.placeholder" />
            <KvBind />
        </div>
</template>

<style>

</style>
<script lang="ts">

// One of the following themes
import '@simonwep/pickr/dist/themes/nano.min.css'; 

// Modern or es5 bundle (pay attention to the note below!)
import Pickr from '@simonwep/pickr';
import KvBind from './KvBind.vue';


export default {
  components: { KvBind },
    name:"KvColor",
    props:{
        meta:Object,
    },
    mounted(){
    // this.ins = Pickr.create({
    //         el: this.$refs.colorpick,
    //         theme: 'nano', 
    //         swatches: [
    //             'rgba(244, 67, 54, 1)',
    //             'rgba(233, 30, 99, 0.95)',
    //             'rgba(156, 39, 176, 0.9)',
    //             'rgba(103, 58, 183, 0.85)',
    //             'rgba(63, 81, 181, 0.8)',
    //             'rgba(33, 150, 243, 0.75)',
    //             'rgba(3, 169, 244, 0.7)',
    //             'rgba(0, 188, 212, 0.7)',
    //             'rgba(0, 150, 136, 0.75)',
    //             'rgba(76, 175, 80, 0.8)',
    //             'rgba(139, 195, 74, 0.85)',
    //             'rgba(205, 220, 57, 0.9)',
    //             'rgba(255, 235, 59, 0.95)',
    //             'rgba(255, 193, 7, 1)'
    //         ],
    //         i18n: {

    //             // Strings visible in the UI
    //         'ui:dialog': 'color picker dialog',
    //         'btn:toggle': 'toggle color picker dialog',
    //         'btn:swatch': 'color swatch',
    //         'btn:last-color': 'use previous color',
    //         'btn:save': 'Save',
    //         'btn:cancel': 'Cancel',
    //         'btn:clear': 'Clear',

    //         // Strings used for aria-labels
    //         'aria:btn:save': '保存',
    //         'aria:btn:cancel': '取消',
    //         'aria:btn:clear': '清除',
    //         'aria:input': 'color input field',
    //         'aria:palette': 'color selection area',
    //         'aria:hue': 'hue selection slider',
    //         'aria:opacity': 'selection slider'
    //         },
    //         components: {

    //             // Main components
    //             preview: true,
    //             opacity: true,
    //             hue: true,

    //             // Input / output Options
    //             interaction: {
    //                 hex: true,
    //                 rgba: true,
    //                 hsla: true,
    //                 hsva: true,
    //                 cmyk: true,
    //                 input: true,
    //                 clear: true,
    //                 save: true
    //             }
    //         }
    //     });
    },
    data(){
        return {
            ins:null
        }
    }
}
</script>
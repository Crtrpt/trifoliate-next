<template>
    <div class="flex flex-col">
        <div class="pl-1 break-words flex flex-row">
            <div class="w-1/3">url:</div>
            <div class="w-2/3   whitespace-nowrap overflow-hidden">{{type.config.url}}</div>
        </div>
        <div class="flex-grow" ref="editor"></div>
    </div>
</template>


<style>
    .cm-editor { height: 100%}
    .cm-scroller { overflow: auto; }
</style>


<script lang="ts">
import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {sql} from "@codemirror/lang-sql"
export default {
    props:{
        data:Object,
        type:Object
    },
    data(){
        return {
            editor:null
        }
    },
    watch:{
        // data:{
        //     deep:true,
        //     handler:function(n,w){
        //         console.log(this?.editor);
        //         this.editor.dispatch({
        //             changes: {from: 0, insert: n}
        //         })
        //     }
        // }
    },
    mounted(){
        this.editor = new EditorView({
            state: EditorState.create({
                doc: this.data.query,
                extensions: [basicSetup, sql()]
            }),
            parent: this.$refs.editor
        });
        setTimeout(() => {

        }, 1000);
       
    }
}
</script>
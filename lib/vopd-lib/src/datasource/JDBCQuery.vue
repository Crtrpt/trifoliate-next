<template>
    <div class="flex flex-col">
        <div class="px-1 border-y"><i class="las la-th"></i>查询结果</div>
        <div class=" border-y overflow-auto flex-grow" ref="editor"></div>
    </div>
</template>

<style>
    .cm-editor { height: 100%}
    .cm-scroller { overflow: auto; }
</style>
<script lang="ts">
import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"

export default {
    props:{
        data:String
    },
    data(){
        return {
            editor:null
        }
    },
    watch:{
        data:{
            deep:true,
            handler:function(n,w){
                console.log(this?.editor);
                this.editor.dispatch({
                    changes: {from: 0, insert: n}
                })
            }
        }
    },
    mounted(){
        console.log("挂载")
        console.log(this.$refs.editor);
        this.editor = new EditorView({
        state: EditorState.create({
            extensions: [basicSetup, javascript()]
        }),
        parent: this.$refs.editor
        })
    }
}
</script>
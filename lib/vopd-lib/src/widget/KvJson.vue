<template>
        <div class="cell flex my-1 items-baseline">
            <div class="w w-1/3">{{meta.displayName}}:</div>
            <div class="border flex-grow-0 h-52 overflow-scroll" >
                <div class=" border-y overflow-auto flex-grow" ref="editor"></div>
            </div>
            <kv-bind></kv-bind>
        </div>
</template>

<script lang="ts">
import KvBind from './KvBind.vue'

import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"

export default {
  components: { KvBind },
    name:"KvJson",
    props:{
        meta:Object,
    },
    data(){
        return {
            editor:null
        }
    },
    watch:{
        meta:{
            deep:true,
            handler:function(n,w){
                console.log(n.value);
                this.editor.dispatch({
                    changes: {from: 0, insert: JSON.stringify(n.value,null, "  ")}
                })
            }
        }
    },
    mounted(){
        console.log("初始化加载")
        console.log(this.meta.value);
        
        this.editor = new EditorView({
            doc:this.meta.value,
            state: EditorState.create({
            extensions: [basicSetup, javascript()]
        }),
        parent: this.$refs.editor
        })
    }
}
</script>
<template>
    <div class="">
        <div class="p-1 border-b ">层级视图</div>
        <div class="p-1">
            <Tree v-for="i in source.list" :key="i" :data="i" :level="1"></Tree>
        </div>
        
    </div>
</template>

<script>
import ev from "../../utils/eventbus"
import Tree from "./Tree.vue"
export default {
    components:{Tree},
    data(){
        return {
            source:{
                list:{}
            }
        };
    },
    methods:{
        render(payload){
            console.log(payload);
            this.source=payload;
        }
    },
    mounted(){
        ev.on("TreeView","init",this.render)
    }
}
</script>
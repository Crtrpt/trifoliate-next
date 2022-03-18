<template>
    <div :style="data.style" ref="node" @click="click($event)" >
        <div ref="chart" style="width:100%;height:100%">
        </div>
    </div>
</template>

<script lang="ts">
import ev from "../utils/Eventbus"
import * as echarts from 'echarts';

export default {
    props:{
        data:Object
    },
    data(){
        return {
            instance:null
        }
    },
    methods:{
        click(e){
            e.stopPropagation();
            ev.fire("Container","selectContainer",{e:this.$refs.node,data:this.data})
        }
    },
    updated(){
            this.instance.dispose();
          this.instance = echarts.init(this.$refs.chart);
            // Draw the chart
            console.log(this.data);
            this.instance.setOption(this.data.data);
    },
    mounted(){
        ev.ctx.hashIds.get(this.data.id).ref["layer"]=this.$refs.node;
        this.instance = echarts.init(this.$refs.chart);
        this.instance.setOption(this.data.data);
      
    },
    name:"EchartRender"
}
</script>
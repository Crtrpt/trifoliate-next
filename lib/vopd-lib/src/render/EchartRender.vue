<template>
    <div :style="data.style" ref="node" @click="click($event)" >
        <div ref="chart" style="width:100%;height:100%">
            ref="chart"
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
    mounted(){
        ev.ctx.hashIds.get(this.data.id).ref["layer"]=this.$refs.node;
        var myChart = echarts.init(this.$refs.chart);
            // Draw the chart
            console.log(this.data);
            myChart.setOption(this.data.data);
    },
    name:"EchartRender"
}
</script>
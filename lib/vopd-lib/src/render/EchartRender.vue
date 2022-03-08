<template>
    <div :style="data.style" ref="chart">
    </div>
</template>

<script>
import ev from "../utils/eventbus"
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
            ev.fire("Container","selectContainer",this.data)
        }
    },
    mounted(){
        var myChart = echarts.init(this.$refs.chart);
            // Draw the chart
            console.log(this.data);
            myChart.setOption(this.data.data);
    },
    name:"EchartRender"
}
</script>
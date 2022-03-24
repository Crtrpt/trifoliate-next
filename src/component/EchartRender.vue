<template>
  <div :style="data.style" ref="node" @click="click($event)">
    <div ref="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script lang="ts">

import * as echarts from "echarts";

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      instance: null,
    };
  },
  methods: {
    click(e) {
    },
  },
  updated() {
    this.instance.dispose();
    this.instance = echarts.init(this.$refs.chart);
    this.instance.setOption(this.data.data);
  },
  mounted() {
    this.instance = echarts.init(this.$refs.chart);
    this.instance.setOption(this.data.data);
  },
  name: "EchartRender",
};
</script>

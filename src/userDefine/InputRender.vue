<template>
  <input
    :style="data.style"
    ref="node"
    :type="data.meta.type"
    v-model="data.value"
  />
</template>

<script lang="ts">
export default {
  components: {},
  props: {
    data: Object,
  },
  methods: {},
  name: "InputRender",
  mounted() {},
};
</script>
<template>
  <img
    :style="data.style"
    :src="data.meta.value"
  />
</template>

<script lang="ts">
export default {
  components: {},
  props: {
    data: Object,
  },
  methods: {},
  name: "ImageRender",
  mounted() {},
};
</script>
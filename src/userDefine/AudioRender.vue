<template>
  <div>
  <video 
    controls
    autoplay
    :style="data.style"
  >
    <source :src="data.meta.value" >
  </video>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  props: {
    data: Object,
  },
  methods: {},
  name: "AudioRender",
  mounted() {},
};
</script>
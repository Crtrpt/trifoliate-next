<template>
 
  <video 
    controls
    autoplay
    :style="data.style"
  >
    <source :src="data.meta.value" >
  </video>

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
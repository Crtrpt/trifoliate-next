<template>
  <div :style="data.style">
    {{ data.content }}
  </div>
</template>

<script lang="ts">

export default {
  props: {
    data: Object,
  },
  methods: {
  },
  name: "TextRender",
};
</script>
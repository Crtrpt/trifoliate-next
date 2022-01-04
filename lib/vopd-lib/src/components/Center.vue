<template>
    <div class="b border-y">
      <Layer name="BaseLayer" />
      <Layer name="MouseLayer" />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Layer from './Layer.vue'


export default defineComponent({
  components: { Layer },
  setup() {
    
  }
})
</script>


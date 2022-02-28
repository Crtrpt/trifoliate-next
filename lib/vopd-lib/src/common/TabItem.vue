<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
    props:{
        vnodes:Object,
    },
    render () {
        console.log(this);
        return  this.vnodes;
    }
})
</script>

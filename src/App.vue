<template>
  <Vopd :value="data" ref="vopd" class="flex flex-col h-full  w-full" style="height:100%"/>
</template>
<script lang="ts">


import './index.css'
import "../public/css/line-awesome.min.css"
import page from "./page.json"

export default {
  data(){
    return {
      data:page
    }
  },
}
</script>

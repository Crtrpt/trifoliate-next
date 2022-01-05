<script setup>
import Vopd from '../lib/vopd-lib/src/Vopd.vue'
import './index.css'
</script>

<template>
  <div>
    <div class="mb-3">演示</div>
    <Vopd :value="data"/>
  </div>
  
</template>
<script>


export default {
  components:{Vopd},
  data(){
    return {
      data:{
        list:[{
          id:1,
          name:"容器",
          render:"ContainerRender",
          widget:"Container",
          children:[
            {
            id:3,
            name:"文字",
            render:"TextRender",
            content:"显示一段文本",
            widget:"Text",
              style:{
                width:"100px",
                left:"100px",
                top:"100px",
                position: "absolute",
                border:"1px solid red",
               
              }
            },
          ],
          style:{
            width:"200px",
            height:"200px",
            left:"200px",
            top:"100px",
            position: "absolute",
            background:"lightblue"
          }
        },
        {
          id:2,
          name:"容器",
          render:"ContainerRender",
          widget:"Container",
          children:[
          ],
          style:{
            width:"400px",
            left:"400px",
            height:"200px",
            top:"200px",
            position: "absolute",
            background:"lightblue"
          }
          
        }]
      }
    }
  },
  setup() {
    
  },
}
</script>

<template>
    <div :style="data.style">
        {{data.name}}
        <template v-if="data?.children?.length>0" >
            <Container v-for="n in data.children" :key="n.id" :data=n></Container>
        </template>
    </div>
</template>

<script>
export default {
    props:{
        data:Object
    },
    name:"Container"
}
</script>
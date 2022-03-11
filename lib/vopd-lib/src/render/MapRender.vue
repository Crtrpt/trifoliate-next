<template>
    <div :style="data.style" @click="click($event)" ref="map">
    </div>
</template>

<script lang="ts">
import ev from "../utils/eventbus"
import L from "leaflet"
import 'leaflet/dist/leaflet.css'
export default {
    props:{
        data:Object
    },
    methods:{
        click(e:any){
            e.stopPropagation();
            ev.fire("Container","selectContainer",this.data)
        }
    },
    name:"MapRender",
    mounted(){
        var map=L.map(this.$refs.map, {
            center: [51.505, -0.09],
            zoom: 13
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }
}
</script>
<template>
    <div :style="data.style" @click="click($event)" ref="node">
        <div class="pointer-events-none " style="width:100%;height:100%" ref="map">
        </div>
    </div>
</template>

<script lang="ts">
import ev from "../utils/Eventbus"
import L from "leaflet"
import 'leaflet/dist/leaflet.css'
export default {
    props:{
        data:Object
    },
    methods:{
        click(e:any){
            e.stopPropagation();
             ev.fire("Container","selectContainer",{e:this.$refs.node,data:this.data})
        }
    },
    name:"MapRender",
    mounted(){
        ev.ctx.hashIds.get(this.data.id).ref["layer"]=this.$refs.node;
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
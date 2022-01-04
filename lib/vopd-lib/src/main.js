import Vopd from './Vopd.vue'
import './assets/index.css'



var modules=import.meta.globEager("../layers/*.vue");

for (const idx in modules) {
    console.log(idx);
  modules[idx]().then((mod) => {
    console.log(path, mod)
  })
}

Windows.Vopd={
    
}
export  {
    Vopd
}

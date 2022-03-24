import { createStore } from "vuex";

const store = createStore({
    state() { 
        return {
            version: "xxx",
            count:"xxx",
        }
    },
    mutations:{
        test(state){
            state.count++;
        }
    }
})
 

export default store;
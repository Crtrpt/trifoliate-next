import { NodeGroup } from "../interface/node";
import { XWin } from "../interface/xwin";

const layout= {
      namespaced: true,
      state:() =>{
        return new XWin();
      },
      mutations: {
        test(state:any) {
          state.count++;
        },
      },
    
}
    
export default layout;
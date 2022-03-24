import { NodeGroup } from "../interface/node";

const widget = {
  namespaced: true,
  state: () => {
    return new NodeGroup();
  },
  mutations: {
    test(state:any) {
      state.count++;
    },
  },
};

export default widget;

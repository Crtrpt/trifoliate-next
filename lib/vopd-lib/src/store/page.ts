import { RuntimePage } from "../interface/page";

const page = {
  namespaced: true,
  state: () => {
    return new RuntimePage();
  },
  mutations: {
    test(state: any) {
      state.count++;
    },
  },
};

export default page;

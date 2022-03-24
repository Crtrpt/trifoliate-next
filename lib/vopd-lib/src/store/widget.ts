const widget = {
  namespaced: true,
  state: () => ({
    desc: "可以添加到page中的组件",
    count: "xxx",
    nodeTree: [],
  }),
  mutations: {
    test(state:any) {
      state.count++;
    },
  },
};

export default widget;

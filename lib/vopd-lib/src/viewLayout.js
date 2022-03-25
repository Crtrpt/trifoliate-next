const layout = {
  type: "window",
  name: "main",
  style: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  item: [
    {
      type: "view",
      position: "left",
      name: "left",
      draggable: true,
      viewHandler: "ViewHandler",
      style: {
        width: "300px",
        minWidth: "260px",
      },
      secondaryItem: [
        {
          name: "变量",
          icon: "las la-dice-d20",
          component: "EnvView",
        },
      ],
      item: [
        {
          name: "部件",
          icon: "las la-plus",
          component: "Widget",
        },
      ],
    },
    {
      type: "gutter",
    },
    {
      type: "view",
      content: "222",
      draggable: false,
      viewHandler: "ViewHandler",
      displayHandler: false,
      name: "center",
      style: {
        flexGrow: "1",
        width: "0vw",
      },
      item: [
        {
          name: "工作区",
          icon: "las la-dice-d20",
          component: "Workspace",
        },
      ],
    },
    {
      type: "gutter",
    },
    {
      type: "view",
      content: "222",
      style: {
        width: "400px",
      },
      draggable: true,
      viewHandler: "ViewHandler",
      position: "right",
      name: "right",
      secondaryItem: [
        {
          name: "层级",
          icon: "las la-layer-group",
          component: "TreeView",
        },
      ],
      item: [
        {
          name: "属性",
          icon: "las la-bars",
          component: "AttrView",
        },
      ],
    },
  ],
};



export default layout;
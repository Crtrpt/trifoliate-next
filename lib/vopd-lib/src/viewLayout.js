const layout = {
  type: "window",
  style: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  item: [
    {
      type: "view",
      position: "left",
      draggable: true,
      viewHandler: "ViewHandler",
      style: {
        width: "300px",
      },
      item: [
        {
          name: "部件",
          icon: "las la-plus",
          component: "ComponentView",
        },
        {
          name: "变量",
          icon: "las la-dice-d20",
          component: "EnvView",
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
      style: {
        flexGrow: "1",
        overflow: "hidden",
      },
      item: [
        {
          name: "变量",
          icon: "las la-dice-d20",
          component: "Center",
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
      item: [
        {
          name: "层级",
          icon: "las la-layer-group",
          component: "TreeView",
        },
        {
          name: "属性",
          icon: "las la-bars",
          component: "AttrView",
        },
        {
          name: "数据",
          icon: "las la-database",
          component: "DataView",
        },
        {
          name: "结果",
          icon: "las la-table",
          component: "QueryView",
        },
      ],
    },
  ],
};



export default layout;
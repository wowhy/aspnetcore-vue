const state = {
  config: {
    mobile: false,
    sidebar: true
  },
  authed: true,
  menus: [{
    name: '页面',
    icon: 'edge',
    children: [{
      name: '测试页面1',
      url: '/demo1'
    }, {
      name: '测试页面2',
      url: '/demo2'
    }]
  }],
  tabs: [{
    name: '首页',
    closable: false,
    route: 'home'
  }]
}

export default state

export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }],
  ],
  routes: [{
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/',
        component: './HelloWorld'
      },
      {
        path: 'helloWorld',
        component: './HelloWorld'
      },
      {
        path: 'tabDemo',
        component: './TabDemo'
      },
      {
        path: 'cardDemo',
        component: './CardDemo'
      },
      {
        path: 'dashboard',
        routes: [{
          path: 'analysis',
          component: './Dashboard/Analysis'
        }, {
          path: 'monitor',
          component: './Dashboard/Monitor'
        }, {
          path: 'workplace',
          component: './Dashboard/Workplace'
        }]
      }
    ]
  }]
}
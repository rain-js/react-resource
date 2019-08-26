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
      }
    ]
  }]
}
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin/sub-page',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './TableList',
    // routes: [
    //   {
    //     path: '/admin/sub-page',
    //     name: 'sub-page',
    //     icon: 'smile',
    //     component: './Welcome',
    //   },
    //   {
    //     component: './404',
    //   },
    // ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    access: 'canAdmin',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];

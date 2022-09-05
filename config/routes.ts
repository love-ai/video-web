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
    icon: 'upload',
    component: './UploadVideo',
  },
  {
    path: '/admin/video/list',
    name: 'admin',
    icon: 'table',
    access: 'canAdmin',
    component: './VideoList',
  },
  {
    name: 'list.table-list',
    icon: 'User',
    path: '/admin/user/list',
    access: 'canAdmin',
    component: './UserList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];

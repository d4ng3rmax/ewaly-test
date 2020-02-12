import React from 'react';

const Tables = React.lazy(() => import('./views/Base/Tables'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/base/tables', name: 'Tables', component: Tables },
];

export default routes;

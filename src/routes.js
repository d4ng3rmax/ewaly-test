import React from 'react';

const Balance = React.lazy(() => import('./views/Pages/Balance'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/balance', name: 'Consulta de Saldo', component: Balance },
];

export default routes;

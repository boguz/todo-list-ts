import { Router, Route } from '@vaadin/router';
import './components/todooo-app/todooo-app.js';
import './components/todooo-test/todooo-test.js';

const todoooRoutes: Route[] = [
  {
    path: '/',
    component: 'todooo-app',
  },
  {
    path: '/test',
    component: 'todooo-test',
  },
];

const routerOutlet = document.getElementById('routerOutlet');
export const router = new Router(routerOutlet);

router.setRoutes(todoooRoutes);

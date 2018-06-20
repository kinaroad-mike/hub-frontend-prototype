import { Login, Dashboard } from '../views/containers';

export const routes = {
  dashboard: {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
    private: true
  },
  login: {
    path: '/login',
    component: Login,
    exact: true,
    private: false
  }
};

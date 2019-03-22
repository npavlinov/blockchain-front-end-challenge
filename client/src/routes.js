import Home from './components/Home';
import Address from './components/Address';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/address/:address',
    component: Address,
  }
]

export default routes;

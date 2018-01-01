import akkordyRoutes from '../resources/akkordy/akkordy.routes';
import homepageRoutes from '../resources/homepage/homepage.routes';

const routes = [
  { path: '/', router: homepageRoutes },
  { path: '/akkordy', router: akkordyRoutes }
];

export default routes;
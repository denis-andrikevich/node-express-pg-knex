import HomepageController  from './homepage.controller';

const homepageRoutes = {
  createRouter(router) {
    const controller = new HomepageController();

    return router.get('/', controller.index)
  }
};

export default homepageRoutes;
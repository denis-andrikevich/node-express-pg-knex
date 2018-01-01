import AkkordyController from './akkordy.controller';

const akkordyRoutes = {
  createRouter(router) {
    const controller = new AkkordyController();

    return router
      .get('/', controller.index);
  }
};

export default akkordyRoutes;
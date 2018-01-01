export default class HomepageController {
  constructor () {
    this.templateDir = '/homepage';
  }

  index(req, res) {
    res.render(`homepage/index`);
  }
}
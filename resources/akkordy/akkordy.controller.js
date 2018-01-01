export default class AkkordyController {
  constructor () {
    this.templateDir = '/akkordy';
  }

  index(req, res) {
    res.render(`${this.templateDir}/index`);
  }
}
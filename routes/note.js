

module.exports = function (app) {

    const controller = require('../controller/newsscraper');
    app.post('/api/note', controller.note);
}
  
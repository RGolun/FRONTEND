"use strict";

var _drewnoModule = _interopRequireDefault(require("./services/drewnoModule"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.get('/api/', function (req, res) {
  return res.send('Hello drewno!');
});
app.get('/api/drewno', function (req, res) {
  return res.send(_drewnoModule.default.getAll());
});
app.post('/api/drewno', function (req, res) {
  _drewnoModule.default.create(req.body);

  res.sendStatus(200);
});
app.get('/api/drewno/:name', function (req, res) {
  return res.send(_drewnoModule.default.findByName(req.params.name));
});
app.listen(4000, function () {
  return console.log('Api listening on port 4000');
});
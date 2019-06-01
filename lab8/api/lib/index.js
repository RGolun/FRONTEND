"use strict";

var _drzewaModule = _interopRequireDefault(require("./services/drzewaModule"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.use((0, _cors["default"])());
app.get('/api/', function (req, res) {
  return res.send('Hello drzewa!');
});
app.get('/api/drzewa', function (req, res) {
  return res.send(_drzewaModule.default.getAll());
});
app.post('/api/drzewa', function (req, res) {
  _drzewaModule.default.create(req.body);

  res.sendStatus(200);
});
app.get('/api/drzewa/:gatunek', function (req, res) {
  return res.send(_drzewaModule.default.findByGatunek(req.params.gatunek));
});
app.listen(4000, function () {
  return console.log('Api listening on port 4000');
});
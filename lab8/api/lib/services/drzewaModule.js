"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Drewno = _interopRequireDefault(require("../models/Drewno"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drzewaModule = function () {
  var drzewa = [];

  var _findByGatunek = function _findByGatunek(gatunek) {
    return drzewa.find(function (d) {
      return d.gatunek === gatunek;
    });
  };

  return {
    create: function create(drewno) {
      if (_findByGatunek(drewno.gatunek)) console.log("Drewno o tym gatunku juz istnieje"); else drzewa.push(new _Drewno.default (drewno.gatunek, drewno.dlugosc, drewno.isTartak, drewno.klasa));
},
    update: function update(drewno) {
        var idx = drzewa.findIndex(function (d) {
          return d.gatunek === drewno.gatunek;
        });
        if(idx < 0) console.log("Drewno o gatunku '".concat(drewno.gatunek, "' nie istnieje."));else drzewa[idx] = drewno;
    },
    "delete": function _delete(gatunek) {
        var idx = drzewa.findIndex(function (d) {
          return d.gatunek === gatunek;
        });
        if(idx < 0) console.log("Drewno o gatunku '".concat(gatunek, "' nie istnieje."));else drzewa.spilce(idx, 1);
    },
    getAll: function getAll() {
      return drzewa;
    },
    log: function log() {
        drzewa.forEach(function (drewno) {
            console.log(drewno);
        });
    },
    findByGatunek: function findByGatunek(gatunek) {
      return _findByGatunek(gatunek)
  }
};
}();

var _default = drzewaModule;
exports["default"] = _default;
function Drewno(sz, wys) {
    "use strict";
    this.sz = sz;
    this.wys = wys;
}

Drewno.prototype.start = function () {
    "use strict";
    console.log("Drewno stworzone");
};

Drewno.prototype.getDrewnoParametry = function () {
    "use strict";
    console.log("Drewno: \n SZEROKOŚĆ: " + this.sz + "\n WYSOKOSC: " + this.wys);
};

Drewno.prototype.obciecieDrewna = function (szObciecie, dlObciecie) {
    "use strict";
    this.sz -= szObciecie;
    this.wys -= dlObciecie;
};

function Brzoza(sz, wys, sloje) {
    "use strict";
    Drewno.call(this, sz, wys);
    this.sloje = sloje;
}

Brzoza.prototype = Object.create(Drewno.prototype);
Brzoza.prototype.constructor = Brzoza;
Brzoza.prototype.iloscsloi = function () {
    "use strict";
    console.log("Brzoza z liczbą słoi: " + this.sloje);
};

var brzoza = new Brzoza(200, 2000, true);
console.log("Szerokość drewna przed obcięciem: " + brzoza.sz);
brzoza.obciecieDrewna(100,200);
console.log("Drewno po obcieciu: " + brzoza.sz);
brzoza.iloscsloi();
brzoza.start();
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

var Module = ( function () {
    
    var drzewa = [
        new Drewno(200,900, true),
        new Drewno(100,4000,true)
    ];

    var addDrewno = function (newDrewno) {
        if (drzewa.find(function(drew) { return drew.sz == newDrewno.sz}))
        {
            console.log("ERROR! Drewno z podaną szerokością już istnieje");
            return
        }
        drzewa.push(newDrewno);
    };

    return {

        getDrewnoBySz: function(sz) {
            return drzewa.find(function(drew) {return drew.sz == sz});
        },

        createDrew: function(sz,wys) {
            var newDrew = new Drewno(sz,wys);
            addDrewno(newDrew);
        },

        updateDrew: function(sz, newDrew) {
            var drewIndex = drzewa.findIndex(function(drew) { return drew.sz == sz});
            if (drewIndex == -1)
            {
                console.log("ERROR!");
                return;
            }
            drzewa[drewIndex] = newDrew;
        }
    }
})();


var brzoza = new Brzoza(200, 2000, true);
var drewkko = Module.getDrewnoBySz(100);
console.log(drewkko);
console.log("Szerokość drewna przed obcięciem: " + brzoza.sz);
brzoza.obciecieDrewna(100,200);
console.log("Drewno po obcieciu: " + brzoza.sz);
brzoza.iloscsloi();
brzoza.start();
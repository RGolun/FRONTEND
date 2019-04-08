class Tartak
{
    constructor(drewnoList)
    {
        this.drewnoList = drewnoList;
    }

    addNewDrewno(drewno)
    {
        this.drewnoList.push(drewno);
    }

    showAllDrewna()
    {
        this.drewnoList.forEach(this.getDrewnoParameters)
    }

    cutAllDrewna()
    {
        console.log()
        this.drewnoList.forEach(n => { n.dl -= 20; console.log(`Dlugosc zostala zmniejszona: ${n.dl}`) })
    }

    getDrewnoParameters(drewno) {
        console.log(`Drewno: \n Rodzaj: ${drewno.rodzaj} \n Typ: ${drewno.typ}`);
    }
}


class Drewno {

    constructor(rodzaj, typ, dl) {
      this.rodzaj = rodzaj;
      this.typ = typ;
      this.dl = dl;
    }

    soldDrewno() {
        console.log(`Drewno sprzedane`);
    }

    obciecieDlugosc(cutDlugosc) {
        this.cutDlugosc -= cutDlugosc;
    };

}

class Brzoza extends Drewno {
    constructor(rodzaj, typ, dl, szerokosc) {
        super(rodzaj, typ, dl);
        this.szerokosc = szerokosc;
    }

    szerokoscDrewna() {
        console.log(`Szerokosc brzozy to: ${this.szerokosc}`);
    };
}

let drewnotable = [];
let brzoza1 = new Brzoza("Brzoza", "Karłowata", 60 , 8);
drewnotable.push(brzoza1);

let drewno1 = new Drewno("Sosna", "Czarna", 100);
drewnotable.push(drewno1);

let brzoza2 = new Brzoza("Brzoza", "Wysoka", 200 , 18);
drewnotable.push(brzoza2)

let tartak = new Tartak(drewnotable);

tartak.showAllDrewna();
tartak.cutAllDrewna();
tartak.showAllDrewna();

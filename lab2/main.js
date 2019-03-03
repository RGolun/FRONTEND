var drzewo1 = {
    id: 1,
    nazwa: "Brzoza",
    kolor: "bialy",
    przeznaczenie: "Tartak",
    koszt: 100.0,
    spec : {
        klasa: "A",
        srednica: 60,
        wiek: 60
    }
}

var drzewo2 = {
    id: 2,
    nazwa: "Sosna",
    kolor: "brazowy",
    przeznaczenie: "Tartak",
    koszt: 188.0,
    spec : {
        klasa: "C",
        srednica: 60,
        wiek: 90
    }
}

var drzewo3 = {
    id: 3,
    nazwa: "Swierk",
    kolor: "brazowy",
    przeznaczenie: "opal",
    koszt: 90000.0,
    spec : {
        klasa: "A",
        srednica: 90,
        wiek: 100
    }
}

var db = [drzewo1, drzewo2, drzewo3];

function tworzenieDrzewo(id, nazwa, kolor, przeznaczenie, koszt, specKlasa, specSrednica, specWiek) {

    var newDrzewo = {
        id: id,
        nazwa: nazwa,
        kolor: kolor,
        przeznaczenie: przeznaczenie,
        koszt: koszt,
        specKlasa: specKlasa,
        specSrednica: specSrednica,
        specWiek: specWiek
};

if (db.find(x => x.id == id))
{
    console.log("ERROR! Drzewo juz istnieje");
    return;
}

db.push(newDrzewo);
}


function getDrzewoById(id) {
    return db.find(x => x.id == id);
}

function getDrzewoByNazwa(nazwa) {
    return db.filter(x => x.nazwa == nazwa);
}

function getDrzewoByPrzeznaczenie(isTartak) {
    return db.filter(x => x.tartak == isTartak);
}

function updateDrzewo(id, newDrzewo) {
    var drzewoIndex = db.findIndex(x => x.id == id);
    db[drzewoIndex] = newDrzewo;
}

function usunDrzewo(id) {
    var drzewoIndex = db.findIndex(x => x.id == id);
    db.splice(drzewoIndex, 1);
}

function wypiszDrzewo() {

    db.forEach(printDrzewo);

    function printDrzewo(element, index, array) {
        console.log("#" + index + " " + element.nazwa + " " + element.przeznaczenie);
    }
}

console.log("\n## INICJALIZACJA ##");
console.log(db);

console.log("\n## DRZEWO O ID 2 ##");
console.log(getDrzewoById(2));

console.log("\n## DRZEWA O NAZWIE BRZOZA ##");
console.log(getDrzewoByNazwa("Brzoza"));

console.log("\n## DRZEWA TARTACZNE");
console.log(getDrzewoByPrzeznaczenie(true));

console.log("\n## USUN DRZEWO O ID=3 ##");
usunDrzewo(3);
console.log(db);

console.log("\n## DODAJ DRZEWO ##");
tworzenieDrzewo(4, "Brzoza", "biala", "opal", 1000.0, "A", 90, 100);
console.log(db);

console.log("\n## DUPLIKUJ BRZOZE ##");
tworzenieDrzewo(4, "Brzoza", "biala", "opal", 1000.0, "A", 90, 100);

console.log("\n## AKTUALIZACJA DRZEWA Z ID=1 ##")
updateDrzewo(1, {
    id: 1,
    nazwa: "Brzoza",
    kolor: "bialy",
    przeznaczenie: "opal",
    koszt: 2200.0,
    spec : {
        klasa: "A",
        srednica: 60,
        wiek: 60
    }
})
console.log(db);

console.log("\n## WYPISZ DRZEWA ##")
wypiszDrzewo();
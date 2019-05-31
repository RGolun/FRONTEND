import Drewno from '../models/Drewno'

const drewnoModule = (() => {

    let drzewa = [];

    let _findByGatunek = (gatunek) => {
        return drzewa.find(t => t.gatunek === gatunek)
    };

    return {
        create: (gatunek, dlugosc, srednica, klasa) => {
            if (_findByGatunek(gatunek))
                console.log("Drewno o tym gatunku juz istnieje")
            else
                drzewa.push(new Drewno (gatunek, dlugosc, srednica, klasa));
        },
        update: (drewno) => {
            let idx = drzewa.findIndex(t => t.gatunek === drewno.gatunek);
            if(idx < 0)
                console.log(`Drewno o gatunku '${drewno.gatunek}' nie istnieje.`);
            else
                drzewa[idx] = drewno;
        },
        delete: (gatunek) => {
            let idx = drzewa.findIndex(t => t.gatunek === gatunek);
            if(idx < 0)
                console.log(`Drewno o gatunku '${gatunek}' nie istnieje`)
            else
                drzewa.splice(idx, 1);
        },
        getAll: () => drzewa,
        log: () => {
            drzewa.forEach((drewno) => {
                console.log(drewno);
            });
        },
        findByGatunek: (gatunek) => _findByGatunek(gatunek)
    }
})();

export default drewnoModule;
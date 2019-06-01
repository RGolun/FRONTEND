import Drewno from '../models/Drewno'

const drzewaModule = (() => {

    let drzewa = [];

    let _findByGatunek = (gatunek) => {
        return drzewa.find(d => d.gatunek === gatunek)
    };

    return {
        create: (gatunek, dlugosc, srednica, klasa) => {
            if (_findByGatunek(gatunek))
                console.log("Drewno o tym gatunku juz istnieje")
            else
                drzewa.push(new Drewno (drewno.gatunek, drewno.dlugosc, drewno.isTartak, drewno.klasa));
        },
        update: (drewno) => {
            let idx = drzewa.findIndex(d => d.gatunek === drewno.gatunek);
            if(idx < 0)
                console.log(`Drewno o gatunku '${drewno.gatunek}' nie istnieje.`);
            else
                drzewa[idx] = drewno;
        },
        delete: (gatunek) => {
            let idx = drzewa.findIndex(d => d.gatunek === gatunek);
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

export default drzewaModule;
import Drewno from '../models/Drewno'

const drewnoModule = (() => {

    let drewno = [];

    let _findByGatunek = (gatunek) => {
        return drewno.find(t => t.gatunek === gatunek)
    };

    return {
        create: (gatunek, dlugosc, srednica, klasa) => {
            if (_findByGatunek(gatunek))
                console.log("Drewno o tym gatunku juz istnieje")
            else
                drewno.push(new Drewno (gatunek, dlugosc, srednica, klasa));
        },
        update: (drewno) => {
            let idx = drewno.findIndex(t => t.gatunek === drewno.gatunek);
            if(idx < 0)
                console.log(`Drewno o gatunku '${drewno.gatunek}' nie istnieje.`);
            else
                drewno[idx] = drewno;
        },
        delete: (gatunek) => {
            let idx = drewno.findIndex(t => t.gatunek === gatunek);
            if(idx < 0)
                console.log(`Drewno o gatunku '${gatunek}' nie istnieje`)
            else
                drewno.splice(idx, 1);
        },
        getAll: () => drewno,
        log: () => {
            drewno.forEach((drewno) => {
                console.log(drewno);
            });
        },
        findBygatunek: (gatunek) => _findByGatunek(gatunek)
    }
})();

export default drewnoModule;
import Drewno from './Drewno'

class Brzoza extends Drewno {
    constructor(gatunek, dlugosc, srednica, klasa) {
        super(gatunek, dlugosc);
        this.srednica = srednica;
        this.klasa = klasa;
    }

    get hasKlasa() {
        return this.klasa.length > 0;
    }
}

export default Brzoza
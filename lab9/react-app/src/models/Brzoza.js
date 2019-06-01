import Drewno from './Drewno'

class Brzoza extends Drewno {
    constructor(gatunek, dlugosc, isTartak, klasa) {
        super(gatunek, dlugosc);
        this.isTartak = isTartak;
        this.klasa = klasa;
    }

    get hasKlasa() {
        return this.klasa.length > 0;
    }
}

export default Brzoza
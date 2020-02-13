import Media from "./Media.js"
import Helpers from "../Helpers.js"

export default class Film extends Media {
    constructor(data) {
        super(data)
    }


    remplir() {
        super.remplir();
        Helpers.remplirElement("nom", this.data.title);
        Helpers.remplirElement("annee", this.data.release_date.split("-")[0]);
        Helpers.remplirElement("duree", Math.floor(this.data.runtime / 60) + "h" + this.data.runtime % 60 + "mn");
        Helpers.remplirElement("budget", numeral(this.data.budget / 1.1).format('0.0a') + " €");
        Helpers.remplirElement("revenus", numeral(this.data.revenue / 1.1).format('0.0a') + " €");
        Helpers.id("serie").style.display = "none";
    
    }
}


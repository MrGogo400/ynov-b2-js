import Media from "./Media.js"
import Helpers from "../Helpers.js";

export default class Serie extends Media {
    constructor(data) {
        super(data)
    }

    remplir() {
        super.remplir();
        Helpers.remplirElement("nom", this.data.name);
        Helpers.remplirElement("genre", this.data.genres.map(item => item.name).join(", "));
        Helpers.remplirElement("annee", this.data.first_air_date.split("-")[0]);
        Helpers.remplirElement("nbSaisons", this.data.number_of_seasons);
        Helpers.id("film").style.display = "none";
    
    }
}
import Helpers from "../Helpers.js";

export default class Media {
    constructor(data) {
        this.data = data;
    }

    remplir() {
        Helpers.remplirElement("description", this.data.overview);
        Helpers.remplirElement("genre", this.data.genres.map(item => item.name).join(", "))
        Helpers.remplirElement("moyenne", this.data.vote_average);
        Helpers.remplirElement("nbVotes", this.data.vote_count);
        Helpers.id("backdrop").style.backgroundImage = `url(${Helpers.backdropUrl(this.data.backdrop_path)})`;
        Helpers.id("poster").src = `${Helpers.posterUrl(this.data.poster_path)}`;
    }
}
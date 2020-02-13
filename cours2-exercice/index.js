import Helpers from "./Helpers.js";
import Film from "./Classes/Film.js";
import Serie from "./Classes/Serie.js";

const chargerMedia = () => {
    numeral.register('locale', 'fr', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'K',
            million: 'M',
            billion: 'Mds',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'ème';
        },
        currency: {
            symbol: '€'
        }
    });

    numeral.locale('fr');

const apiKey = "989cf1ebbbc14e52c6839cf16c1aa77c";

const traiterFilm = data => {
    const film = new Film(data);
    film.remplir();
};

const traiterSerie = data => {
    const serie = new Serie(data);
    serie.remplir();
};
    const id = Helpers.getParam("id");
    const type = Helpers.getParam("type");
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
    axios
        .get(url)
        .then(response => 
            type == "movie" ? traiterFilm(response.data) : traiterSerie(response.data)
        )
        .catch( error => {
        if(error & error.response & error.response.status == 404){
                alert("Média introuvable !")
        } else {
            alert(error ? error.message : "Erreur très étrange !!!");
        }
    });
};


window.addEventListener("load", chargerMedia);




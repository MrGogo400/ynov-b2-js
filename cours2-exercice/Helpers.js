const Helpers = {
    getParam: name => {
        const params = new URLSearchParams(document.location.search);
        return params.get(name);
    },
    id: id => document.getElementById(id),
    remplirElement: (id, text) => {
        document.getElementById(id).innerText = text;
    },
    backdropUrl: path => `https://image.tmdb.org/t/p/w1280/${path}`,
    posterUrl: path => `https://image.tmdb.org/t/p/w154/${path}`,
};

export default Helpers;
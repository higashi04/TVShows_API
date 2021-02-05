const form = document.querySelector('#searchForm');
const resultsHolder = document.querySelector('.results')
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}}
    const res = await axios.get(`http://api.tvmaze.com/search/shows?`, config)
    makeImages(res.data);
    console.log(res)
    console.log(res.data[0].show.genres);
    console.log(res.data[0].show.name);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows){
       if (result.show.image) {
        const img = document.createElement('img');
        const nameTag = document.createElement('span');
        const genres = document.createElement('span');
        nameTag.append(result.show.name);
        genres.append(`Genres: ${result.show.genres}`); 
        img.src = result.show.image.medium;
        resultsHolder.append(img);
        resultsHolder.append(nameTag);
        resultsHolder.append(genres);
        let searchMade = true;

       }
        
    }
}

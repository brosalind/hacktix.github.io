// const form = document.querySelector('form');
//       form.addEventListener('submit', e => {
//         e.preventDefault();
//         const searchTerm = form.elements.search.value;
//         fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${searchTerm}`)
//           .then(response => response.json())
//           .then(data => {
//             const results = data.Search;
//             const resultsContainer = document.getElementById('results');
//             resultsContainer.innerHTML = '';
//             results.forEach(movie => {
//               const movieElement = document.createElement('div');
//               movieElement.classList.add('movie');
//               movieElement.innerHTML = `
//                 <img src="${movie.Poster}" alt="${movie.Title} poster">
//                 <h2>${movie.Title}</h2>
//                 <p>Released: ${movie.Year}</p>
//               `;
//               resultsContainer.appendChild(movieElement);
//             });
//           })
//           .catch(error => console.error(error));
//       });

let database = [
    { 
        id : 1,
        title : `Harry Potter and The Order of The Phoenix`,
        price : 50_000,
        trailer : `https://youtu.be/y6ZW7KXaXYk`,
        cover : `https://image.tmdb.org/t/p/w185/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg`,
        synopsis : `Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students – dubbed ‘Dumbledore’s Army’ – to defend themselves against the dark arts.`,
        genre: `Sci-Fi`
    },
    { 
        id : 2,
        title : `My God Father (2020)`,
        price : 50_000,
        trailer : `https://youtu.be/UaVTIH8mujA `,
        cover : `https://image.tmdb.org/t/p/w185/gDLUshzDEKAUwUeYTE4oJQqRQmO.jpg`,
        synopsis : `Got’, a hot car racer who doesn’t quite get along with his father. He’s trying to prove to his dad how awesome he is. Until one day, Got won a racing championship. There was an event that made him go back to the year 1998, before he was born just one year ago, Got reunited with his father ‘Prem’ who still looked young and handsome.` ,
        genre : `action`
    },
    { 
        id : 3,
        title : `Titanic 1997`,
        price : 50_000,
        trailer : `https://youtu.be/CHekzSiZjrY`,
        cover : `https://image.tmdb.org/t/p/w185/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg`,
        synopsis : `101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic’s departure through to its death—on its first and last voyage—on April 15, 1912.` ,
        genre : `romance`
    },
    { 
        id : 4,
        title : `The Princess Switch: Switched Again (2020)`,
        price : 50_000,
        trailer : `https://youtu.be/9Ca8rXQtmbU`,
        cover : `https://image.tmdb.org/t/p/w185/e4qXQXXaVYvHBE3Rx5x3qrmxorB.jpg`,
        synopsis : `When Duchess Margaret unexpectedly inherits the throne & hits a rough patch with Kevin, it’s up to Stacy to save the day before a new lookalike — party girl Fiona — foils their plans.` ,
        genre : `romance`
    },  
    { 
        id : 5,
        title : `Black Panther: Wakanda Forever (2022)`,
        price : 50_000,
        trailer : `https://youtu.be/_Z3QKkl1WyM`,
        cover : `https://image.tmdb.org/t/p/w92/sv1xJUazXeYqALzczSZ3O6nkH75.jpg`,
        synopsis : `Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda` ,
        genre : `Sci-Fi`
    },
    { 
        id : 6,
        title : `Golden Slumber (2018)`,
        price : 50_000,
        trailer : `https://youtu.be/RvdN4YRK18Q`,
        cover : `https://image.tmdb.org/t/p/w92/pFYz5wFMBlksWTxIZV2JDSDgE7S.jpg`,
        synopsis : `delivery man has to flee for his life when he is framed for the assassination of a political candidate and the evidence against him begins to accumulate.` ,
        genre : `action`
    },
    { 
        id : 7,
        title : `Emily (2022)`,
        price : 50_000,
        trailer : `https://youtu.be/xaL90sMAzbY`,
        cover : `https://image.tmdb.org/t/p/w92/tgVBMIiJczfBWINRRd9yxE8ESln.jpg`,
        synopsis : `The imagined life of one of the world’s most famous authors, Emily Brontë, as she finds her voice and writes the literary classic Wuthering Heights. Explore the relationships that inspired her – her raw, passionate sisterhood with Charlotte and Anne; her first aching, forbidden love for Weightman and her care for her maverick brother whom she idolises.` ,
        genre : `drama`
    },
    { 
        id : 8,
        title : `Missing (2023)`,
        price : 50_000,
        trailer : `https://youtu.be/seBixtcx19E`,
        cover : `https://image.tmdb.org/t/p/w92/qgZuXiDAkXdARlsDzQwmrCpkqpL.jpg`,
        synopsis : `When her mother disappears while on vacation in Colombia with her new boyfriend, June’s search for answers is hindered by international red tape. Stuck thousands of miles away in Los Angeles, June creatively uses all the latest technology at her fingertips to try and find her before it’s too late. But as she digs deeper, her digital sleuthing raises more questions than answers… and when June unravels secrets about her mom, she discovers that she never really knew her at all.` ,
        genre : `drama`
    },
    { 
        id : 9,
        title : `Stand by Me Doraemon 2 (2020)`,
        price : 50_000,
        trailer : `https://youtu.be/A0wg3Zkxq1c`,
        cover : `https://image.tmdb.org/t/p/w92/vBv8iOFPLnXmtELUjcFc7OKHsR4.jpg`,
        synopsis : `She and her beloved Shizuka are finally married! Nobita’s childhood dream was supposed to come true on his wedding day, but for some reason, Nobita doesn’t show up… One of the most popular episodes from the original story transcends time and space, and leads to Nobita’s future. Doraemon and Nobita’s great adventure begins in order to fulfill his grandmother’s wish to see his bride at first sight. This is a story of tears and bonds, set in the past, present and future.` ,
        genre : `anime`
    },
    { 
        id : 10,
        title : `Attack on Titan: Chronicle (2020)`,
        price : 50_000,
        trailer : `https://youtu.be/s1frQJvFzsM`,
        cover : `https://image.tmdb.org/t/p/w92/10mGHIWt8TkMvnmSlqCChzigwFl.jpg`,
        synopsis : `in the fourth recap movie, episodes 1-59 of the anime are retold, compiling the first three seasons of the anime into one two hour event.`,
        genre : `anime`
    }



]

function listFilm (arr){
    let data = ``
    arr.forEach (element =>{
        data += `<div class="col-md-3 mb-3">
            <div class="card" style="width: 17rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <h6 class="card"><img src="${element.cover}"></h6>
                    <p class="card-text">${element.synopsis.slice(0, 200)}...</p>
                    <a href="${element.trailer}" class="card-link" target="_blank">TRAILER</a>
                    <a href="${element.synopsis}" class="card-link" target="_blank">MORE</a>
                </div>
            </div>
        </div>` 
    })

    document.getElementById(`results`).innerHTML = data
}

listFilm(database)

document.getElementById("buttonsearch").addEventListener("click", search);


function search (){
    // document.getElementById("yak").style.display = "flex"
    let inputSearch = document.getElementById("inputSearch").value

    let filter = database.filter(element => element.genre === inputSearch || element.title.toLocaleLowerCase() === inputSearch.toLocaleLowerCase())

    listFilm(filter)
    // console.log(filter,"hi");
}
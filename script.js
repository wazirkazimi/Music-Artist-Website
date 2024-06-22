//Adding the albums dynamically on the website
//Adding for the Nohay

        async function getAccessToken() {
            const clientId = '5a605dbc304f4ed084bcbb10940ffb24';
            const clientSecret = 'a038c081817541c2a8a9f1ee58f091e8';
            const result = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
                },
                body: 'grant_type=client_credentials'
            });

            const data = await result.json();
            return data.access_token;
        }

        async function getAlbumData(albumIds) {
            const accessToken = await getAccessToken();
            const albumPromises = albumIds.map(id =>
                fetch(`https://api.spotify.com/v1/albums/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                }).then(response => response.json())
            );

            return Promise.all(albumPromises);
        }

        const albumIds = [
            '4Q7cRXio6mF2ImVUCcezPO', // Replace with actual album IDs
            '4czdORdCWP9umpbhFXK2fW',
            '5MS3MvWHJ3lOZPLiMxzOU6',
            '3cf4iSSKd8ffTncbtKljXw',
            "3SpBlxme9WbeQdI9kx7KAV"
            // Add more album IDs as needed
        ];

        getAlbumData(albumIds).then(albums => {
            const albumsDiv = document.getElementById('albums');
            albums.forEach(album => {
                const albumHtml = `
                    <div class="album">
                        <h2>${album.name}</h2>
                        <img src="${album.images[0].url}" alt="${album.name}">
                        <p>Artist: ${album.artists[0].name}</p>
                        <p>Release Date: ${album.release_date}</p>
                        <p>Total Tracks: ${album.total_tracks}</p>
                        <a href="${album.external_urls.spotify}" target="_blank">Listen on Spotify</a>
                    </div>
                `;
                albumsDiv.innerHTML += albumHtml;
            });
        });

//Adding for the manqabat
async function getAccessToken() {
    const clientId = '5a605dbc304f4ed084bcbb10940ffb24';
    const clientSecret = 'a038c081817541c2a8a9f1ee58f091e8';
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}

async function getAlbumData(albumIds) {
    const accessToken = await getAccessToken();
    const albumPromises = albumIds.map(id =>
        fetch(`https://api.spotify.com/v1/albums/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then(response => response.json())
    );

    return Promise.all(albumPromises);
}

const albumIdms = [
    '3qwCuSISrIUpyt6sB5edmQ',
    "06me0leRR3AuF4IFiEytml",
    "7luH8lI8B6c4r3TxLJ2aU1",
    '3CHCm9n05a3tG4cQJ4rJwq',
    '4DjJtllSDzVDBf7PYtsHaT'// Replace with actual album IDs
    // Add more album IDs as needed
];

getAlbumData(albumIdms).then(albums => {
    const albumsDiv = document.getElementById('albums-manqabat');
    albums.forEach(album => {
        const albumHtml = `
            <div class="album">
                <h2>${album.name}</h2>
                <img src="${album.images[0].url}" alt="${album.name}">
                <p>Artist: ${album.artists[0].name}</p>
                <p>Release Date: ${album.release_date}</p>
                <p>Total Tracks: ${album.total_tracks}</p>
                <a href="${album.external_urls.spotify}" target="_blank">Listen on Spotify</a>
            </div>
        `;
        albumsDiv.innerHTML += albumHtml;
    });
});


 // Show button when scrolled down
 window.addEventListener('scroll', function() {
    var button = document.getElementById('stickyBtn');
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
     button.classList.add('show');
    } else {
     button.classList.remove('show');
    }
    });

    // To Open the side  Menu  in small screens
var humburger = document.querySelector('#sideMenu');
humburger.addEventListener("click", () => {
    document.querySelector('.navbar').style.right = "-10px";
    console.log('Hamburger menu opened');
});
// To Close the side  Menu  in small screens

var x = document.querySelector('#close');
x.addEventListener("click", () => {
    document.querySelector('.navbar').style.right = "-400px";
    console.log('Hamburger menu closed');
});
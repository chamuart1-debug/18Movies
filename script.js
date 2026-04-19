// --- 1. මූවි ඩේටාබේස් එක (මෙතනට අලුත් ඒවා දාන්න) ---
const movies = [
    {
        id: "maison-close",
        title: "Maison Close",
        rating: "5.5",
        img: "https://film-adult.com/uploads/posts/2026-04/thumbs/maison-close.webp",
        category: "Action",
        adult: true,
        duration: "02:42:18",
        casting: "Charlie Forde, Lulu Chu, Nathan Bronson",
        description: "Eliza and Nathan maintain a relationship that is both sexually intense and very particular in its structure.",
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2Uvb21hNDE2a3A3cXU0",
        server2: "aHR0cHM6Ly9vbWcxMC5jb20vNC85OTc1Nzcy"
    },
    {
        id: "avatar-2",
        title: "Avatar: The Way of Water",
        rating: "8.5",
        img: "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        category: "Sci-Fi",
        adult: false,
        duration: "03:12:00",
        casting: "Sam Worthington, Zoe Saldana",
        description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.",
        server1: "YUhSMGNITTZMeTloWjJOc2IzVmthRzV2TG1SdmN3PT0=",
        server2: "YUhSMGNITTZMeTloWjJOc2IzVmthRzV2TG1SdmN3PT0="
    }
];

// --- 2. හෝම් පේජ් ලොජික් ---
function displayMovies(data) {
    const grid = document.getElementById('movieGrid');
    if(!grid) return;
    grid.innerHTML = data.map(m => `
        <div class="movie-card" onclick="location.href='details.html?id=${m.id}'">
            <div class="rating"><i class="fas fa-star"></i> ${m.rating}</div>
            <img src="${m.img}">
            <div class="movie-info">${m.title}</div>
        </div>
    `).join('');
}

function searchMovies() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
    displayMovies(filtered);
}

function filterMovies(cat) {
    const filtered = cat === 'All' ? movies : movies.filter(m => m.category === cat);
    displayMovies(filtered);
    // Active button color
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.innerText === cat));
}

// --- 3. ඩීටේල් පේජ් ලොජික් (ඔටෝමැටික් හැදෙන කොටස) ---
function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const m = movies.find(movie => movie.id === id);
    const container = document.getElementById('movieDetailsContainer');

    if (m) {
        container.innerHTML = `
            <div class="movie-post-wrapper">
                <div class="glass-card">
                    <div style="display:flex; flex-wrap:wrap; gap:20px;">
                        <img src="${m.img}" style="width:200px; border-radius:12px;">
                        <div style="flex:1; min-width:250px;">
                            <h1>${m.title} ${m.adult ? '<span style="color:red; font-size:0.6em;">🔞</span>' : ''}</h1>
                            <p><strong>Duration:</strong> ${m.duration}</p>
                            <p><strong>Rating:</strong> ⭐ ${m.rating}</p>
                            <p><strong>Casting:</strong> ${m.casting}</p>
                            <p><strong>Story:</strong> ${m.description}</p>
                        </div>
                    </div>
                    
                    <div style="text-align:center; margin:30px 0;">
                        <p>Watch Below</p>
                        <div class="player-box" style="background:#000; height:300px; display:flex; align-items:center; justify-content:center; border-radius:12px;">
                            <button onclick="handlePlay('${m.server1}')" style="padding:15px 30px; border-radius:50px; cursor:pointer; background:red; color:white; border:none;">PLAY MOVIE</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function handlePlay(link) {
    window.open("https://omg10.com/4/9975772", "_blank"); // Ad link
    setTimeout(() => {
        alert("සර්වර් එක ලෝඩ් වෙමින් පවතී... (මෙහි වීඩියෝ ප්ලේයර් එක එනු ඇත)");
        // වීඩියෝ ප්ලේයර් එක මෙතනට දාන්න පුළුවන්
    }, 1000);
}

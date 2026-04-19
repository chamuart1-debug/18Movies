// 1. මෙතනට ඔයාට ඕන තරම් ෆිල්ම් එකතු කරන්න පුළුවන්. ID එක හැම එකටම වෙනස් වෙන්න ඕනේ.
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

// --- Home Page එකේදී Movies පෙන්වන්න ---
function displayMovies(data) {
    const grid = document.getElementById('movieGrid');
    if(!grid) return;
    
    grid.innerHTML = data.map(m => `
        <div class="movie-card" onclick="goToDetails('${m.id}')">
            <div class="rating"><i class="fas fa-star"></i> ${m.rating}</div>
            <img src="${m.img}" alt="${m.title}">
            <div class="movie-info">${m.title}</div>
        </div>
    `).join('');
}

// Click කරාම Details පේජ් එකට අරන් යන Function එක
function goToDetails(movieId) {
    window.location.href = `details.html?id=${movieId}`;
}

// --- Details පේජ් එකේදී තොරතුරු පෙන්වන්න ---
function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');
    const m = movies.find(movie => movie.id === movieId);
    const container = document.getElementById('detailsContainer');

    if (!container) return;

    if (m) {
        container.innerHTML = `
            <div class="movie-post-wrapper">
                <div class="glass-card">
                    <div class="movie-details-sec" style="display:flex; flex-wrap:wrap; gap:25px;">
                        <img src="${m.img}" class="movie-poster" style="width:180px; border-radius:12px; box-shadow:0 8px 25px rgba(0,0,0,0.7);">
                        <div class="info-sec" style="flex:1; min-width:280px;">
                            <div class="title-wrapper" style="display:flex; align-items:center; gap:10px; margin-bottom:15px;">
                                <h1 style="margin:0;">${m.title}</h1>
                                ${m.adult ? '<span class="adult-tag" style="background:red; padding:3px 8px; border-radius:5px; font-size:12px;">🔞 Only</span>' : ''}
                            </div>
                            <div class="meta-highlight-box" style="background:rgba(255,255,255,0.05); padding:15px; border-radius:10px; margin-bottom:15px;">
                                <div><strong>⏱ Duration:</strong> ${m.duration}</div>
                                <div><strong>⭐ Rating:</strong> ${m.rating}</div>
                                <div><strong>🎭 Casting:</strong> ${m.casting}</div>
                            </div>
                            <div class="movie-description" style="color:#ccc; font-size:14px; line-height:1.6;">
                                <strong>📝 Story:</strong><br>${m.description}
                            </div>
                        </div>
                    </div>

                    <div class="video-pointer-container" style="text-align:center; margin:30px 0;">
                        <p style="color:#00c3ff;">Watch the Full Movie Down Here</p>
                        <div class="arrow"><span></span><span></span><span></span></div>
                    </div>

                    <div class="custom-player-box" id="playerArea" style="width:100%; aspect-ratio:16/9; background:#000; border-radius:12px; display:flex; align-items:center; justify-content:center; overflow:hidden;">
                        <button class="play-button-main" onclick="startPlay()" id="playBtn" style="width:70px; height:70px; border-radius:50%; background:red; color:white; border:none; font-size:24px; cursor:pointer;">▶</button>
                        
                        <div id="serverOptions" style="display:none; gap:15px;">
                            <button onclick="playVideo('${m.server1}')" style="background:rgba(255,255,255,0.1); color:white; padding:10px 20px; border:1px solid #fff; border-radius:20px; cursor:pointer;">🎬 Server 1</button>
                            <button onclick="playVideo('${m.server2}')" style="background:rgba(255,255,255,0.1); color:white; padding:10px 20px; border:1px solid #fff; border-radius:20px; cursor:pointer;">🎬 Server 2</button>
                        </div>

                        <div id="videoIframe" style="display:none; width:100%; height:100%;"></div>
                    </div>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = "<h2 style='text-align:center;'>Movie Not Found!</h2>";
    }
}

// Video Player Logic
function startPlay() {
    window.open("https://omg10.com/4/9975772", "_blank"); // Ad
    document.getElementById('playBtn').style.display = 'none';
    document.getElementById('serverOptions').style.display = 'flex';
}

function playVideo(encodedUrl) {
    const url = atob(encodedUrl);
    document.getElementById('serverOptions').style.display = 'none';
    document.getElementById('videoIframe').style.display = 'block';
    document.getElementById('videoIframe').innerHTML = `<iframe src="${url}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
}

// Search & Filter
function searchMovies() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    displayMovies(movies.filter(m => m.title.toLowerCase().includes(term)));
}

function filterMovies(cat) {
    displayMovies(cat === 'All' ? movies : movies.filter(m => m.category === cat));
}

// --- 1. Movies Database ---
const movies = [
    {
        id: "maison-close",
        title: "Maison Close",
        rating: "5.5",
        img: "https://film-adult.com/uploads/posts/2026-04/thumbs/maison-close.webp",
        category: "Action",
        duration: "02:42:18",
        casting: "Charlie Forde, Lulu Chu",
        description: "Eliza and Nathan maintain a relationship that is both sexually intense and very particular in its structure.",
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2Uvb21hNDE2a3A3cXU0", 
        server2: "aHR0cHM6Ly9vbWcxMC5jb20vNC85OTc1Nzcy",
        telegramLink: "https://t.me/your_channel",
        showPlayer: true,  // ප්ලේයර් එක පෙන්වන්න
        showTelegram: true // ටෙලිග්‍රෑම් බටන් එක පෙන්වන්න
    },
    {
        id: "interstellar",
        title: "Interstellar",
        rating: "8.7",
        img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        category: "Sci-Fi",
        duration: "02:49:00",
        casting: "Matthew McConaughey",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        server1: "aHR0cHM6Ly9leGFtcGxlLmNvbS8x",
        server2: "aHR0cHM6Ly9leGFtcGxlLmNvbS8y",
        telegramLink: "https://t.me/your_channel",
        showPlayer: true,
        showTelegram: false
    }
];

// --- 2. Search & Filter Logic ---
function displayMovies(data) {
    const grid = document.getElementById('movieGrid');
    if(!grid) return;
    grid.innerHTML = data.map(m => `
        <div class="movie-card" onclick="window.location.href='details.html?id=${m.id}'">
            <div class="rating"><i class="fas fa-star"></i> ${m.rating}</div>
            <img src="${m.img}" alt="${m.title}">
            <div class="movie-info">${m.title}</div>
        </div>
    `).join('');
}

function searchMovies() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    
    if (term.length < 1) {
        suggestions.style.display = 'none';
        return;
    }

    const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
    
    if (filtered.length > 0) {
        suggestions.style.display = 'block';
        suggestions.innerHTML = filtered.map(m => `
            <div class="suggestion-item" onclick="window.location.href='details.html?id=${m.id}'">
                <img src="${m.img}" width="40">
                <span>${m.title}</span>
            </div>
        `).join('');
    } else {
        suggestions.style.display = 'none';
    }
}

function filterMovies(cat) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    const filtered = cat === 'All' ? movies : movies.filter(m => m.category === cat);
    displayMovies(filtered);
}

// --- 3. Details Page Logic ---
let adClicked = { server1: false, server2: false, telegram: false, playBtn: false };

function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');
    const m = movies.find(movie => movie.id === movieId);
    const container = document.getElementById('detailsContainer');

    if (!container || !m) return;

    container.innerHTML = `
        <div class="movie-post-wrapper fade-in">
            <div class="glass-card">
                <div class="movie-content">
                    <div class="poster-container">
                        <img src="${m.img}" class="movie-poster">
                    </div>
                    <div class="info-sec">
                        <h1>${m.title}</h1>
                        <div class="cat-tags">
                            <span class="clickable-cat" onclick="window.location.href='index.html?cat=${m.category}'">${m.category}</span>
                        </div>
                        <div class="meta-highlight-box">
                            <p><i class="fas fa-clock"></i> <b>Duration:</b> ${m.duration}</p>
                            <p><i class="fas fa-star"></i> <b>Rating:</b> ${m.rating}</p>
                            <p><i class="fas fa-users"></i> <b>Casting:</b> ${m.casting}</p>
                        </div>
                        <div class="story-box">
                            <p>${m.description}</p>
                        </div>
                    </div>
                </div>

                <!-- Action Section -->
                <div class="player-section">
                    ${m.showPlayer ? `
                        <div class="watch-hint">
                            <p>Watch Video Below</p>
                            <i class="fas fa-chevron-down animated-arrow"></i>
                        </div>
                        <div class="modern-player" id="playerArea">
                            <div id="playOverlay" class="play-overlay">
                                <button class="glow-play-btn" onclick="handlePlayClick()">
                                    <i class="fas fa-play"></i>
                                </button>
                            </div>
                            <div id="serverStep" style="display:none;" class="server-step">
                                <button id="btn-srv1" class="srv-btn" onclick="handleServer('server1', '${m.server1}')">Server 1</button>
                                <button id="btn-srv2" class="srv-btn" onclick="handleServer('server2', '${m.server2}')">Server 2</button>
                            </div>
                            <div id="videoContainer" style="display:none;" class="video-container"></div>
                        </div>
                    ` : ''}

                    ${m.showTelegram ? `
                        <div class="tg-section">
                            <button id="tg-btn" class="telegram-btn" onclick="handleTelegram('${m.telegramLink}')">
                                <i class="fab fa-telegram"></i> Download via Telegram
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <!-- Related Movies -->
            <div class="related-section">
                <h2 class="section-title">You Might Also Like</h2>
                <div class="movie-grid">
                    ${movies.filter(item => item.category === m.category && item.id !== m.id).slice(0, 10).map(r => `
                        <div class="movie-card" onclick="window.location.href='details.html?id=${r.id}'">
                            <img src="${r.img}">
                            <div class="movie-info">${r.title}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// --- 4. Ad Logic & Interactions ---
const AD_URL = "https://omg10.com/4/9975772";

function handlePlayClick() {
    if (!adClicked.playBtn) {
        window.open(AD_URL, "_blank");
        adClicked.playBtn = true;
    } else {
        document.getElementById('playOverlay').style.display = 'none';
        document.getElementById('serverStep').style.display = 'flex';
    }
}

function handleServer(srvKey, encodedUrl) {
    if (!adClicked[srvKey]) {
        window.open(AD_URL, "_blank");
        adClicked[srvKey] = true;
        document.getElementById(`btn-${srvKey}`).classList.add('clicked');
    } else {
        const decodedUrl = atob(encodedUrl);
        const videoContainer = document.getElementById('videoContainer');
        document.getElementById('serverStep').style.display = 'none';
        videoContainer.style.display = 'block';
        videoContainer.innerHTML = `<iframe src="${decodedUrl}" frameborder="0" allowfullscreen></iframe>`;
    }
}

function handleTelegram(link) {
    if (!adClicked.telegram) {
        window.open(AD_URL, "_blank");
        adClicked.telegram = true;
        document.getElementById('tg-btn').classList.add('clicked');
    } else {
        window.location.href = link;
    }
}

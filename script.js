const movies = [
    {
        id: "maison-close",
        title: "Maison Close (2024)",
        rating: "9.0",
        quality: "WEB",
        img: "https://film-adult.com/uploads/posts/2026-04/thumbs/maison-close.webp",
        category: "Action",
        duration: "02:42:18",
        casting: "Charlie Forde, Lulu Chu",
        description: "Eliza and Nathan maintain a relationship that is both sexually intense and very particular in its structure.",
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2Uvb21hNDE2a3A3cXU0", 
        server2: "aHR0cHM6Ly9vbWcxMC5jb20vNC85OTc1Nzcy",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: true
    },
    {
        id: "avatar-fire",
        title: "Avatar: Fire and Ash",
        rating: "7.4",
        quality: "WEB",
        img: "https://m.media-amazon.com/images/M/MV5BMjA3Njg2NjYxM15BMl5BanBnXkFtZTgwMjQyMzU3NzM@._V1_.jpg",
        category: "Sci-Fi",
        duration: "03:10:00",
        casting: "Sam Worthington",
        description: "The next chapter in the Avatar saga explores new tribes of Pandora.",
        server1: "aHR0cHM6Ly9leGFtcGxlLmNvbS8x",
        server2: "aHR0cHM6Ly9leGFtcGxlLmNvbS8y",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false
    }
];

// --- Home Page Logic ---
function displayMovies(data) {
    const grid = document.getElementById('movieGrid');
    if(!grid) return;
    grid.innerHTML = data.map(m => `
        <div class="movie-card" onclick="window.location.href='details.html?id=${m.id}'">
            <div class="quality-badge">${m.quality}</div>
            <div class="rating"><i class="fas fa-star"></i> ${m.rating}</div>
            <img src="${m.img}" alt="${m.title}">
            <div class="movie-info">${m.title}</div>
        </div>
    `).join('');
}

function searchMovies() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    if (term.length < 1) { suggestions.style.display = 'none'; return; }

    const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
    suggestions.style.display = filtered.length ? 'block' : 'none';
    suggestions.innerHTML = filtered.map(m => `
        <div class="suggestion-item" onclick="window.location.href='details.html?id=${m.id}'">
            <img src="${m.img}" width="30">
            <span>${m.title}</span>
        </div>
    `).join('');
}

// --- Details Page Logic ---
let adClicked = { server1: false, server2: false, telegram: false, playBtn: false };

function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const m = movies.find(movie => movie.id === params.get('id'));
    const container = document.getElementById('detailsContainer');
    if (!container || !m) return;

    container.innerHTML = `
        <div class="movie-post-wrapper fade-in">
            <div class="glass-card">
                <div class="movie-content">
                    <div class="poster-container-detail">
                        <img src="${m.img}" class="movie-poster">
                    </div>
                    <div class="info-sec">
                        <h1>${m.title}</h1>
                        <div class="cat-tags">
                            <span class="glass-cat" onclick="window.location.href='index.html?cat=${m.category}'">${m.category}</span>
                        </div>
                        <div class="meta-highlight-box">
                            <p><i class="fas fa-clock"></i> <b>Duration:</b> ${m.duration}</p>
                            <p><i class="fas fa-star" style="color:#ffcc00"></i> <b>Rating:</b> ${m.rating}</p>
                            <p><i class="fas fa-users"></i> <b>Casting:</b> ${m.casting}</p>
                        </div>
                        <div class="story-box">
                            <p>${m.description}</p>
                        </div>
                    </div>
                </div>

                <div class="player-section">
                    ${m.showPlayer ? `
                        <div class="watch-hint">
                            <p>WATCH VIDEO BELOW</p>
                            <i class="fas fa-chevron-down animated-arrow"></i>
                        </div>
                        <div class="modern-player" id="playerArea">
                            <div id="playOverlay" class="play-overlay">
                                <button class="glow-play-btn" onclick="handlePlayClick()">
                                    <i class="fas fa-play"></i>
                                </button>
                            </div>
                            <div id="serverStep" style="display:none;" class="server-step">
                                <button id="btn-srv1" class="srv-btn glass-btn" onclick="handleServer('server1', '${m.server1}')">SERVER 1</button>
                                <button id="btn-srv2" class="srv-btn glass-btn" onclick="handleServer('server2', '${m.server2}')">SERVER 2</button>
                            </div>
                            <div id="videoContainer" style="display:none;" class="video-container"></div>
                        </div>
                    ` : ''}

                    ${m.showTelegram ? `
                        <div class="tg-section">
                            <button id="tg-btn" class="telegram-btn" onclick="handleTelegram('${m.telegramLink}')">
                                <i class="fab fa-telegram"></i> DOWNLOAD VIA TELEGRAM
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>

            <div class="related-section">
                <h2 class="section-title">YOU MIGHT ALSO LIKE</h2>
                <div class="movie-grid">
                    ${movies.filter(item => item.category === m.category && item.id !== m.id).slice(0, 10).map(r => `
                        <div class="movie-card" onclick="window.location.href='details.html?id=${r.id}'">
                            <div class="quality-badge">${r.quality}</div>
                            <div class="rating"><i class="fas fa-star"></i> ${r.rating}</div>
                            <img src="${r.img}">
                            <div class="movie-info">${r.title}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function handlePlayClick() {
    if (!adClicked.playBtn) { window.open("https://omg10.com/4/9975772", "_blank"); adClicked.playBtn = true; }
    else { document.getElementById('playOverlay').style.display = 'none'; document.getElementById('serverStep').style.display = 'flex'; }
}

function handleServer(srvKey, encodedUrl) {
    if (!adClicked[srvKey]) { window.open("https://omg10.com/4/9975772", "_blank"); adClicked[srvKey] = true; document.getElementById(`btn-${srvKey}`).style.background = "#ff9800"; }
    else {
        const decodedUrl = atob(encodedUrl);
        document.getElementById('serverStep').style.display = 'none';
        const vc = document.getElementById('videoContainer');
        vc.style.display = 'block';
        vc.innerHTML = `<iframe src="${decodedUrl}" frameborder="0" allowfullscreen></iframe>`;
    }
}

function handleTelegram(link) {
    if (!adClicked.telegram) { window.open("https://omg10.com/4/9975772", "_blank"); adClicked.telegram = true; document.getElementById('tg-btn').style.background = "#4CAF50"; }
    else { window.location.href = link; }
}

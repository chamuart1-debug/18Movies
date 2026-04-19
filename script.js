// --- 1. Movies Database ---
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
        description: "Eliza and Nathan maintain a relationship that is both sexually intense.",
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2Uvb21hNDE2a3A3cXU0", 
        server2: "aHR0cHM6Ly9vbWcxMC5jb20vNC85OTc1Nzcy",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: true,
        dateAdded: "2024-03-20"
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
        showTelegram: false,
        dateAdded: "2024-03-21"
    }
];

// --- 2. Navigation & Search Logic ---
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    if (!searchBar) return;
    searchBar.classList.toggle('active');
    if(searchBar.classList.contains('active')) {
        const input = document.getElementById('searchInput');
        if (input) input.focus();
    }
}

function searchMovies() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    if (!suggestions) return;
    
    if (term.length < 1) { 
        suggestions.style.display = 'none'; 
        return; 
    }

    const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
    suggestions.style.display = filtered.length ? 'block' : 'none';
    suggestions.innerHTML = filtered.map(m => `
        <div class="suggestion-item" onclick="window.location.href='details.html?id=${m.id}'">
            <img src="${m.img}" width="30" height="40" style="object-fit:cover;">
            <span>${m.title}</span>
        </div>
    `).join('');
}

// --- 3. Home Page Render Logic ---
function renderHome() {
    const container = document.getElementById('homeContent');
    if(!container) return;
    
    let html = '';

    // A. Latest 20 Movies
    const latest = [...movies].reverse().slice(0, 20);
    html += renderSection("RECENTLY ADDED", latest, "All");

    // B. Group by Categories
    const categories = [...new Set(movies.map(m => m.category))];
    categories.forEach(cat => {
        const catMovies = movies.filter(m => m.category === cat).slice(0, 20);
        html += renderSection(cat.toUpperCase(), catMovies, cat);
    });

    container.innerHTML = html;
}

function renderSection(title, data, catName) {
    return `
        <div class="section-container">
            <h2 class="section-title">${title}</h2>
            <div class="movie-grid">
                ${data.map(m => `
                    <div class="movie-card" onclick="window.location.href='details.html?id=${m.id}'">
                        <div class="quality-badge">${m.quality}</div>
                        <div class="rating"><i class="fas fa-star"></i> ${m.rating}</div>
                        <img src="${m.img}" loading="lazy">
                        <div class="movie-info">${m.title}</div>
                    </div>
                `).join('')}
            </div>
            <button class="view-all-btn" onclick="viewAll('${catName}')">VIEW ALL ${title}</button>
        </div>
    `;
}

function viewAll(cat) {
    const grid = document.getElementById('homeContent');
    if (!grid) return;
    const filtered = cat === 'All' ? movies : movies.filter(m => m.category === cat);
    grid.innerHTML = `
        <div class="section-container">
            <h2 class="section-title">Showing: ${cat}</h2>
            <div class="movie-grid">
                ${filtered.map(m => `
                    <div class="movie-card" onclick="window.location.href='details.html?id=${m.id}'">
                        <div class="quality-badge">${m.quality}</div>
                        <div class="rating"><i class="fas fa-star"></i> ${m.rating}</div>
                        <img src="${m.img}">
                        <div class="movie-info">${m.title}</div>
                    </div>
                `).join('')}
            </div>
            <button class="view-all-btn" onclick="window.location.reload()">BACK TO HOME</button>
        </div>
    `;
    window.scrollTo(0,0);
}

// --- 4. Details Page & Fake Player Logic ---
let adState = 0; 

function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');
    const m = movies.find(movie => movie.id === movieId);
    const container = document.getElementById('detailsContainer');
    if (!container || !m) return;

    container.innerHTML = `
        <div class="movie-post-wrapper fade-in">
            <div class="glass-card">
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
                    </div>
                    <div class="story-box"><p>${m.description}</p></div>
                </div>

                <div class="player-section">
                    <!-- Online Player Section -->
                    ${m.showPlayer ? `
                        <div class="watch-hint">
                            <p>WATCH VIDEO BELOW</p>
                            <i class="fas fa-chevron-down animated-arrow"></i>
                        </div>
                        <div class="modern-player" id="playerArea">
                            <div id="fakeUI" class="play-overlay">
                                <button class="glow-play-btn" onclick="handleFakePlayer('${m.server1}')">
                                    <i class="fas fa-play"></i>
                                </button>
                            </div>
                            <div id="realVideo" style="display:none;" class="video-container"></div>
                        </div>
                    ` : ''}

                    <!-- Telegram Button Section (මෙය අලුතින් එක් කරන ලදී) -->
                    ${m.showTelegram ? `
                        <div class="tg-section" style="margin-top: 30px;">
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
                    ${movies.filter(x => x.category === m.category && x.id !== m.id).slice(0, 10).map(r => `
                        <div class="movie-card" onclick="window.location.href='details.html?id=${r.id}'">
                            <div class="quality-badge">${r.quality}</div>
                            <img src="${r.img}"><div class="movie-info">${r.title}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Telegram Click Logic
let tgAdClicked = false;
function handleTelegram(link) {
    const AD_URL = "https://omg10.com/4/9975772";
    const btn = document.getElementById('tg-btn');
    
    if (!tgAdClicked) {
        window.open(AD_URL, "_blank");
        tgAdClicked = true;
        if(btn) {
            btn.style.background = "#4CAF50"; // පාට වෙනස් කිරීම
            btn.innerHTML = "<i class='fas fa-check-circle'></i> CLICK AGAIN TO DOWNLOAD";
        }
    } else {
        window.location.href = link;
    }
}

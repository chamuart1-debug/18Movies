// ============================================================
// CINEWAVE — script.js  (Clean, error-free, production build)
// ============================================================

// --- 1. MOVIES DATABASE ---
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
        description: "Eliza and Nathan maintain a relationship that is both emotionally charged and deeply complex — a story of passion, secrets, and unexpected choices that will keep you gripped till the final frame.",
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2Uvb21hNDE2a3A3cXU0",
        server2: "aHR0cHM6Ly9vbWcxMC5jb20vNC85OTc1Nzcy",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: true,
        dateAdded: "2026-04-18"
    },
    {
        id: "40-years-old-wife",
        title: "40 years old, My Wife With no Panties (2017)",
        rating: "7.6",
        quality: "FHD 1080p",
        img: "https://film-adult.com/uploads/posts/2019-09/1568362060_40-years-old-my-wife-with-no-panties.webp",
        category: "Russian Porn",
        duration: "01:53:22",
        casting: "Mariska, Rose Valérie, Amber Jayne, Loren Minardi, Rico Simmons",
        description: "Mariska and Rico form a united couple. But their busy professional life took precedence over the fire and the passion of their young years of marriage. While they go to a dinner at friends home, a simple little oversight will break their habits. Mariska didn’t put on panties. This situation gave rise to Rico's desire to satisfy new exhibitionist and libertine fantasies.",
        // Server 1: https://hgcloud.to/e/2lydmhci8v6n
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvMmx5ZG1oY2k4djZu", 
        // Server 2: https://playmogo.com/e/k1d0c4luvy4gjy1raws0llcxg6fleare
        server2: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS9rMWQwYzRsdXZ5NGdqeTlyYXdzMGxsY3hnNmZsZWFyZQ==",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: true,
        dateAdded: "2026-04-19"
    },
    // 🎬 Add more movies here following the same structure
];

// ============================================================
// --- 2. UTILITY HELPERS ---
// ============================================================

/** Decode a base64 URL string */
function decodeUrl(b64) {
    try { return atob(b64); } catch (e) { return ""; }
}

/** Get quality badge class */
function getQualityClass(q) {
    const map = { "BLURAY": "bluray", "BLU-RAY": "bluray", "WEB": "web", "CAM": "cam", "HD": "hd" };
    return map[(q || "").toUpperCase()] || "web";
}

/** Sort movies newest first by dateAdded */
function sortByDate(arr) {
    return [...arr].sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
}

// ============================================================
// --- 3. HEADER / SEARCH LOGIC ---
// ============================================================

function toggleSearch() {
    const wrapper = document.getElementById("searchBar");
    if (!wrapper) return;
    wrapper.classList.toggle("active");
    if (wrapper.classList.contains("active")) {
        const inp = document.getElementById("searchInput");
        if (inp) inp.focus();
    } else {
        // Clear and hide suggestions when closing
        const sug = document.getElementById("suggestions");
        if (sug) { sug.style.display = "none"; sug.innerHTML = ""; }
    }
}

function searchMovies() {
    const input = document.getElementById("searchInput");
    const suggestions = document.getElementById("suggestions");
    if (!input || !suggestions) return;

    const term = input.value.trim().toLowerCase();
    if (term.length < 1) {
        suggestions.style.display = "none";
        return;
    }

    const filtered = movies.filter(m => m.title.toLowerCase().includes(term));

    if (!filtered.length) {
        suggestions.style.display = "block";
        suggestions.innerHTML = `<div class="suggestion-item" style="color:var(--text-muted); cursor:default;">
            <i class="fas fa-film" style="color:var(--accent);"></i> No results found
        </div>`;
        return;
    }

    suggestions.style.display = "block";
    suggestions.innerHTML = filtered.slice(0, 6).map(m => `
        <div class="suggestion-item" onclick="window.location.href='details.html?id=${m.id}'">
            <img src="${m.img}" alt="${m.title}" loading="lazy">
            <div>
                <div style="font-weight:600; font-size:0.82rem;">${m.title}</div>
                <div style="font-size:0.72rem; color:var(--text-muted);">${m.category} &bull; ${m.rating} ★</div>
            </div>
        </div>
    `).join("");
}

// Close suggestions when clicking outside
document.addEventListener("click", function (e) {
    const container = document.querySelector(".search-container");
    const sug = document.getElementById("suggestions");
    if (sug && container && !container.contains(e.target)) {
        sug.style.display = "none";
    }
});

// ============================================================
// --- 4. HOME PAGE RENDER LOGIC ---
// ============================================================

function renderHome() {
    const container = document.getElementById("homeContent");
    if (!container) return;

    let html = "";

    // Recently Added — latest 20 movies
    const latest = sortByDate(movies).slice(0, 20);
    html += renderSection("Recently Added", "🔥", latest, "All");

    // Category sections
    const categories = [...new Set(movies.map(m => m.category))];
    const catIcons = { "Action": "⚡", "Sci-Fi": "🚀", "Drama": "🎭", "Comedy": "😄", "Horror": "👻", "Romance": "💕", "Thriller": "🔪", "Animation": "🎨" };

    categories.forEach(cat => {
        const catMovies = movies.filter(m => m.category === cat).slice(0, 20);
        const icon = catIcons[cat] || "🎬";
        html += renderSection(cat, icon, catMovies, cat);
    });

    container.innerHTML = html;
}

function renderSection(title, icon, data, catName) {
    if (!data.length) return "";
    return `
        <div class="section-container fade-in">
            <div class="section-header">
                <h2 class="section-title">${icon ? icon + " " : ""}${title.toUpperCase()}</h2>
                <span class="see-all-link" onclick="viewAll('${catName}', '${title}')">See All →</span>
            </div>
            <div class="movie-grid">
                ${data.map(m => renderCard(m)).join("")}
            </div>
            <button class="view-all-btn" onclick="viewAll('${catName}', '${title}')">
                <i class="fas fa-th-large"></i> VIEW ALL ${title.toUpperCase()}
            </button>
        </div>
    `;
}

function renderCard(m) {
    return `
        <div class="movie-card slide-up" onclick="window.location.href='details.html?id=${m.id}'">
            <div class="card-img-wrapper">
                <span class="quality-badge ${getQualityClass(m.quality)}">${m.quality || "WEB"}</span>
                <span class="rating"><i class="fas fa-star"></i>${m.rating}</span>
                <img src="${m.img}" alt="${m.title}" loading="lazy">
                <div class="card-overlay">
                    <div style="width:100%; text-align:center;">
                        <div class="card-play-icon"><i class="fas fa-play"></i></div>
                    </div>
                </div>
            </div>
            <div class="movie-info">${m.title}</div>
        </div>
    `;
}

function viewAll(cat, title) {
    const container = document.getElementById("homeContent");
    if (!container) return;

    const filtered = cat === "All" ? sortByDate(movies) : movies.filter(m => m.category === cat);

    container.innerHTML = `
        <button class="back-btn" onclick="window.location.reload()">
            <i class="fas fa-arrow-left"></i> Back to Home
        </button>
        <div class="section-container fade-in">
            <div class="section-header">
                <h2 class="section-title">🎬 ${(title || cat).toUpperCase()}</h2>
                <span style="font-size:0.8rem; color:var(--text-muted);">${filtered.length} titles</span>
            </div>
            <div class="movie-grid">
                ${filtered.map(m => renderCard(m)).join("")}
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// --- 5. DETAILS PAGE LOGIC ---
// ============================================================

let adState = 0;
let tgAdClicked = false;
let currentServer = 1;

function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("id");
    const m = movies.find(movie => movie.id === movieId);
    const container = document.getElementById("detailsContainer");
    if (!container) return;

    if (!m) {
        container.innerHTML = `
            <div class="empty-state fade-in" style="padding: 80px 20px;">
                <i class="fas fa-film"></i>
                <p>Movie not found. <a href="index.html" style="color:var(--accent);">Go Home</a></p>
            </div>
        `;
        return;
    }

    // Page title
    document.title = `${m.title} - CineWave`;

    // Build server buttons HTML if player is shown
    const serverBtnsHTML = m.showPlayer ? `
        <div class="server-buttons">
            ${m.server1 ? `<button class="server-btn active" id="sv1-btn" onclick="switchServer(1, '${m.server1}')"><i class="fas fa-server"></i> Server 1</button>` : ""}
            ${m.server2 ? `<button class="server-btn" id="sv2-btn" onclick="switchServer(2, '${m.server2}')"><i class="fas fa-server"></i> Server 2</button>` : ""}
        </div>
    ` : "";

    container.innerHTML = `
        <div class="movie-post-wrapper fade-in">
            <div class="detail-hero-bg" style="background-image: url('${m.img}');"></div>

            <div class="glass-card">
                <div class="detail-top">
                    <div class="poster-container-detail">
                        <img src="${m.img}" alt="${m.title}" loading="lazy">
                    </div>

                    <div class="info-sec">
                        <h1>${m.title}</h1>

                        <div class="cat-tags">
                            <span class="glass-cat" onclick="window.location.href='index.html'">${m.category}</span>
                            <span class="glass-cat" style="border-color: #ffd700; color: #ffd700;">${m.quality}</span>
                        </div>

                        <div class="meta-highlight-box">
                            <div class="meta-item">
                                <i class="fas fa-clock"></i>
                                <span><b>${m.duration}</b></span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-star star-icon"></i>
                                <span><b>${m.rating} / 10</b></span>
                            </div>
                        </div>

                        ${m.casting ? `<p class="casting-box"><i class="fas fa-users" style="color:var(--accent); margin-right:6px;"></i><b>Cast:</b> ${m.casting}</p>` : ""}

                        <div class="story-box"><p>${m.description}</p></div>
                    </div>
                </div>

                <div class="player-section">
                    ${m.showPlayer ? `
                        <div class="watch-hint">
                            <p>Watch Online</p>
                            <i class="fas fa-chevron-down animated-arrow"></i>
                        </div>
                        <div class="modern-player" id="playerArea">
                            <div id="fakeUI" class="play-overlay">
                                <div class="play-overlay-bg-img" style="background-image: url('${m.img}');"></div>
                                <button class="glow-play-btn" id="playBtn" onclick="handleFakePlayer('${m.server1}')">
                                    <i class="fas fa-play"></i> PLAY NOW
                                </button>
                                <span class="play-note">Click to load the stream</span>
                            </div>
                            <div id="realVideo" style="display:none;" class="video-container"></div>
                        </div>
                        ${serverBtnsHTML}
                    ` : `
                        <div class="empty-state">
                            <i class="fas fa-video-slash"></i>
                            <p>Online streaming not available for this title.</p>
                        </div>
                    `}

                    ${m.showTelegram ? `
                        <div class="tg-section">
                            <p class="tg-label"><i class="fas fa-download"></i> Download Options</p>
                            <button id="tg-btn" class="telegram-btn" onclick="handleTelegram('${m.telegramLink}')">
                                <i class="fab fa-telegram"></i> Download via Telegram
                            </button>
                        </div>
                    ` : ""}
                </div>
            </div>

            <div class="related-section">
                ${buildRelated(m)}
            </div>
        </div>
    `;
}

function buildRelated(m) {
    const related = movies.filter(x => x.category === m.category && x.id !== m.id).slice(0, 12);
    if (!related.length) return "";
    return `
        <div class="section-container" style="padding-left:0; padding-right:0;">
            <div class="section-header">
                <h2 class="section-title">YOU MIGHT ALSO LIKE</h2>
            </div>
            <div class="movie-grid">
                ${related.map(r => renderCard(r)).join("")}
            </div>
        </div>
    `;
}

// ============================================================
// --- 6. AD & INTERACTION LOGIC ---
// ============================================================

const AD_URL = "https://omg10.com/4/9975772";

/** Fake player — two-click with ad */
function handleFakePlayer(encodedUrl) {
    const playBtn = document.getElementById("playBtn");

    if (adState === 0) {
        // First click: open ad, change button state
        window.open(AD_URL, "_blank");
        adState = 1;
        if (playBtn) {
            playBtn.innerHTML = "<i class='fas fa-server'></i> LOAD SERVERS";
            playBtn.style.background = "linear-gradient(135deg, #ff6b6b, #ff8e53)";
        }
        const note = document.querySelector(".play-note");
        if (note) note.textContent = "Ad opened. Click again to load the player.";

    } else if (adState === 1) {
        // Second click: open ad again then load iframe
        window.open(AD_URL, "_blank");
        adState = 2;

        const decoded = decodeUrl(encodedUrl);
        if (!decoded) return;

        const fakeUI = document.getElementById("fakeUI");
        const realVideo = document.getElementById("realVideo");
        if (fakeUI) fakeUI.style.display = "none";
        if (realVideo) {
            realVideo.style.display = "block";
            realVideo.innerHTML = `<iframe src="${decoded}" frameborder="0" allowfullscreen allow="autoplay; fullscreen"></iframe>`;
        }
    }
}

/** Switch between servers (after player is loaded) */
function switchServer(num, encodedUrl) {
    if (adState < 2) {
        // Force load with chosen server
        handleFakePlayer(encodedUrl);
        return;
    }

    const decoded = decodeUrl(encodedUrl);
    if (!decoded) return;

    const realVideo = document.getElementById("realVideo");
    if (realVideo) {
        realVideo.style.display = "block";
        realVideo.innerHTML = `<iframe src="${decoded}" frameborder="0" allowfullscreen allow="autoplay; fullscreen"></iframe>`;
    }

    // Update active button style
    document.querySelectorAll(".server-btn").forEach(btn => btn.classList.remove("active"));
    const active = document.getElementById("sv" + num + "-btn");
    if (active) active.classList.add("active");
}

/** Telegram button — two-click with ad */
function handleTelegram(link) {
    const btn = document.getElementById("tg-btn");

    if (!tgAdClicked) {
        window.open(AD_URL, "_blank");
        tgAdClicked = true;
        if (btn) {
            btn.classList.add("clicked");
            btn.innerHTML = "<i class='fas fa-check-circle'></i> CLICK AGAIN TO DOWNLOAD";
        }
    } else {
        window.location.href = link;
    }
}

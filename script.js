// --- 1. Movies Database ---
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
        // Base64 Encoded Links
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2Uvb21hNDE2a3A3cXU0", 
        server2: "aHR0cHM6Ly9vbWcxMC5jb20vNC85OTc1Nzcy"
    }
];

// --- 2. Home Page Logic ---
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

// --- 3. Details Page Logic (Modern UI) ---
function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');
    const m = movies.find(movie => movie.id === movieId);
    const container = document.getElementById('detailsContainer');

    if (!container) return;

    if (m) {
        container.innerHTML = `
            <div class="movie-post-wrapper">
                <div class="glass-card main-card">
                    <div class="movie-content">
                        <div class="poster-container">
                            <img src="${m.img}" class="movie-poster">
                            <div class="quality-badge">4K HDR</div>
                        </div>
                        
                        <div class="info-sec">
                            <div class="title-header">
                                <h1>${m.title}</h1>
                                ${m.adult ? '<span class="adult-tag">🔞 18+</span>' : ''}
                            </div>
                            
                            <div class="meta-highlight-box">
                                <div class="meta-item"><i class="fas fa-clock"></i> <strong>Duration:</strong> <span>${m.duration}</span></div>
                                <div class="meta-item"><i class="fas fa-star"></i> <strong>Rating:</strong> <span class="rating-val">${m.rating}</span></div>
                                <div class="meta-item"><i class="fas fa-users"></i> <strong>Casting:</strong> <span>${m.casting}</span></div>
                            </div>

                            <div class="story-box">
                                <h3><i class="fas fa-book-open"></i> Story Line</h3>
                                <p>${m.description}</p>
                            </div>
                        </div>
                    </div>

                    <div class="player-section">
                        <div class="player-header">
                            <p>Select Server to Stream</p>
                            <div class="indicator"><span></span><span></span><span></span></div>
                        </div>

                        <div class="modern-player" id="playerArea">
                            <!-- Start Play Button -->
                            <div id="playOverlay" class="play-overlay">
                                <button class="glow-play-btn" onclick="startStream()">
                                    <i class="fas fa-play"></i>
                                </button>
                                <p>Click to Play</p>
                            </div>

                            <!-- Server Selection (Hidden initially) -->
                            <div id="serverStep" class="server-step" style="display:none;">
                                <button class="srv-btn" onclick="playEncoded('${m.server1}')"><i class="fas fa-server"></i> Server 1</button>
                                <button class="srv-btn" onclick="playEncoded('${m.server2}')"><i class="fas fa-server"></i> Server 2</button>
                            </div>

                            <!-- Video Frame -->
                            <div id="videoContainer" class="video-container" style="display:none;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// --- 4. Decoding & Streaming Logic ---
function startStream() {
    window.open("https://omg10.com/4/9975772", "_blank"); // Ad Link
    document.getElementById('playOverlay').style.display = 'none';
    document.getElementById('serverStep').style.display = 'flex';
}

function playEncoded(encodedUrl) {
    // Base64 Decode මෙතන සිදුවේ
    const decodedUrl = atob(encodedUrl);
    
    const serverStep = document.getElementById('serverStep');
    const videoContainer = document.getElementById('videoContainer');
    const playerArea = document.getElementById('playerArea');

    serverStep.style.display = 'none';
    playerArea.style.background = '#000';
    videoContainer.style.display = 'block';
    
    videoContainer.innerHTML = `
        <iframe src="${decodedUrl}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    `;
}

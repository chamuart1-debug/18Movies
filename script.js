// ============================================================
// GlassWave — script.js  (Clean, error-free, production build)
// ============================================================

// --- 1. MOVIES DATABASE ---
const movies = [
    {
        id: "maison-close",
        title: "Maison Close (2024)",
        rating: "9.0",
        quality: "720",
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
        quality: "FHD",
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
        showTelegram: false,
        dateAdded: "2026-04-19"
    },
    {
        id: "body-heat-2010",
        title: "Body Heat (2010)",
        rating: "7.4",
        quality: "FHD",
        img: "https://film-adult.com/uploads/posts/2021-03/1615621355_body-heat.webp",
        category: "All Sex",
        duration: "02:19:17",
        casting: "Ben English, Bridgette B, Jesse Jane, Katsuni, Kayden Kross, Manuel Ferrara, Mick Blue, Raven Alexis, Riley Steele, Scott Nails, Tommy Gunn",
        description: "Fire has never been so hot since these sexy firefighters took over the station. Dangerous explosions, life or death situations, and powerful desire makes everyone live for the moment. For the first time ever, Digital Playground contract stars Jesse Jane and Kayden Kross sizzle together as a dynamic duo burning up the screen with scorching passion. Riley Steele, Raven Alexis and Katsuni help fuel the flames in an epic orgy atop a fire engine that will make your temperature soar.",
        // Server 1: https://hgcloud.to/e/vsj7cqe8n5li
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvdnNqN2NxZThuNWxp",
        // Server 2: https://playmogo.com/e/65nqpw7q0w2cqk94dwsy8r6nzakxfud5
        server2: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS82NW5xcHc3cTB3MmNxazlkd3N5OHI2bnpha3hmdWQ1",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-19"
    },
    
    {
        id: "horny-hotwife-11",
        title: "Horny Hotwife 11 (2026)",
        rating: "10",
        quality: "HD 720p",
        img: "https://film-adult.com/uploads/posts/2026-04/thumbs/horny-hotwife-11.webp",
        category: "Hotwife",
        duration: "02:02:34",
        casting: "Addis Fouche, Alexa Chains, Cherry Candle, Jennifer White, Charles Dera, Danny Mountain, Isiah Maxwell, Van Wylde",
        description: "Sexy, swinging wifies get set up with new dick by their loving hubbies in 'Horny Hotwife 11'! Director Sid Knox presents four new stories of nonmonogamous nookie that leaves everyone more than satisfied. Cherry Candle's cop husband introduces her to the tallest leprechaun she's ever met. Addis Fouche rides Isiah Maxwell into the sunset.",
        // Server 1: https://hgcloud.to/e/9fmn5k0t8s2d
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvOWZtbjVrMHQ4czJk",
        // Server 2: https://playmogo.com/e/qir7n781fn5o
        server2: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS9xaXI3bjc4MWZuNW8=",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-19"
    },

    {
        id: "irresistible-beauties-13",
        title: "Irresistible Beauties 13 (2026)",
        rating: "6.6",
        quality: "HD 720p",
        img: "https://film-adult.com/uploads/posts/2026-04/thumbs/irresistible-beauties-13.webp",
        category: "Couples",
        duration: "02:44:57",
        casting: "Joe Di Marco, Rossa Vaxx, Una Fairy, Leo Santos, Hailey White, Marco Bull, Nata Gold, Nikoletta Queen",
        description: "If Hailey White, Nata Gold, Nikoletta Queen, Rossa Vaxx, and Una Fairy have one thing in common, it's their irresistible beauty. Blonde or brunette, each in their own way, but all spectacular. Nata Gold plays hard to get, but in the end, if her prince charming is patient and persistent, he'll get his reward. sex addicts proving their wild nature in Irresistible Beauties #13.",
        // Server 1: https://hgcloud.to/e/vwauaq6yy7eb
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvdndhdWFxNnl5N2Vi",
        // Server 2: https://playmogo.com/e/1nh40bhvpgn1
        server2: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS8xbmg0MGJodnBnbjE=",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-19"
    },
    {
        id: "fever-times-2026",
        title: "Fever Times (2026)",
        rating: "6.2",
        quality: "FHD 1080p",
        img: "https://film-adult.com/uploads/posts/2026-04/thumbs/fever-times.webp",
        
        category: "All Sex, Appearance, Big Dicks, Big Tits, Blowjobs, Cumshots, Group Sex, International, Lingerie, Oral, Small Tits, Threesomes",
        duration: "01:37:37",
        casting: "Alice Berry, Juice Jane, Donny Bunny, Joe Di Marco, Lucas Hellminnaar, Mick Shagger",
        description: "In a world full of love and freedom, Jane and Lucas follow their hearts, while Joe's mysterious club brings tension and unexpected encounters, including the beautiful Alice. At home, by the piano, Jane feels her heart race when Lucas walks in... This night will change everything.",
        // Server 1: https://hgcloud.to/e/f0ehuzd8lzbq
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvZjBlaHV6ZDhsemJx",
        // Server 2: https://playmogo.com/e/azwtasviwhee
        server2: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS9hend0YXN2aXdoZWU=",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-20"
    },
	{
        id: "secretaries-in-heat-4",
        title: "Secretaries In Heat 4 (2026)",
        rating: "6.2",
        quality: "FHD 1080p",
        img: "https://film-adult.com/uploads/posts/2026-04/thumbs/secretaries-in-heat-4.webp",
        
        category: "All Sex, Blowjobs, Lingerie, Oral, Secretaries",
        duration: "02:29:21",
        casting: "Alexis James, Blake Blossom, Juliana Marie, Mira Luv, Damon Dice, Danny Mountain, Dante Colle, Milan Ponjevic",
        description: "She's willing to do whatever she needs to get ahead. Her boss is more than willing to provide that opportunity. When a woman has eyes for the man in charge she just might offer her body as well. Intense sex scenes of insatiable lust are all right here in one sexy package.",
        // Server 1: https://hgcloud.to/e/5auj9hoy3vfe
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvNWF1ajlob3kzd mZl",
        // Server 2: https://playmogo.com/e/6j5nd97wzjkt
        server2: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS82ajVuZDk3d3pqa3Q=",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-20"
    },
	
	{
        id: "cheerleaders-in-heat-4",
        title: "Cheerleaders In Heat 4 (2025)",
        rating: "7.2",
        quality: "HD 720p",
        img: "https://film-adult.com/uploads/posts/2025-06/thumbs/cheerleaders-in-heat-4.webp",
        
        category: "All Sex, Teens, Big Dicks",
        duration: "02:12:18",
        casting: "Cecelia Taylor, Selina Imai, Sky Wonderland, Yumi Sin, GI Joey, Max Fills, Victor Ray, Will Pounder",
        description: "Looking so sexy in her outfit. She knows she sparks a deep desire. These girls act on that impulse. They know what they are doing as they tempt and excite the men they desire. Is it even possible to resist Cheerleaders in Heat?",
        // Server 1 (Base64): https://hgcloud.to/e/mmuvdtrr76hr
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvbW11dmR0cnI3Nmhy",
        // Server 2 (Base64): https://s2.filmcdn.top/e/T3NuSUpBUTdMYVJzcEZ5RkxhY2VJQT09
        server2: "aHR0cHM6Ly9zMi5maWxtY2RuLnRvcC9lL1QzTnVTVVBBVzdMWVJzcEZ5RkxhY2VJQT09",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-20"
    },

	{
        id: "lessons-for-lovers-2023",
        title: "Lessons For Lovers (2023)",
        rating: "5.0",
        quality: "HD 720p",
        img: "https://film-adult.com/uploads/posts/2023-01/thumbs/lessons-for-lovers.webp",
        category: "All Sex",
        duration: "01:58:48",
        casting: "Eliza Ibarra, Bella Rolland, April Olsen, Freya Parker, Charlotte Sins, Chad Alva, Nathan Bronson, Charlie Valentine, Amaziing",
        description: "Live, Love & Learn! Lessons For Lovers brings together a massive cast including Eliza Ibarra and Bella Rolland for an unforgettable experience directed by Ernest Greene.",
        // Server 1: https://s2.filmcdn.top/e/eGRJMWRmVnVvamsza0d3U1JtTDlJZz09
        server1: "aHR0cHM6Ly9zMi5maWxtY2RuLnRvcC9lL2VHUkpNMWRmVnVvamsza0d3U1JtTDlJZz09",
        server2: "aHR0cHM6Ly9vbWcxMC5jb20vNC85OTc1Nzcy", // Default Ad/Placeholder Server
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-20"
    },
	
	{
        id: "bedroom-eyes-1997",
        title: "Bedroom Eyes (1997)",
        rating: "7.9",
        quality: "FHD 1080p",
        img: "https://film-adult.com/uploads/posts/2019-05/1558121175_c3ce4ccaf84.webp",

        category: "Anal",
        duration: "01:39:41",
        casting: "Carolyn Monroe, Mary Eleniak, Offilia, Regina, Gloria Green, Nora Forter, Alex Mantegna, Andrew Youngman, Brandon T., John Walton, Rodolphe Antrim",
        description: "Beautiful scenery and excellent quality of the film surpass only the sexual perfection of the women represented. No frills, extra plots. Just beautifully shot, well-set sex scenes, convincingly played by stunning looking girls.",
        // Server 1: https://hgcloud.to/e/1g6qcisnyht8
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvMWc2cWNpc255aHQ4",
        // Server 2: https://playmogo.com/e/fgsoi1dvxmczzanhvnx0pntmugjkzqu0
        server2: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS9mZ3NvaTFkdnhtY3p6YW5odm54MHBudG11Z2prenp1MA==",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-20"
    },
	
	{
        id: "romanian-romance-2020",
        title: "Romanian Romance (2020)",
        rating: "7.3",
        quality: "FHD 1080p",
        img: "https://film-adult.com/uploads/posts/2020-04/1588103336_b4c3a.webp",
        category: "Russian Porn",
        duration: "01:45:45",
        casting: "Ginger Devil, Rose, Cherry Kiss, Lulu Love",
        description: "It’s time for some Bucharest nights and there’s no better place to experience it than Private Gold, Romanian Romance. Meet the spectacular MILF Ginger Devil, tour guide Cherry Kiss, and other beauties in a journey through the city's most passionate encounters.",
        // Server 1: https://s2.filmcdn.top/e/OFRYS3VCY1Z1Mm1Eb1VjbXp6SmxQZz09
        server1: "aHR0cHM6Ly9zMi5maWxtY2RuLnRvcC9lL09GUllTM1ZDWTValidtRWm9VY216ekpsUGc9PQ==",
        server2: "aHR0cHM6Ly9vbWcxMC5jb20vNC85OTc1Nzcy", // Default Ad/Placeholder Server
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-20"
    },
	
	{
        id: "paris-by-night-2021",
        title: "Private Specials: Paris by Night (2021)",
        rating: "7.1",
        quality: "FHD 1080p",
        img: "https://film-adult.com/uploads/posts/2021-04/1619787673_paris-by-night-1080.webp",
        category: "Private",
        duration: "02:06:57",
        casting: "Rachel Adjani, Polly Pons, Lina Luxa, Lauren Walker, Zarah Star",
        description: "Beautiful by day, seductive by night, Paris is the city that never sleeps. Explore the sexiest stories of the city of love, from Rachel Adjani's wild night in Pigalle to Zarah Star's passionate encounters in love hotels.",
        // Server 1: https://s2.filmcdn.top/e/Snd0Mm1COG82SzlvVU5WRDVIQnZjUT09
        server1: "aHR0cHM6Ly9zMi5maWxtY2RuLnRvcC9lL1NuZDAybT態度OG82SzlvVU5WRDVIQnZjUT09",
        server2: "aHR0cHM6Ly9vbWcxMC5jb20vNC85OTc1Nzcy", // Default Ad/Placeholder
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-20"
    },
	
	{
        id: "cleaning-ladies-get-dirty-2026",
        title: "Cleaning Ladies Get Dirty (2026)",
        rating: "6.6",
        quality: "HD 720p",
        img: "https://film-adult.com/uploads/posts/2026-03/thumbs/cleaning-ladies-get-dirty.webp",
        
        category: "All Sex",
        duration: "01:30:18",
        casting: "Tanya Virago, Mackenzie Page, Brendan Raven, Sweet Mery, Lucas Hellminaar, Jonny Oblong",
        description: "Discover a new trend in cleaning: a premium service that goes beyond basic cleaning. These fun and charming housekeepers show how to turn every corner of the home into a pleasant and attractive place.",
        // Server 1: https://hgcloud.to/e/2hpurk13p8hf
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvMmhwdXJrMTNwOGhm",
        // Server 2: https://playmogo.com/e/exqzydv12hos
        server2: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS9leHF6eWR2MTJob3M=",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-20"
    },
	
	{
        id: "me-my-wife-and-another-man-2026",
        title: "Me, My Wife, And Another Man (2026)",
        rating: "6",
        quality: "HD 720p",
        img: "https://film-adult.com/uploads/posts/2026-03/thumbs/me-my-wife-and-another-man.webp",

        category: "Anal",
        duration: "02:37:37",
        casting: "Lexi Lore, Romi Rain, Taylor Wild, Tiny Khloe, Alex Legend, Damon Dice, Dante Colle, Ken Feels, Milan Ponjevic, Nathan Bronson, Nick Strokes, Will Pounder",
        description: "Two is better than one when it comes to a horny hotwife. Two men sharing one sexy woman. What was once a fantasy is now a reality as your once timid wife gives in to her ultimate fantasy of being shared with her husband and another man.",
        // Server 1: https://hgcloud.to/e/n6mc92jm14e4
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvbjZtYzkyam0xNGU0",
        // Server 2: https://playmogo.com/e/3lcx85cuuiyy
        server2: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS8zbGN4ODVjdXVpeXk=",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-20"
    },
	
	{
        id: "please-fuck-my-wife-2026",
        title: "Please Fuck My Wife (2026)",
        rating: "6.7",
        quality: "HD 720p",
        img: "https://film-adult.com/uploads/posts/2026-03/please-fuck-my-wife.webp",
        // සියලුම කැටගරි ඇතුළත් කර ඇත
        category:  "Anal",
        duration: "02:14:29",
        casting: "Richard Glaze, Maddie Wren, Ken Feels, Tess Thomson, Lexi Lore, Ryan Driller, Mike Mancini, Blake Blossom",
        description: "Lexi Lore, Blake Blossom, and newcomers Maddie Wren and Tess Thomson are wives who want more, leading them to establish open relationships. Their husbands are cuckolds who enjoy watching, and the wives love being watched. A story of lies, reality, and ultimate fantasies.",
        // Server 1: https://s2.filmcdn.top/e/eW5iSlBoVUR5c2JpdmFiMVZ5cE5vdz09
        server1: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS84bzhzeG9kcm85MW0=",
        // Server 2: https://hgcloud.to/e/f23kya9mw9gm
        server2: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2UvZjIza3lhOW13OWdt",
        // Server 3 (Extra): https://playmogo.com/e/8o8sxodro91m
        server3: "aHR0cHM6Ly9wbGF5bW9nby5jb20vZS84bzhzeG9kcm85MW0=",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-20"
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
    document.title = `${m.title} - GlassWave`;

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

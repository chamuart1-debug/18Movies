const movies = [
    {
        id: "maison-close",
        title: "Maison Close",
        rating: "5.5",
        img: "https://film-adult.com/uploads/posts/2026-04/thumbs/maison-close.webp",
        category: "Action",
        adult: true,
        duration: "02:42:18",
        casting: "Charlie Forde, Lilly Bell, Lulu Chu, Nathan Bronson",
        description: "Eliza and Nathan maintain a relationship that is both sexually intense and very particular in its structure...",
        server1: "aHR0cHM6Ly9oZ2Nsb3VkLnRvL2Uvb21hNDE2a3A3cXU0", // Base64 Encoded Link
        server2: "aHR0cHM6Ly9vbWcxMC5jb20vNC85OTc1Nzcy"
    },
    // තව ෆිල්ම් මේ වගේම එකතු කරන්න...
];

// index.html හි පෝස්ටර් ක්ලික් කරාම මේ ෆන්ක්ෂන් එක වැඩ කරයි
function goToMovie(id) {
    window.location.href = `movie-details.html?id=${id}`;
}

// Home පේජ් එකේ Display function එක පොඩ්ඩක් වෙනස් කරන්න
function displayMovies(data) {
    movieGrid.innerHTML = data.map(movie => `
        <div class="movie-card" onclick="goToMovie('${movie.id}')">
            <div class="rating"><i class="fas fa-star"></i> ${movie.rating}</div>
            <img src="${movie.img}" alt="${movie.title}">
            <div class="movie-info">${movie.title}</div>
        </div>
    `).join('');
}

const movieGrid = document.getElementById('movieGrid');

// ෆිල්ම් ප්‍රදර්ශනය කිරීමේ ෆන්ක්ෂන් එක
function displayMovies(data) {
    movieGrid.innerHTML = data.map(movie => `
        <div class="movie-card" onclick="goToMovie('${movie.link}')">
            <div class="rating"><i class="fas fa-star"></i> ${movie.rating}</div>
            <img src="${movie.img}" alt="${movie.title}">
            <div class="movie-info">${movie.title}</div>
        </div>
    `).join('');
}

// ෆිල්ම් එක ක්ලික් කරාම අදාළ පේජ් එකට යෑම
function goToMovie(url) {
    window.location.href = url;
}

// කැටගරි අනුව ෆිල්ටර් කිරීම
function filterMovies(category) {
    // ඇනිමේෂන් එක නවත්වන්න
    document.getElementById('categorySlider').style.animation = 'none';
    
    if (category === 'All') {
        displayMovies(movies);
    } else {
        const filtered = movies.filter(m => m.category === category);
        displayMovies(filtered);
    }

    // Active Button එකේ පාට වෙනස් කරන්න
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === category) btn.classList.add('active');
    });
}


// Search Logic
function searchMovies() {
    const term = searchInput.value.toLowerCase();
    const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
    
    if(term.length > 0) {
        suggestionsBox.innerHTML = filtered.map(m => `
            <div class="suggestion-item" onclick="selectMovie('${m.title}')">${m.title}</div>
        `).join('');
    } else {
        suggestionsBox.innerHTML = '';
    }
    displayMovies(filtered);
}

function selectMovie(name) {
    searchInput.value = name;
    suggestionsBox.innerHTML = '';
    searchMovies();
}

// Horizontal Swipe for Categories
const slider = document.getElementById('categorySlider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.animation = 'none'; // Stop auto-scroll on click
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => isDown = false);
slider.addEventListener('mouseup', () => isDown = false);
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// Initial Display
displayMovies(movies);

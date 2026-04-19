// Sample Data (මෙහි ඔයාගේ ෆිල්ම් විස්තර ඇතුළත් කරන්න)
const movies = [
    { title: "Avatar 2", rating: "8.5", img: "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg", category: "Sci-Fi" },
    { title: "John Wick 4", rating: "9.0", img: "https://m.media-amazon.com/images/I/81J1DaRKzUL._AC_UF894,1000_QL80_.jpg", category: "Action" },
    { title: "The Nun", rating: "7.2", img: "https://via.placeholder.com/200x300", category: "Horror" },
    { title: "Inception", rating: "8.8", img: "https://via.placeholder.com/200x300", category: "Sci-Fi" },
    { title: "Deadpool", rating: "8.2", img: "https://via.placeholder.com/200x300", category: "Comedy" },
    { title: "Interstellar", rating: "9.2", img: "https://via.placeholder.com/200x300", category: "Sci-Fi" },
];

const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');

// Load Movies
function displayMovies(data) {
    movieGrid.innerHTML = data.map(movie => `
        <div class="movie-card">
            <div class="rating"><i class="fas fa-star"></i> ${movie.rating}</div>
            <img src="${movie.img}" alt="${movie.title}">
            <div class="movie-info">${movie.title}</div>
        </div>
    `).join('');
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

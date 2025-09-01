// Kids Gaming Site JavaScript
// This file handles dynamic content loading and site functionality

// Global variables to store JSON data
let brandingData = {};
let themeData = {};
let gamesData = {};

// Initialize the site when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Kids Gaming Site initializing...');
    
    // Load all JSON data files
    loadJSONData();
    
    // Initialize countdown timer
    initializeCountdown();
    
    // Add event listeners
    setupEventListeners();
});

/**
 * Load JSON data from all configuration files
 * TODO: student exercise - Add error handling for failed requests
 */
async function loadJSONData() {
    try {
        // Load branding data
        const brandingResponse = await fetch('./data/branding.json');
        brandingData = await brandingResponse.json();
        console.log('Branding data loaded:', brandingData);
        
        // Load theme data
        const themeResponse = await fetch('./data/theme.json');
        themeData = await themeResponse.json();
        console.log('Theme data loaded:', themeData);
        
        // Load games data
        const gamesResponse = await fetch('./data/games.json');
        gamesData = await gamesResponse.json();
        console.log('Games data loaded:', gamesData);
        
        // Apply loaded data to the site
        applyBranding();
        applyTheme();
        populateGames();
        updateSiteContent();
        
    } catch (error) {
        console.error('Error loading JSON data:', error);
        // Fallback to default content if JSON fails to load
        loadDefaultContent();
    }
}

/**
 * Apply branding data to the site
 * Updates logo, contact info, and social media links
 */
function applyBranding() {
    if (!brandingData.brand) return;
    
    const brand = brandingData.brand;
    
    // Update logo
    if (brand.logo && brand.logo.title) {
        const logoImg = document.getElementById('site-logo');
        if (logoImg) {
            logoImg.src = brand.logo.title;
            logoImg.alt = brand.organizationName || 'Site Logo';
        }
    }
    
    // Update favicon
    if (brand.logo && brand.logo.favicon) {
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.href = brand.logo.favicon;
        }
    }
    
    // Update contact information
    if (brand.email) {
        const emailLink = document.getElementById('contact-email');
        if (emailLink) {
            emailLink.href = `mailto:${brand.email}`;
            emailLink.textContent = brand.email;
        }
    }
    
    if (brand.mobile) {
        const phoneLink = document.getElementById('contact-phone');
        if (phoneLink) {
            phoneLink.href = `tel:${brand.mobile}`;
            phoneLink.textContent = brand.mobile;
        }
    }
    
    // Update slogan
    if (brand.slogan) {
        const sloganElement = document.getElementById('footer-slogan');
        if (sloganElement) {
            sloganElement.textContent = brand.slogan;
        }
    }
    
    // Update social media links
    if (brand.socialMedia) {
        populateSocialLinks(brand.socialMedia);
    }
}

/**
 * Apply theme data to the site
 * Updates CSS custom properties with theme colors and fonts
 */
function applyTheme() {
    if (!themeData.theme) return;
    
    const theme = themeData.theme;
    const root = document.documentElement;
    
    // Apply color scheme
    if (theme.colors) {
        if (theme.colors.primary) root.style.setProperty('--primary', theme.colors.primary);
        if (theme.colors.accent) root.style.setProperty('--accent', theme.colors.accent);
        if (theme.colors.background) root.style.setProperty('--bg', theme.colors.background);
        if (theme.colors.text) root.style.setProperty('--text', theme.colors.text);
        if (theme.colors.textLight) root.style.setProperty('--text-light', theme.colors.textLight);
    }
    
    // Apply font family
    if (theme.font && theme.font.family) {
        root.style.setProperty('--font-family', theme.font.family);
    }
    
    console.log('Theme applied successfully');
}

/**
 * Populate social media links from branding data
 */
function populateSocialLinks(socialMedia) {
    const socialContainer = document.getElementById('social-container');
    if (!socialContainer) return;
    
    // Clear existing content
    socialContainer.innerHTML = '';
    
    // Create social links
    Object.entries(socialMedia).forEach(([platform, url]) => {
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.className = 'social-link';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            
            // Use proper platform names
            const platformNames = {
                'x': 'Twitter/X',
                'youtube': 'YouTube',
                'linkedin': 'LinkedIn',
                'instagram': 'Instagram',
                'github': 'GitHub',
                'blog': 'Blog'
            };
            
            link.textContent = platformNames[platform] || platform.charAt(0).toUpperCase() + platform.slice(1);
            link.setAttribute('aria-label', `Visit our ${platformNames[platform] || platform} page`);
            
            socialContainer.appendChild(link);
        }
    });
}

/**
 * Populate games from games data
 * Creates game cards dynamically
 */
function populateGames() {
    if (!gamesData.games) return;
    
    const gamesContainer = document.getElementById('games-container');
    if (!gamesContainer) return;
    
    // Clear existing content
    gamesContainer.innerHTML = '';
    
    // Create game cards
    gamesData.games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesContainer.appendChild(gameCard);
    });
    
    console.log(`${gamesData.games.length} games loaded`);
}

/**
 * Create a game card element
 * TODO: student exercise - Add game rating system
 * TODO: student exercise - Add favorite games functionality
 */
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('role', 'listitem');
    
    card.innerHTML = `
        <img src="${game.thumbnail || 'assets/images/game-placeholder.jpg'}" 
             alt="${game.name}" 
             class="game-thumbnail"
             onerror="this.style.background='linear-gradient(45deg, var(--primary), var(--accent))'; this.src='';">
        <div class="game-content">
            <h4 class="game-title">${game.name}</h4>
            <p class="game-description">${game.description}</p>
            <span class="game-difficulty">Difficulty: ${game.difficulty}</span>
            <a href="${game.url}" class="game-link" target="_blank" rel="noopener noreferrer">
                Play Game
            </a>
        </div>
    `;
    
    return card;
}

/**
 * Update site content from games data
 */
function updateSiteContent() {
    if (!gamesData.site) return;
    
    const site = gamesData.site;
    
    // Update site title
    if (site.title) {
        document.title = site.title;
        const titleElement = document.querySelector('.site-title');
        if (titleElement) {
            titleElement.textContent = site.title;
        }
    }
    
    // Update hero tagline
    if (site.tagline) {
        const taglineElement = document.getElementById('site-tagline');
        if (taglineElement) {
            taglineElement.textContent = site.tagline;
        }
    }
}

/**
 * Initialize countdown timer
 */
function initializeCountdown() {
    // Set target date (30 days from now if not specified in games data)
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    // Use countdown target from games data if available
    if (gamesData.site && gamesData.site.countdownTarget) {
        targetDate = new Date(gamesData.site.countdownTarget);
    }
    
    // Update countdown every second
    const countdownInterval = setInterval(() => {
        updateCountdown(targetDate);
    }, 1000);
    
    // Initial update
    updateCountdown(targetDate);
    
    // TODO: student exercise - Add countdown completion celebration
}

/**
 * Update countdown display
 */
function updateCountdown(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    
    if (distance < 0) {
        // Countdown finished
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update display
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

/**
 * Setup event listeners for interactive elements
 */
function setupEventListeners() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    
    // TODO: student exercise - Add search functionality
    // TODO: student exercise - Add game filtering by difficulty
    // TODO: student exercise - Add keyboard navigation support
}

/**
 * Handle smooth scrolling for anchor links
 */
function handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Load default content if JSON files fail to load
 */
function loadDefaultContent() {
    console.log('Loading default content...');
    
    // Default games data
    const defaultGames = [
        {
            id: 1,
            name: 'Math Adventure',
            description: 'Solve math puzzles in a fun adventure game',
            difficulty: 'Easy',
            thumbnail: '',
            url: '#'
        },
        {
            id: 2,
            name: 'Word Quest',
            description: 'Build vocabulary while exploring magical worlds',
            difficulty: 'Medium',
            thumbnail: '',
            url: '#'
        }
    ];
    
    // Create default game cards
    const gamesContainer = document.getElementById('games-container');
    if (gamesContainer) {
        gamesContainer.innerHTML = '';
        defaultGames.forEach(game => {
            const gameCard = createGameCard(game);
            gamesContainer.appendChild(gameCard);
        });
    }
}

// TODO: student exercise - Add search functionality
function searchGames(query) {
    // Implementation for searching games
    console.log('Searching for:', query);
}

// TODO: student exercise - Add filter functionality
function filterGamesByDifficulty(difficulty) {
    // Implementation for filtering games by difficulty
    console.log('Filtering by difficulty:', difficulty);
}

// TODO: student exercise - Add dark mode toggle
function toggleDarkMode() {
    // Implementation for dark mode toggle
    console.log('Toggling dark mode');
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadJSONData,
        applyBranding,
        applyTheme,
        populateGames,
        createGameCard,
        updateCountdown
    };
}

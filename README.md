# HERE AND NOW AI - Kids Gaming Hub

A fun and educational gaming website designed for kids aged 10-15, created by HERE AND NOW AI. This project demonstrates modern web development practices with a focus on accessibility, responsive design, and interactive learning.

**Organization**: HERE AND NOW AI  
**Website**: https://hereandnowai.com  
**Slogan**: designed with passion for innovation

## 🎮 Project Overview

HERE AND NOW AI Kids Gaming Hub is a static website that showcases educational games in an engaging, kid-friendly interface. The site features:

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Accessibility**: Built with semantic HTML and ARIA labels for screen readers
- **Interactive Elements**: Countdown timer, smooth scrolling, and dynamic content loading
- **Educational Focus**: Games that combine fun with learning in STEM subjects

## 🚀 Features

### Core Features
- Dynamic game catalog loaded from JSON
- Countdown timer for upcoming game releases  
- Responsive card-based layout
- Smooth navigation and scrolling
- Contact information and social media links

### Technical Features
- Mobile-first responsive design
- CSS custom properties for easy theming
- Vanilla JavaScript (no external dependencies)
- JSON-driven content management
- Accessible markup with ARIA labels
- SEO-friendly structure

## 📁 Project Structure

```
kids-gaming-site/
├── index.html              # Main HTML file
├── styles.css              # CSS styles with custom properties
├── scripts.js              # JavaScript functionality
├── README.md               # This file
├── .gitignore             # Git ignore rules
├── data/                  # JSON configuration files
│   ├── branding.json      # Organization branding info
│   ├── theme.json         # UI theme configuration
│   └── games.json         # Games data and site content
└── assets/                # Static assets
    ├── images/            # Image files
    └── icons/             # Icon files
```

## 🛠️ Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for JSON loading)

### Quick Start
1. **Clone or download** this project to your local machine
2. **Open index.html** in your web browser, or
3. **Serve locally** using a simple HTTP server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
4. **Open** `http://localhost:8000` in your browser

### Development
- Edit `data/*.json` files to customize branding, theme, and games
- Modify `styles.css` to change the visual appearance
- Update `scripts.js` to add new functionality
- All changes are reflected immediately on page refresh

## 📊 Data Configuration

The site is driven by three main JSON files:

### `data/branding.json`
Controls organizational branding from HERE AND NOW AI:
- Logo and favicon URLs (hosted on GitHub)
- Contact information (info@hereandnowai.com, +91 996 296 1000)
- Social media links (LinkedIn, Instagram, GitHub, X/Twitter, YouTube, Blog)
- Organization name and slogan ("designed with passion for innovation")
- Brand colors (Primary: #FFDF00, Secondary: #004040)

### `data/theme.json`
Defines the visual theme:
- Color palette (primary, accent, background, text)
- Typography (font family, sizes, weights)
- Spacing and border radius values
- Shadow definitions

### `data/games.json`
Contains site content and games:
- Site title, tagline, and description
- Countdown timer target date
- Games array with details for each game
- Category definitions

## 🎯 Learning Objectives & TODO Exercises

This project includes marked TODO comments for student exercises:

### HTML & Accessibility (index.html)
- [ ] Add animated hero background
- [ ] Create interactive elements in about section
- [ ] Implement search and filter functionality

### CSS & Design (styles.css)
- [ ] Add dark mode toggle styles
- [ ] Create loading animations
- [ ] Design custom game card hover effects
- [ ] Implement advanced responsive layouts

### JavaScript & Interactivity (scripts.js)
- [ ] Add error handling for failed JSON requests
- [ ] Implement game search functionality
- [ ] Create game filtering by difficulty/category
- [ ] Add keyboard navigation support
- [ ] Build countdown completion celebration
- [ ] Create favorite games system
- [ ] Add game rating system

### Advanced Features
- [ ] Implement local storage for user preferences
- [ ] Add PWA (Progressive Web App) capabilities
- [ ] Create animated page transitions
- [ ] Build a simple game recommendation engine
- [ ] Add multi-language support

## 🔧 Customization Guide

### Changing Colors
Edit `data/theme.json` to modify the color scheme:
```json
{
  "theme": {
    "colors": {
      "primary": "#your-primary-color",
      "accent": "#your-accent-color"
    }
  }
}
```

### Adding Games
Add new games to `data/games.json`:
```json
{
  "id": 6,
  "name": "Your Game Name",
  "description": "Game description",
  "difficulty": "Easy|Medium|Hard",
  "thumbnail": "path/to/image.jpg",
  "url": "https://your-game-url.com"
}
```

### Updating Branding
Modify `data/branding.json` to change:
- Organization name and contact info
- Logo and favicon
- Social media links
- Slogan and messaging

## 🌐 Browser Support

- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is an educational project. Students are encouraged to:
1. Complete the TODO exercises
2. Add new features
3. Improve accessibility
4. Enhance the design
5. Fix bugs and optimize performance

## 📞 Support

For questions about this project:
- Contact HERE AND NOW AI: info@hereandnowai.com
- Phone: +91 996 296 1000
- Website: https://hereandnowai.com
- Review the TODO comments in the code
- Check the browser console for helpful debugging info
- Modify the JSON files to experiment with different configurations

---

**Happy Coding! 🎮✨**

*This project is designed to be a learning experience by HERE AND NOW AI. Don't be afraid to experiment, break things, and rebuild them better!*

**designed with passion for innovation**

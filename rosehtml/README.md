# 🌹 Rose - A Beautiful 3D Rose Visualization

A stunning 3D rose visualization built with **Three.js**, featuring interactive controls, realistic lighting, bloom effects, and smooth animations.

## 🎯 Demo

**Live Project:** https://rosebyparadox.netlify.app/

## ✨ Features

- **3D Rose Model**: Beautifully rendered 3D rose with realistic geometry
- **Interactive Controls**: Orbit controls to rotate, zoom, and explore the rose from all angles
- **Bloom Effects**: Post-processing with Unreal Bloom for a glowing, magical appearance
- **Realistic Lighting**: Advanced lighting setup with directional and ambient lights with shadows
- **Auto-Rotation**: Smooth auto-rotation with manual control
- **Responsive**: Fully responsive design that works on all devices
- **High Performance**: Optimized renderer settings for smooth performance
- **Atmospheric Effects**: Fog effects and ACES Filmic tone mapping for enhanced visuals

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - it's a pure HTML/JavaScript project

### Running Locally

1. Clone the repository:
```bash
git clone <repository-url>
cd rosehtml
```

2. Open the project:
   - Simply open `index.html` in your web browser, or
   - Use a local server for best results:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## 🎮 Controls

- **Mouse/Trackpad**: Drag to rotate the rose
- **Scroll**: Zoom in and out
- **Auto-rotate**: The rose automatically rotates - grab and drag to take manual control

## 🛠️ Technologies Used

- **Three.js** - 3D JavaScript library
- **JavaScript (ES6 Modules)** - Core functionality
- **WebGL** - Rendering engine
- **HTML5/CSS3** - Structure and styling

## 📁 Project Structure

```
rosehtml/
├── index.html          # Main HTML file with all code
└── README.md           # This file
```

## 🎨 Customization

To customize the rose visualization, you can modify these parameters in `index.html`:

- **Lighting**: Adjust light colors, intensity, and position
- **Bloom Effect**: Modify strength, radius, and threshold values
- **Auto-rotation Speed**: Change `controls.autoRotateSpeed`
- **Camera Position**: Adjust `camera.position` for different viewing angles
- **Colors**: Modify the color values in the lighting setup (e.g., `0xff3366` for pink)

## 📝 License

This project is open source and available for personal and educational use.

## 🎁 About

Created as a beautiful gift - "A beautiful rose for a beautiful person 🌹"

---

**Enjoy the beautiful rose! 🌹✨**

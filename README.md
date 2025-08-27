# Talapaneni Varun Chowdary - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes with persistence
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Clean design with Tailwind CSS
- **Interactive Sections**: 
  - Hero section with profile image
  - About section with skills
  - Experience timeline
  - Projects showcase with filtering
  - Contact form
  - Achievements with animated counters

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: Hot Module Replacement (HMR)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/varunchowdarytalapaneni/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
├── components/
│   ├── AboutSection.jsx
│   ├── AchievementsSection.jsx
│   ├── ContactSection.jsx
│   ├── ExperienceSection.jsx
│   ├── HeroSection.jsx
│   └── ProjectSection.jsx
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── photo.jpg
│   ├── paddy.jpg
│   ├── movies.jpg
│   └── TVarunChowdary.pdf
└── layout.jsx
```

## 🎨 Customization

### Adding Your Own Content

1. **Profile Image**: Replace `public/photo.jpg` with your profile picture
2. **Resume**: Replace `public/TVarunChowdary.pdf` with your resume
3. **Project Images**: Add your project images to the `public/` directory
4. **Contact Info**: Update contact details in `components/ContactSection.jsx`

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify the color scheme in `tailwind.config.js`
- Update component styles directly in the JSX files
- Add custom CSS in `src/index.css`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Deploy to Vercel/Netlify

1. Connect your GitHub repository to Vercel or Netlify
2. Set build command to `npm run build`
3. Set publish directory to `dist`

## 📧 Contact

- **Email**: varuntalapaneni18@gmail.com
- **Location**: Kolkata, India
- **GitHub**: [varunchowdarytalapaneni](https://github.com/varunchowdarytalapaneni)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Talapaneni Varun Chowdary

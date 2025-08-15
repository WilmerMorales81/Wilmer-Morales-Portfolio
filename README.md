# Personal Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized for speed with Next.js
- **SEO Friendly**: Built with SEO best practices
- **Contact Form**: Functional contact form (ready for backend integration)
- **Dark Mode Ready**: Easy to add dark mode support
- **Accessible**: Follows accessibility guidelines

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

- `src/app/layout.tsx` - Update metadata (title, description, etc.)
- `src/components/Hero.tsx` - Update name and tagline
- `src/components/About.tsx` - Update personal information
- `src/components/Skills.tsx` - Update skills and proficiency levels
- `src/components/Projects.tsx` - Add your projects
- `src/components/Contact.tsx` - Update contact information and social links
- `src/components/Footer.tsx` - Update footer information

### Styling
- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind classes

### Contact Form
The contact form is currently set up to log to console. To make it functional:

1. **Option 1: Formspree**
   ```jsx
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

2. **Option 2: Netlify Forms**
   ```jsx
   <form name="contact" method="POST" data-netlify="true">
   ```

3. **Option 3: Custom Backend**
   Update the `handleSubmit` function in `Contact.tsx`

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer
└── ...
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Next Steps

1. **Add Real Content**: Replace placeholder content with your information
2. **Add Images**: Replace placeholder images with real project screenshots
3. **Add Animations**: Consider adding Framer Motion for smooth animations
4. **Add Blog**: Extend with a blog section using MDX
5. **Add Dark Mode**: Implement dark mode toggle
6. **Add Analytics**: Integrate Google Analytics or similar
7. **Add SEO**: Optimize meta tags and structured data

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Font from [Google Fonts](https://fonts.google.com/)

---

**Happy coding! 🎉** 
JOBFIT – AI-powered resume review platform with ATS scoring.

A modern, production-ready web application to analyze resumes, provide detailed category scores, and check ATS compatibility.

Live Demo: https://jobfit-gray.vercel.app/

## Features
📄 Resume Scoring: AI-powered overall resume score with detailed category breakdown (Tone & Style, Content, Structure, Skills).
🟢 ATS Compatibility Check: Evaluates how well your resume passes Applicant Tracking Systems.
📊 Interactive Visualizations: Circular progress bars, badges, and color-coded scores for clear feedback.
💡 Actionable Suggestions: Provides tips to improve your resume quality and ATS score.
🎨 Modern UI: Clean, responsive design using TailwindCSS with hover effects and gradients.
⚡ Fast & Responsive: Optimized for quick loading and smooth interactions.
🔒 TypeScript by Default: Ensures type safety across the codebase.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```



Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

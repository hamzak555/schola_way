# Schola Way

Educational guidance and career counseling platform by Schola Education LLC.

## Project Structure

```
Schola_Way/
├── servet-web/          # Main web application (React)
│   ├── public/          # Static assets and images
│   ├── src/            # Source code
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   └── styles/     # CSS files
│   └── package.json    # Dependencies
└── package.json        # Root package for Vercel deployment
```

## Getting Started

### Local Development

1. Navigate to the web directory:
   ```bash
   cd servet-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
cd servet-web
npm run build
```

## Deployment

This project is configured for deployment on Vercel. The build process is handled by the root `package.json` which redirects to the `servet-web` directory.

## Features

- Career Identity Development
- College Selection Guidance
- Family Support Services
- Personalized Assessments
- Educational Planning
- Vocational Guidance

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Router (navigation)

## License

© 2024 Schola Education LLC. All rights reserved.
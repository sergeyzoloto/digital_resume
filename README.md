# Digital Resume

A modern, responsive, and multilingual digital resume built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Dark/Light Mode**: Toggle between dark and light themes
- **Multilingual Support**: Available in English, Russian, and Dutch
- **Section-Based Layout**: Organized content in clear, navigable sections
- **Mobile-Optimized Experience**: Carousel view for experience cards on mobile devices
- **Data-Driven Architecture**: Content separated from presentation for easy updates
- **Accessibility**: Built with accessibility in mind

## Technology Stack

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and development server
- **React Router**: For navigation
- **shadcn/ui**: UI component library

## Project Structure

```
src/
├── components/ # UI components
│ ├── sections/ # Page section components
│ └── ui/ # Reusable UI components
├── context/ # React context providers
├── data/ # Data and content
│ └── translations/ # Multilingual content
├── hooks/ # Custom React hooks
├── layout/ # Layout components
├── lib/ # Utility functions
├── pages/ # Page components
├── stories/ # Storybook stories
└── types/ # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
   \`\`\`bash
   git clone <https://github.com/yourusername/digitalresume.git>
   cd digitalresume
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install

   # or

   yarn
   \`\`\`

3. Start the development server
   \`\`\`bash
   npm run dev

   # or

   yarn dev
   \`\`\`

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

\`\`\`bash
npm run build

# or

yarn build
\`\`\`

The build artifacts will be stored in the `dist/` directory.

## Storybook

This project includes Storybook for component development and documentation.

\`\`\`bash
npm run storybook

# or

yarn storybook
\`\`\`

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the UI components
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Lucide Icons](https://lucide.dev/) for the icon set

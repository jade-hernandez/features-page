# Features Page

A responsive features page built as part of the [GreatFrontEnd Projects](https://www.greatfrontend.com/projects/challenges/features-page) challenge series.

## Live Site

[Features Page](https://features-page-five.vercel.app/)

## Challenge - ou Berief

This project is part of a GreatFrontEnd challenge that focuses on combining components built in previous challenges into a full features page.
The goal is to assemble a Navbar, Hero Section, Features Grid, Designer Features, Convenience Features, Testimonials, FAQ Section, Contact Section, and Footer into a cohesive page while respecting layout rules, responsive behavior, and design fidelity.

## Features

- Responsive image loading with blur placeholders
  - Custom `ImageWithPlaceholder` component that handles image loading state and applies a blur effect until the image is fully loaded. This enhances perceived performance and provides a smoother visual experience.
- Contact form with validation, submitted to the GreatFrontEnd API endpoint
- Success and error states with accessible feedback
- Sticky navbar with scroll-aware background
- Responsive mobile menu with focus trap and keyboard navigation
- FAQ accordion with Radix UI
- Care for A11y — semantic HTML, ARIA attributes, WAI-ARIA patterns

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Radix UI** — Accordion primitive
- **Vite** — No SSR or complex routing needed here — Vite is the straightforward choice.
- **CVA** — To manage component variants in a structured way.
- **clsx** + **tailwind-merge** — To prevent CSS precedence issues.

## Project Structure

```
src/
├── blocks/
│   ├── contact-section/               # Contact form, success state, form logic
│   ├── convenience-features-section/  # Side image + feature cards
│   ├── designer-features-section/     # Side image + feature cards
│   ├── features-section/              # Features grid with icon cards
│   ├── footer/                        # Footer with social icons
│   ├── hero-section/                  # Hero with bullets and responsive image
│   └── navigation/                    # Navbar and mobile menu
│   ├── pricing-faq-section/           # FAQ accordion
│   ├── testimonials-section/          # Responsive testimonials grid
├── components/
│   ├── feature-card/                  # Shared feature card component
│   ├── image-with-placeholder/        # Blur placeholder image component
│   └── ui/                            # Accordion, Badge, Button, Link, Portal, SegmentedControl, Textarea, Toast
├── hooks/                             # useMediaQuery, useFocusTrap
└── utils/                             # cn(), validateEmail()
```

## Getting Started

```bash
pnpm install # install dependencies
pnpm dev     # start development server
pnpm lint    # run linters
pnpm format  # run code formatter
pnpm build   # build for production
```

## Code Conventions

- **Named exports** via `export { }` at the bottom of each file.
- **`type`** over `interface` for all type definitions.
- **kebab-case** for everything non-React.
- **camelCase** for hooks.
- **PascalCase** for component files.

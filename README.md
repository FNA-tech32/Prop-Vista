# Prop Vista

Prop Vista is a real estate landing page for finding a home. Visitors can browse featured residences, read what the company offers, and reach the team by phone, chat, video, message, or email.

## Sections

- **Header** — Prop Vista brand and links to Residences, Our Value, Contact, and Get Started
- **Hero** — property search and highlights for premium listings, happy customers, and awards
- **Companies** — partner logos
- **Popular Residencies** — a slider of featured homes and prices
- **Our Value** — expandable notes on interest rates, stable pricing, and market value
- **Contact** — ways to reach Prop Vista
- **Get Started** — a short call to action to subscribe for price quotes
- **Footer** — office address and the same contact details used on the contact section

## Contact

| Channel | Detail |
| --- | --- |
| Call | +1 (415) 555-0198 |
| Chat | +1 (415) 555-0142 |
| Video call | meet@propvista.com |
| Message | +1 (415) 555-0176 |
| Email | hello@propvista.com |
| Office | 480 Market Street, Suite 210, San Francisco, CA 94105 |

## Tech

- React 18
- Vite
- React Router and hash links for in-page navigation
- Swiper for the residences slider
- Framer Motion for the hero animation
- React CountUp for the hero stats
- React Accessible Accordion for the values section

## Getting started

Install dependencies, then start the local site:

```bash
npm install
npm run dev
```

Open the URL Vite prints in the terminal (usually `http://localhost:5173`).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production site into `dist` |
| `npm run preview` | Serve the production build locally |

## Project structure

```text
public/          images used by the page
src/
  components/    Header, Hero, Companies, Residencies, Values, Contact, Get Started, Footer
  utils/         residence data, accordion content, and slider settings
  App.jsx        page layout
  main.jsx       app entry
```

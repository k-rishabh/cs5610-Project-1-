# Kavya Kusuma Reddy Korem: Personal Homepage

A personal homepage that introduces who I am, what I've worked on, and a book finder that shows off some real client-side JavaScript — built entirely with vanilla HTML5, CSS3, and ES6 modules.

**Live site:** https://kavya-korem.github.io/cs5610-project1/

## Author

Kavya Kusuma Reddy Korem (korem.k@northeastern.edu)

## Class

CS5610.18490 Web Development, Northeastern University, Fall 2026 Semester Full Term. 

## Project Objective

This is my personal homepage for CS5610: a small, honest portfolio site covering who I am, what I've worked on, and a book finder that demonstrates real client-side JavaScript. The site is static and front-end only, with three pages (Home, About, Bookshelf), organized into `css/`, `js/`, and `images/` folders, and loaded as ES6 modules, no frameworks, no component libraries, no jQuery.

## Creative Component

**What:** an interactive book finder that recommends a book based on genre and mood.

**Where:** the Bookshelf page (`ai-page.html`). The recommendation logic and DOM rendering live in `js/main.js`.

The finder reads a genre and a mood from two `<select>` elements, looks them up against a hand-written recommendations dataset, and builds and inserts the result cards into the DOM with `document.createElement`, no libraries involved.

## Screenshot

<img width="872" height="588" alt="image" src="https://github.com/user-attachments/assets/e1450f76-c3bb-4d90-8a30-53453a346bed" />


## Video Demo

https://www.youtube.com/watch?v=vr1FiaU9wmw


## Pages

| Page | File | What's on it |
|------|------|---------------|
| Home | `index.html` | Intro, skills, and selected projects |
| About | `about.html` | Background, technical areas, and what I'm currently learning |
| Bookshelf | `ai-page.html` | Books I've read and an interactive genre/mood book finder |

## Features

- **Interactive book finder:** select a genre and a mood to get a matching book recommendation, generated on the fly and inserted into the DOM.
- **Hand-written recommendations dataset:** no external API or library — the matching logic and data are original.
- **Responsive design:** layouts built with Flexbox and Grid that adapt across screen sizes.
- **Clean code style:** no `!important`, flat ESLint config, and Prettier formatting enforced project-wide.

## Technologies

- HTML5, CSS3 (Flexbox and Grid, no `!important`)
- JavaScript (ES6+, loaded as native ES modules)
- ESLint (flat config, `eslint.config.js`) and Prettier for code quality
- Git and GitHub Pages for version control and deployment

## Instructions to Build

### Prerequisites

- Node.js (LTS version) — only needed for the optional linting/formatting tooling
- Git

### Run it locally

Clone the repository:

```
git clone https://github.com/kavya-korem/cs5610-project1.git
cd cs5610-project1
```

Open `index.html` directly in a browser (double-click it, or use `open index.html`). This is a static site with no build step required to view it.

### Check code quality

```
npm install
npm run lint          # ESLint over js/
npm run format         # Apply Prettier formatting
npm run format:check   # Check formatting without writing changes
```

## Project Structure

```
cs5610-project1/
├── index.html            # Home page
├── about.html             # About page
├── ai-page.html           # Bookshelf page (book finder)
├── css/                   # Stylesheets
├── js/
│   └── main.js            # Book finder logic and DOM rendering
├── images/                # Photos and screenshots
└── docs/
    └── design-document.md # Project description, personas, user stories, mockups
```

## Use of GenAI

Generative AI was used only for the third page of the website, `ai-page.html` (Bookshelf).

- **Tool / model:** Claude Sonnet 5 (`claude-sonnet-5`), via Claude Code (CLI).
- **What it helped with:** parts of the Bookshelf page's JavaScript functionality, including handling the genre and mood selections, working with the book recommendation data, and generating the recommendation results in the page. Also used for some small content and presentation adjustments on this page.
- **Prompt (paraphrased):** "Help me build and refine the interactive book finder for my Bookshelf page. The user should be able to select a genre and mood and receive a suitable book recommendation."
- **Changes after generation:** [Add anything you adjusted by hand after the AI-generated code, e.g. styling tweaks, bug fixes, wording changes]

Generative AI was **not** used for the implementation of the Home page (`index.html`) or About page (`about.html`).

## Design Document

See 'docs/design-document.md' for the project description, user personas, user stories, and design mockups produced before implementation.

## License

This project is licensed under the MIT License.

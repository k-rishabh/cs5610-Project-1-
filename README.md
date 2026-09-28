# Kavya — Personal Homepage

## Author

Kavya Kusuma Reddy Korem ([korem.k@northeastern.edu](mailto:korem.k@northeastern.edu))

## Class Link

CS5610.18490 Web Development, Northeastern University — Fall 2026 Semester
Full Term. Course materials are hosted on Canvas (login required for
Northeastern students/staff), so no public course URL is available.

## Project Objective

This is my personal homepage for CS5610, built with plain HTML5, CSS3, and
ES6+ JavaScript — no frameworks, no component libraries, no jQuery. The goal
was a small, honest portfolio site: who I am, what I've worked on, and a
book finder that shows off some real client-side JavaScript. The site is a
static, front-end-only project with three pages (Home, About, Bookshelf),
organized `css/`, `js/`, and `images/` folders, and loaded as ES6 modules.

## Screenshot

![Homepage screenshot](docs/screenshot.png)

## Live Site

Deployed via GitHub Pages: [`https://kavya-korem.github.io/cs5610-project1/`](https://kavya-korem.github.io/cs5610-project1/)

## Video Demo

[Short narrated walkthrough of the site](https://youtu.be/vr1FiaU9wmw)

## Instructions to Build / Run Locally

This is a static site with no build step required to view it.

```bash
git clone https://github.com/kavya-korem/cs5610-project1.git
cd cs5610-project1
open index.html   # or just double-click index.html in a file browser
```

To run the optional dev tooling (linting and formatting):

```bash
npm install
npm run lint          # runs ESLint over js/
npm run format        # formats the project with Prettier
npm run format:check  # checks formatting without writing changes
```

## Pages

- `index.html` — Home: intro, skills, and selected projects.
- `about.html` — About: background, technical areas, and what I'm
  currently learning.
- `ai-page.html` — Bookshelf: books I've read and an interactive
  genre/mood book finder.

## Original Component

The book finder on the Bookshelf page (`js/main.js`) is an original piece
of JavaScript: it reads a genre and a mood from two `<select>` elements,
looks up a hand-written recommendations dataset, and builds and inserts
the result cards into the DOM with `document.createElement`, with no
libraries involved.

## Design Document

See [`docs/design-document.md`](docs/design-document.md) for the project
description, user personas, user stories, and design mockups produced
before implementation.

## Technologies

- HTML5, CSS3 (Flexbox and Grid, no `!important`)
- JavaScript (ES6+, loaded as native ES modules)
- ESLint (flat config, `eslint.config.js`) and Prettier for code quality
- Git and GitHub Pages for version control and deployment

## Use of GenAI

Generative AI was used only for the third page of the website, ai-page.html (Bookshelf).

Tool / model: Claude Sonnet 5 (claude-sonnet-5), via Claude Code (CLI).

How it was used: I used Claude Code while working on the Bookshelf page to help develop and refine the interactive book finder. It was used for parts of the page's JavaScript functionality, including handling the genre and mood selections, working with the book recommendation data, and generating the recommendation results in the page. I also used it to make some small content and presentation adjustments on this page.
Prompt (paraphrased): "Help me build and refine the interactive book finder for my Bookshelf page. The user should be able to select a genre and mood and receive a suitable book recommendation."

Generative AI was not used for the implementation of the Home page (index.html) or About page (about.html).

## License

This project is licensed under the [MIT License](LICENSE).

# Design Document: Kavya Kusuma Reddy Korem's Personal Homepage

**Author:** Kavya Kusuma Reddy Korem
**Course:** CS5610 Web Development, Northeastern University, Fall 2026
**Project:** Project 1, Personal Homepage
**Live site:** https://kavya-korem.github.io/cs5610-project1/

---

## Table of Contents

1. [Project Description](#1-project-description)
2. [User Personas](#2-user-personas)
3. [User Stories](#3-user-stories)
4. [Design Mockups](#4-design-mockups)
5. [Supporting Design Decisions](#5-supporting-design-decisions)

---

## 1. Project Description

### Overview

A personal homepage that gives a visitor an honest, fast read on who I am: my background, what I have actually built, and a bit of who I am outside of class.

Its standout feature is the Bookshelf page's book finder, a hand written piece of client side JavaScript with no library behind it. A visitor picks a genre and a mood from two select elements, and the finder reads a small recommendations dataset, matches it against the pair chosen, and builds and inserts three results directly into the page.

### Objective

Create a page that introduces me as a person and a developer: my technical skills, a few real projects, and an interest in reading that shows there is more to me than a resume in HTML form, all presented in a way that is clean, accessible, and clearly my own work.

### Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduction, current program and focus, technical skills, and three selected projects |
| About | `about.html` | Academic background, technical areas, and what I am currently learning in CS5610 |
| Bookshelf | `ai-page.html` | Books I have actually read, plus an interactive book finder by genre and mood |

### Technologies

* **HTML5**, with semantic elements throughout
* **CSS3**, using native Grid and Flexbox, with a warm sage and cream palette and a serif heading font paired with a plain sans serif body
* **JavaScript (ES6+)**, written entirely by hand as ES6 modules, with no libraries or frameworks
* **Tooling:** ESLint and Prettier, for code quality only, not part of the build or runtime
* **Hosting:** GitHub Pages

No framework, component library, or jQuery is used anywhere in the project. That constraint is intentional: the assignment asks for vanilla fundamentals to be demonstrated, and the book finder is the proof that the JavaScript underneath is real.

---

## 2. User Personas

### Persona 1: Priya, Hiring Manager

* **Age:** 34
* **Tech comfort:** Expert
* **Background:** Manages engineers at a mid size company and screens a lot of candidate homepages in a typical week.
* **Goals:** Understand quickly who a candidate is, what she actually knows, and what she has built.
* **Frustrations:** Portfolios that bury skills and projects a few scrolls down, and sites that do not hold up on her phone between meetings.
* **Uses most:** The skills section, the three project cards, and the contact links in the footer.

### Persona 2: Sam, Classmate Doing My Code Review

* **Age:** Mid twenties
* **Tech comfort:** High
* **Background:** A fellow CS5610 student assigned to review this project against the course rubric.
* **Goals:** Confirm every page is real and complete, that the finder actually works, and that the markup is properly semantic and accessible.
* **Frustrations:** Nav links that lead to stubs, interactive features that only work for the input the developer happened to test, and divs pretending to be buttons.
* **Uses most:** Every nav link, the book finder under unusual genre and mood combinations, and the browser's dev tools.

### Persona 3: Alex, A Random Book Lover

* **Age:** Twenties to thirties
* **Tech comfort:** Low to moderate
* **Background:** Found the site through a shared link and has no interest in a resume.
* **Goals:** Get a book recommendation that matches his mood right now.
* **Frustrations:** Sites where the thing he actually wants is buried behind unrelated professional content.
* **Uses most:** The Bookshelf page and the book finder, skipping Home and About entirely.

### Why these personas

Together they cover the full range of people who could land on this site: a professional evaluating me quickly, a peer testing the site rigorously against a rubric, and someone with no interest in my resume at all. Each one pulls attention toward a different page, and Alex in particular is the reason the Bookshelf page has to stand on its own rather than reading as an afterthought.

---

## 3. User Stories

### Story 1: Priya screens a candidate between meetings

> Priya has a few minutes before her next meeting and several candidate homepages to get through. She opens Kavya's site and within seconds sees the technical skills grouped by category and three project cards below them: a smart bus ticketing system, a secure bank login system, and a diabetes prediction model. She scrolls to the footer, finds an email link, a GitHub link, and a LinkedIn link, and moves on to the next candidate with Kavya marked as worth a second look.

**Features this requires:** skills and projects visible on the home page without a click into another page, and a working email, GitHub, and LinkedIn link in the footer of every page.

### Story 2: Sam reviews the project against the rubric

> Sam opens dev tools and clicks through Home, About, and Bookshelf, confirming each one is a complete page rather than a stub. On the Bookshelf page, he opens the book finder and deliberately tries every genre and mood combination, including ones he doubts will have a good match. Each combination returns three sensible results with no console errors. He inspects the markup and confirms the finder's controls are real select and button elements, and that every image has descriptive alt text.

**Features this requires:** a finder that returns a sensible result for every genre and mood pair, and markup that uses real semantic and interactive elements rather than styled divs.

### Story 3: Alex just wants something to read

> Alex found the link to Kavya's site from a friend and has no interest in her coursework. He skips straight to the Bookshelf page, glances at the three books already listed, and then goes straight for the finder. He picks Fantasy and Curious, clicks "Find books," and gets three recommendations without the page reloading. He does not read another word about CS5610.

**Features this requires:** a book finder that works entirely on its own, with instant results and no dependency on the rest of the site's content.

### Story 4: Anyone checks the site on their phone

> A visitor opens the site on a phone rather than a laptop. The hero section, the skills rows, the project cards, and the book finder's controls and results all reflow into a single column. Nothing requires horizontal scrolling, and every button and select element is large enough to tap comfortably.

**Features this requires:** a responsive layout with defined breakpoints, and tap targets sized for touch rather than only for a mouse pointer.

### Feature coverage

| Feature | Stories |
|---|---|
| Skills and project cards on Home | 1 |
| Contact links in the footer | 1 |
| Complete, real pages behind every nav link | 2 |
| Book finder correctness across all inputs | 2, 3 |
| Semantic, accessible markup | 2 |
| Responsive layout | 4 |

---

## 4. Design Mockups

Low fidelity wireframes sketched before any code was written. Boxes are layout regions, not final styling.

<details>
<summary><strong>Home (`index.html`)</strong>: click to expand wireframe</summary>

```
+------------------------------------------------------------+
| KAVYA.                          Home  About  Bookshelf     |
+------------------------------------------------------------+
|  HELLO, I'M KAVYA                     +--------------+     |
|  Welcome to my website.               | CURRENTLY    |     |
|  <intro paragraph>                    | Program ...  |     |
|  [About me]  Visit my bookshelf       | University.. |     |
|                                        | Course ...   |     |
|                                        | Focus ...    |     |
|                                        +--------------+     |
+------------------------------------------------------------+
|  TECHNICAL SKILLS                                            |
|  Programming        Java, Python, C/C++, SQL                 |
|  Web Development     HTML, CSS, JS, Responsive Design        |
|  Software & Tools   Git, GitHub, IntelliJ IDEA, VS Code, JUnit|
|  Other Technologies AWS, IoT, Embedded Systems, ML            |
+------------------------------------------------------------+
|  SELECTED PROJECTS                                            |
|  +----------------+ +----------------+ +----------------+    |
|  | Smart Bus       | | Secure Bank    | | Diabetes       |    |
|  | Ticketing       | | Login System   | | Prediction     |    |
|  +----------------+ +----------------+ +----------------+    |
+------------------------------------------------------------+
|  OUTSIDE OF CLASS. I usually have a book nearby.              |
|  See what I'm reading                                         |
+------------------------------------------------------------+
| KAVYA.   MS CS, Northeastern   Email, GitHub, LinkedIn        |
+------------------------------------------------------------+
```

</details>

<details>
<summary><strong>About (`about.html`)</strong>: click to expand wireframe</summary>

```
+------------------------------------------------------------+
| KAVYA.                          Home  About  Bookshelf     |
+------------------------------------------------------------+
|  ABOUT                                                        |
|  A little about me.  <intro paragraph>                       |
+------------------------------------------------------------+
|  BACKGROUND                                                    |
|  My background in computer science.  <two background paragraphs>|
+------------------------------------------------------------+
|  TECHNICAL AREAS                                               |
|  +---------------+ +---------------+                          |
|  | Software Dev  | | Web Tech      |                           |
|  +---------------+ +---------------+                          |
|  | Data & ML     | | Cloud & IoT   |                           |
|  +---------------+ +---------------+                          |
+------------------------------------------------------------+
|  WHAT I'M LEARNING NOW      <CS5610 specific paragraph>        |
+------------------------------------------------------------+
|  ONE MORE THING. Technology isn't my only interest.            |
|  Visit my bookshelf                                             |
+------------------------------------------------------------+
| KAVYA.   MS CS, Northeastern   Email, GitHub, LinkedIn         |
+------------------------------------------------------------+
```

</details>

<details>
<summary><strong>Bookshelf (`ai-page.html`)</strong>: click to expand wireframe</summary>

```
+------------------------------------------------------------+
| KAVYA.                          Home  About  Bookshelf     |
+------------------------------------------------------------+
|  BOOKSHELF. Books I've enjoyed.  <intro paragraph>             |
+------------------------------------------------------------+
|  MY BOOKSHELF                                                  |
|  +-----------+  +-----------+  +-----------+                   |
|  | cover img |  | cover img |  | cover img |                   |
|  | A Little  |  | A Man     |  | Count of  |                   |
|  | Life      |  | Called Ove|  | Monte Cr. |                   |
|  +-----------+  +-----------+  +-----------+                   |
+------------------------------------------------------------+
|  BOOK FINDER. Looking for something to read?                    |
|  +------------+   +-----------------------------------+        |
|  | Genre [v]  |   |  result 1  |  result 2  | result 3 |        |
|  | Mood  [v]  |   |  (populated on click, aria live)   |        |
|  | [Find      |   +-----------------------------------+        |
|  |  books]    |                                                  |
|  +------------+                                                  |
+------------------------------------------------------------+
| KAVYA.   MS CS, Northeastern   Email, GitHub, LinkedIn         |
+------------------------------------------------------------+
```

</details>

**Responsive behavior:** at tablet and mobile widths, every multi column layout above (the hero, skills rows, project cards, the About page's background grid and technical area cards, the book grid, and the finder) drops to a single column, and the footer stacks vertically instead of spreading out. This is handled with plain CSS Grid and Flexbox and two breakpoints, no framework involved.

---

## 5. Supporting Design Decisions

### The book finder

The one piece of genuine interactivity on the site, and the reason it carries the most weight in Sam's review.

**Genre options:** Fiction, Mystery, Fantasy

**Mood options:** Thoughtful, Adventurous, Cozy, Curious

**Books already on the shelf, shown separately from the finder:**

| Title | Author |
|---|---|
| *A Little Life* | Hanya Yanagihara |
| *A Man Called Ove* | Fredrik Backman |
| *The Count of Monte Cristo* | Alexandre Dumas |

* **Inputs:** a genre select element and a mood select element, both fixed to a known set of options.
* **Trigger:** a "Find books" button. There is no automatic search on change, so the action stays deliberate.
* **Output:** three book suggestions inserted into the results region for the chosen genre and mood pair, with no page reload.
* **Coverage guarantee:** every genre by mood combination returns at least one result, checked explicitly during testing rather than assumed.

### Visual design

A warm, editorial look built around sage and cream tones, with a serif heading font contrasted against a plain sans serif body. The exact color and spacing tokens live in `css/style.css` as the single source of truth, rather than being duplicated here.

### Accessibility

* Semantic HTML throughout: `header`, `nav`, `main`, `section`, and `footer`.
* Real `button`, `select`, and `label` elements for the finder, never a styled div standing in for one.
* Descriptive `alt` text on every image, including the three book covers.
* Visible focus styles and a logical tab order through the navigation, content, and controls.
* The finder's results region uses `aria live` so a screen reader announces new results as soon as they populate.

### Contact

Every page shares the same footer: MS Computer Science, Northeastern University, with an email link to `korem.k@northeastern.edu`, a GitHub link to `github.com/kavya-korem`, and a LinkedIn link to `linkedin.com/in/kavya-korem`.

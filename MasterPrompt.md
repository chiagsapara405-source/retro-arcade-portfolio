# MASTER PROMPT — AWWWARDS-LEVEL PORTFOLIO REDESIGN

## 1. ROLE AND OBJECTIVE

Act as a senior creative developer, award-level digital art director, UI/UX designer, frontend architect, and performance engineer.

Your task is to redesign and implement my entire personal portfolio website:

**Live website:** https://chiragsapara.vercel.app/

**Owner:** Chirag Sapara  
**Current position:** BCA student at RK University, Gujarat, India  
**Career goal:** Become an AI Full-Stack Developer  
**Primary objective:** Create a distinctive, polished, memorable developer portfolio inspired by the quality of Awwwards-recognized digital experiences.

Do not simply generate another generic developer portfolio.

The final result should feel like a carefully art-directed digital experience built by a developer who understands design, frontend engineering, backend systems, and emerging AI technologies.

The portfolio must balance three things:

1. Distinctive visual identity.
2. Credible presentation of my real projects and technical growth.
3. Excellent usability, responsiveness, accessibility, and performance.

You are responsible for inspecting the existing codebase, understanding the current website, identifying weaknesses, planning the redesign, implementing it, and testing the finished result.

Do not stop after providing recommendations or a design plan. Implement the redesign.

---

## 2. FIRST: AUDIT THE EXISTING PROJECT

Before modifying anything:

1. Inspect the complete project structure.
2. Read package.json and identify the existing framework, dependencies, scripts, and build process.
3. Inspect all components, pages, stylesheets, assets, fonts, and configuration files.
4. Identify the current sections, navigation behavior, project data, external links, and contact functionality.
5. Review the existing website at the supplied URL if browser access is available.
6. Identify broken layouts, generic visual patterns, inconsistent spacing, weak typography, excessive decoration, inaccessible interactions, and performance problems.
7. Determine which existing functionality must be preserved.

Create a short internal audit and an implementation plan, then proceed directly with the work.

IMPORTANT:
- Do not assume the repository uses a particular framework before inspecting it.
- Do not replace a functioning project with an unrelated starter template.
- Do not delete existing features simply because they are inconvenient.
- Preserve working functionality, useful assets, and valid project links.
- If the live website cannot be inspected, use the source code as the primary reference.
- Do not fabricate audit findings about files or pages you have not inspected.

---

## 3. CREATIVE DIRECTION

### Core concept: Editorial Digital Craft

Create a contemporary portfolio combining editorial typography, Swiss-inspired layout discipline, experimental creative-development details, and restrained motion design.

The visual language should feel:
- Bold but not chaotic.
- Minimal but not empty.
- Experimental but still usable.
- Technical but approachable.
- Premium without relying on expensive-looking effects.
- Personal rather than template-generated.

Use a distinctive composition with strong visual hierarchy, carefully controlled negative space, asymmetric layouts, precise alignment, and intentional transitions between sections.

Avoid the typical AI-generated portfolio aesthetic:
- Generic centered hero with a gradient orb.
- Repeated rounded cards for every section.
- Purple-blue gradients everywhere.
- Excessive glassmorphism.
- Floating decorative blobs without purpose.
- Huge walls of technology logos.
- Repeated glowing borders.
- Random animations on every element.
- Fake statistics, testimonials, or professional experience.
- Stock imagery pretending to represent my actual projects.

Every major design choice must serve the content, usability, or identity of the site.

### Color palette

Use this proposed palette as the initial direction:

- Main background: #171816
- Primary text: #F5F3EB
- Signature accent: #C8FF45
- Secondary text: a carefully contrast-tested neutral gray
- Borders: subtle neutral lines
- Surface variations: slightly lighter charcoal tones

Use CSS variables or Tailwind theme tokens to centralize colors.

The accent color should be used selectively for active states, important actions, small graphic details, and selected highlights.

Do not make every element lime green.

If the existing portfolio already has a compelling visual identity, preserve its strongest elements and adapt this palette rather than blindly replacing everything.

### Typography

Use a deliberate typographic pairing:

- Display typography: a bold, expressive sans-serif.
- Body typography: a highly readable sans-serif.
- Labels and metadata: compact, carefully spaced typography.

Choose suitable fonts such as Space Grotesk, Manrope, or another available high-quality typeface.

Use fluid typography with clamp() where appropriate.

Headlines should have deliberate line breaks, tight but readable line heights, and strong contrast between display and body sizes.

Avoid oversized text that creates horizontal overflow on small screens.

---

## 4. WEBSITE STRUCTURE

Redesign the complete single-page experience, adapting it to the existing architecture.

### SECTION A — NAVIGATION

Build a refined, responsive navigation system.

Requirements:
- Personal wordmark or typographic logo.
- Navigation links for About, Work, Skills, and Contact.
- A visible resume action if a valid resume file exists.
- Clear active, hover, and focus states.
- Compact mobile navigation with an accessible menu.
- Smooth scrolling without breaking browser history or keyboard navigation.
- A subtle visual transition when the navigation changes state, if useful.

Keep navigation lightweight.

Do not add a complex full-screen menu unless it genuinely improves the design.

### SECTION B — HERO

The hero is the most important visual section.

Create an immediate, memorable first impression.

Suggested content:

Small eyebrow:
"CHIRAG SAPARA / DEVELOPER IN PROGRESS"

Main headline:
"I BUILD FOR THE WEB. I'M EXPLORING WHAT COMES NEXT."

Alternative headline:
"From thoughtful interfaces to intelligent applications."

Supporting description:
"I'm Chirag, a BCA student exploring full-stack development and AI. I enjoy turning ideas into useful, well-crafted digital products."

Use the copy that fits the final composition best. Keep it honest and natural.

Primary CTA:
"Explore my work"

Secondary CTA:
"Let's connect"

Optional status label:
"Learning. Building. Iterating."

Only display availability for internships or freelance opportunities if that information is accurate and intended.

#### Hero visual

Create one distinctive visual element that belongs to the design.

Possible directions:
- A custom typographic composition.
- An abstract grid with a moving focal point.
- A subtle cursor-responsive graphic.
- A restrained animated monogram.
- An original CSS/SVG visual built from geometric shapes.

Prefer custom visuals over stock photography.

The hero should remain visually strong even if animation is disabled.

Desktop layout should feel spacious and editorial. Mobile layout must preserve the hierarchy and intentional composition.

Do not add a fake terminal, fake code editor, fabricated analytics dashboard, or decorative 3D object simply to make the hero look technical.

### SECTION C — INTRODUCTION / ABOUT

Create a concise personal introduction that communicates who I am and what I am working toward.

Use verified details:
- I am pursuing a BCA at RK University.
- I began programming with C.
- I am expanding into modern frontend development.
- I am learning full-stack development and exploring AI integration.
- I build personal and academic projects to strengthen practical skills.

Present this as a short narrative rather than a generic list of adjectives.

Possible content direction:

"I started with C, where I learned to think in terms of logic, data, and problem-solving. Now I'm expanding that foundation into modern web development, building applications that connect thoughtful interfaces with real functionality."

Rewrite this naturally if needed.

Do not invent a professional job history, client list, years of commercial experience, or awards.

Use an asymmetric layout, editorial text treatment, and a small supporting visual if it strengthens the composition.

### SECTION D — SELECTED PROJECTS

This section should be the centerpiece of the portfolio.

Build a premium project showcase rather than a uniform grid of small cards.

Each project should have:
- Project name.
- One-sentence description.
- Problem or purpose.
- My contribution.
- Technologies actually used.
- A real preview image or screenshot when available.
- Live demo link when available.
- Source repository link when available.
- A clear indication of whether the project is complete, experimental, or still in development, when useful.

Use large project previews and varied but consistent layouts.

Possible composition:
- One featured project occupying a large visual area.
- Two complementary projects with different aspect ratios.
- A compact list of additional projects.

Avoid arbitrary card sizes that make the page feel unbalanced.

#### Candidate projects

Check the existing portfolio and source code first. Use only projects that can be verified.

Potential candidates from my work include:

1. CampusBite — a college food-ordering application involving menu browsing, authentication, and order management.
2. Samvidhan — an Indian Constitution reading application built with React Native and Expo.
3. Smart Parking Reservation & Management System — a project involving parking reservation and availability workflows.
4. CodeCompass — a developer-oriented hub.
5. CodeBuddy — an AI-assisted code explanation concept.
6. Library Management System — an academic project developed in C.
7. Personal Portfolio — this website itself, if it adds value to the presentation.

Do not assume every candidate is complete or deployed.

Inspect the repository, existing portfolio data, and available demos to select the strongest verified projects.

Do not include all projects merely to increase the count. Quality and relevance matter more than quantity.

For each selected project:
- Use actual screenshots if available.
- If screenshots are missing, create an attractive CSS-based project presentation or a clearly identified conceptual preview.
- Never present a generated mockup as a screenshot of the real application.
- Never invent demo URLs or repository URLs.
- If a project has no working demo, omit the demo action or label its status accurately.

Add tasteful hover interactions and subtle image reveals.

Project interactions must work on touchscreens and must not depend on hover alone.

### SECTION E — PROJECT DETAIL EXPERIENCE

Where appropriate, create expandable project details, a modal, or a dedicated case-study view.

Each detailed project view should explain:

1. What the project does.
2. Why it was built.
3. Main features implemented.
4. My technical decisions.
5. Challenges encountered and how they were addressed, using verified information.
6. Technology stack.
7. Live project and source links, if available.

Do not create elaborate case studies filled with invented metrics.

If the available information is limited, keep the explanation concise and factual.

### SECTION F — SKILLS AND TECHNOLOGIES

Create a visually structured skills section.

Suggested categories:

FRONTEND
- HTML
- CSS
- JavaScript
- React
- Tailwind CSS
- GSAP

BACKEND
- Node.js
- Express.js
- PHP, if still relevant to the current portfolio

DATABASES
- MongoDB
- PostgreSQL
- MySQL
- Supabase, identified appropriately as a backend platform and database service where relevant

PROGRAMMING
- C
- Other languages only if verified

TOOLS
- Git
- GitHub
- VS Code
- Development and AI-assisted coding tools that I actually use

IMPORTANT:
- Verify the current list against the existing portfolio and source code.
- Distinguish technologies used in finished projects from technologies currently being learned.
- Do not represent every technology as an advanced skill.
- Avoid arbitrary skill percentages and progress bars.
- Avoid a wall of colorful logos.
- Use typography, grouped labels, compact lists, or restrained visual diagrams.

The section should communicate practical familiarity without exaggerating expertise.

### SECTION G — LEARNING JOURNEY / EDUCATION

Include a compact section that reinforces my development as a student and developer.

Use verified educational details, relevant project milestones, and meaningful learning progression.

Do not fabricate dates, certificates, internships, employment history, grades, or achievements.

If a dedicated timeline adds unnecessary length, integrate this content into the About section.

Keep the emphasis on real work and continued learning.

### SECTION H — CONTACT

End with a strong, memorable contact section.

Possible headline:
"Have an idea worth building?"

Supporting text:
"I'm always interested in discussing thoughtful web experiences, useful applications, and opportunities to learn and build."

Include verified contact destinations:
- Email.
- GitHub.
- LinkedIn.
- Resume, if available.

Use the actual contact information and URLs from the existing portfolio or project configuration.

Do not invent email addresses or social profiles.

If the existing contact form works, preserve and improve it.

If a contact form is present:
- Validate required fields.
- Provide accessible error messages.
- Display loading, success, and failure states.
- Preserve the existing email service or backend integration.
- Never expose secret API keys in client-side code.
- Do not display a false success message when submission fails.

If there is no functioning backend, a clearly labeled email link is better than a fake form.

### SECTION I — FOOTER

Build a minimal footer containing:
- Personal wordmark.
- Useful navigation.
- Verified social links.
- Copyright year generated dynamically.
- Optional return-to-top action.

Keep the footer visually connected to the rest of the design.

---

## 5. GSAP ANIMATION DIRECTION

Use GSAP and ScrollTrigger for meaningful, coordinated motion.

First inspect the existing dependencies. Install only the necessary packages and avoid duplicate animation systems.

### Hero sequence

Create a short, carefully timed entrance:
1. Small eyebrow appears.
2. Main headline reveals through a subtle mask or stagger.
3. Supporting copy fades or moves into place.
4. CTA elements become visible.
5. The signature visual responds gently to interaction.

The animation must feel fast and intentional, not like a long intro sequence.

### Scroll-based transitions

Use ScrollTrigger for:
- Section heading reveals.
- Carefully staggered content.
- Project image clipping or reveals.
- Subtle movement of selected visual elements.
- Optional progress indication if it improves orientation.

Use a consistent motion vocabulary across the entire page.

### Hover interactions

Add restrained micro-interactions:
- Project arrows move slightly.
- Links transition cleanly.
- Buttons have responsive hover and pressed states.
- Images may scale subtly within clipped containers.

Avoid excessive magnetic buttons, flashing effects, constant rotation, and distracting cursor trails.

### Technical requirements

- Register GSAP plugins correctly.
- Scope animations to their components.
- Clean up ScrollTriggers and event listeners.
- Handle React Strict Mode correctly.
- Prevent duplicate timelines during remounts.
- Avoid layout shifts caused by animation.
- Avoid animating expensive properties unnecessarily.
- Respect prefers-reduced-motion.
- Keep essential content visible if JavaScript fails.
- Do not animate every paragraph independently.

On mobile, simplify or remove effects that reduce usability or performance.

---

## 6. RESPONSIVE DESIGN

Design and test the complete experience at:

- 320–375px: small mobile screens.
- 390–430px: modern mobile screens.
- 768px: tablet portrait.
- 1024px: small laptop or tablet landscape.
- 1280px and above: desktop.

Requirements:
- No horizontal overflow.
- No clipped headlines.
- No overlapping navigation.
- No inaccessible buttons.
- No hover-only essential actions.
- Comfortable touch targets.
- Appropriate line lengths.
- Consistent spacing.
- Properly cropped project imagery.
- Stable layouts during image loading.
- Responsive project compositions rather than simple desktop stacking.

Mobile must feel intentionally designed, not like a reduced desktop version.

---

## 7. COMPONENT ARCHITECTURE

Follow the existing architecture where practical.

If the project is React-based, organize reusable components such as:

- Navbar
- Hero
- About
- SelectedProjects
- ProjectCard
- ProjectDetails
- Skills
- Education or Journey
- Contact
- Footer
- Shared animation utilities

Keep project content and other repeated data in structured data files or configuration objects instead of scattering hardcoded content across components.

Use a single source of truth for:
- Project names and descriptions.
- Technology lists.
- Project links.
- Social profiles.
- Contact details.
- Navigation labels.

Create reusable design tokens for:
- Colors.
- Typography.
- Spacing.
- Borders.
- Radii.
- Motion timing.
- Container widths.

Avoid overengineering. The code should remain understandable and maintainable by a student developer.

If the current site uses plain HTML, CSS, and JavaScript rather than React, preserve that architecture unless there is a concrete reason to migrate.

Do not migrate frameworks simply for fashion.

---

## 8. ACCESSIBILITY

Target WCAG 2.2 AA practices wherever applicable.

Implement:
- Semantic HTML landmarks.
- Logical heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient text and interactive-element contrast.
- Accessible form labels and errors.
- Descriptive link text.
- Meaningful image alt text.
- Correct button and link semantics.
- Reduced-motion support.
- Accessible mobile menu behavior.
- Focus management for dialogs or overlays.
- No color-only communication of status.

Avoid adding a custom cursor that replaces or interferes with the native cursor.

Ensure the site remains usable without animation, a mouse, or JavaScript-dependent decorative effects.

---

## 9. PERFORMANCE AND SEO

The portfolio should feel fast even on mid-range mobile devices.

Performance:
- Optimize and compress image assets.
- Prefer modern image formats when supported.
- Specify image dimensions or aspect ratios.
- Lazy-load below-the-fold images.
- Avoid lazy-loading the main above-the-fold hero asset.
- Use appropriate font loading strategies.
- Avoid unnecessary third-party libraries.
- Reduce layout shifts.
- Avoid excessive blur filters and large animated shadows.
- Keep the main thread responsive.
- Split code only where it produces a real benefit.
- Remove unused dependencies only after checking their usage.

SEO:
- Add a meaningful page title.
- Write a unique meta description.
- Configure canonical URL using the verified production domain.
- Add Open Graph and social-sharing metadata.
- Use an appropriate social preview image.
- Add favicon and application metadata.
- Ensure the page has semantic content.
- Generate structured data only for facts that can be verified.
- Check robots.txt and sitemap.xml if appropriate for the framework.
- Prevent staging URLs from becoming canonical URLs.

Do not add fake structured data, fake reviews, or misleading professional claims.

---

## 10. CODE QUALITY AND SAFETY

- Preserve existing environment variables and integrations.
- Never overwrite secrets or commit .env files.
- Do not expose private credentials in frontend code.
- Use safe external-link attributes where appropriate.
- Avoid unnecessary dependencies.
- Avoid suppressing lint or TypeScript errors to make the build pass.
- Do not remove meaningful tests.
- Keep components small enough to understand.
- Remove dead code only after confirming it is unused.
- Do not leave placeholder links, TODO-only features, or nonfunctional buttons.
- Do not claim a feature works unless it has been tested.
- Avoid breaking existing Vercel deployment settings.

Use the package manager already established by the repository.

---

## 11. IMPLEMENTATION WORKFLOW

Work through the following phases:

### Phase 1 — Audit
Inspect the website and repository. Identify the current stack, sections, functionality, and strongest existing assets.

### Phase 2 — Design system
Establish the visual direction, palette, typography, layout grid, responsive rules, and motion principles.

### Phase 3 — Core implementation
Build the navigation, hero, About, project showcase, skills, learning journey, contact, and footer.

### Phase 4 — Motion and interactions
Implement GSAP animations, hover interactions, navigation transitions, and any useful project-detail interactions.

### Phase 5 — Responsive refinement
Test and refine the layout across mobile, tablet, laptop, and desktop.

### Phase 6 — Quality assurance
Run the available build, lint, and test commands. Fix errors rather than ignoring them.

Check:
- Browser console errors.
- Broken routes and external links.
- Contact functionality.
- Mobile navigation.
- Horizontal overflow.
- Reduced-motion behavior.
- Keyboard navigation.
- Image loading and layout stability.
- Production build output.

Use browser automation or a browser preview if available. If a particular test cannot be performed, state that limitation clearly.

### Phase 7 — Final review
Compare the completed site against the original implementation and verify that the redesign is cohesive across every section.

Do not stop when the homepage looks attractive on desktop. Finish the mobile experience and test the interactions.

---

## 12. ACCEPTANCE CRITERIA

The project is complete only when:

1. The entire existing portfolio has been redesigned consistently.
2. The hero establishes a recognizable visual identity.
3. Every section has a clear purpose and strong visual hierarchy.
4. Project information is truthful and links are verified.
5. The layout works across the specified screen sizes.
6. GSAP animations work correctly without duplicate triggers or console errors.
7. Reduced-motion preferences are respected.
8. Navigation and interactive elements are keyboard accessible.
9. Existing contact functionality and important features remain operational.
10. SEO metadata is meaningful and accurate.
11. The production build succeeds, or any external blocker is documented precisely.
12. No unfinished placeholder features remain.
13. The final result looks intentionally art-directed rather than assembled from a generic template.

Awwwards-level is the quality target, not a claim that the website will win an award.

---

## 13. FINAL RESPONSE FROM THE CODING AGENT

After implementation, provide a concise report containing:

- What changed in each section.
- The main design decisions.
- Important animation and interaction details.
- Files and components created or modified.
- Any dependencies added.
- Tests and build commands executed.
- Results of responsive and accessibility checks.
- Any remaining limitations.
- Whether the existing Vercel deployment was actually updated.

Do not claim that the production website was deployed unless the deployment was completed and verified.

## FINAL INSTRUCTION

Inspect first. Design deliberately. Implement the complete redesign. Test it. Refine it.

Prioritize originality, real project credibility, typography, composition, interaction quality, and performance over decorative complexity.

The final portfolio should communicate one clear message:

**I am a developer who is learning deliberately, building real things, and developing the skills to create thoughtful full-stack and AI-powered applications.**
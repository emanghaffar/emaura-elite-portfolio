# Emaura Creatives — Elite Animated UGC Portfolio V2

This is the upgraded frontend version using:

- Next.js
- TypeScript
- Custom responsive CSS
- Native HTML video
- Native IntersectionObserver animations
- No animation package dependency

## What changed

- New glassmorphism elite navbar
- User-provided color palette:
  - Amethyst Purple `#3A1F3D`
  - Soft Cream `#F4EFE7`
  - Muted Gold `#C2A46D`
  - Warm Navy `#2E3A4F`
- Animated hero video object with pointer movement
- Vertical moving "Collaborate with" section
- Video work cards with hover lift, play/pause and 25% sound level
- Automatically rotating interactive services
- Three confirmed pricing packages
- Most Popular centre package styling
- Optional add-ons section
- Updated About section with:
  - 2+ years experience
  - Web development
  - Mobile application development
  - VS Code
  - GitHub
- Scroll reveal and ambient background animations
- Fully responsive mobile layout

## Run the project

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Replace your old version

1. Stop the old server with `Ctrl + C`.
2. Keep a backup of the current folder.
3. Extract this ZIP.
4. Open the extracted `emaura-elite-portfolio-v2` folder in VS Code.
5. Run:

```bash
npm install
npm run dev
```

## Replace demo motion videos

Current MP4 files were generated from the Instagram screenshots because original UGC videos were not included in the uploaded project.

Folder:

```text
public/videos/
```

Replace these files with your original vertical MP4 videos:

```text
hero-reel.mp4
work-01.mp4
work-02.mp4
work-03.mp4
work-04.mp4
work-05.mp4
work-06.mp4
```

Keep the same filenames and the website will update automatically.

Recommended video format:

```text
MP4
1080 × 1920
H.264
9:16 vertical
Short compressed preview
```

## Add spreadsheet brands and work

The spreadsheet mentioned in the message was not present in the uploaded files available to this project.

Update:

```text
src/data/site-data.ts
```

Sections:

```ts
collaborations
portfolioItems
```

After the spreadsheet is uploaded, its verified rows can be transferred to these arrays.

## Update email and Upwork

File:

```text
src/data/site-data.ts
```

Update:

```ts
upworkUrl: "YOUR_PUBLIC_UPWORK_PROFILE_URL",
email: "YOUR_BUSINESS_EMAIL",
```

## Important contact-form note

The form is frontend-only. Backend email delivery, database storage, rate limiting and an admin panel will be built in the backend phase.


## Final hero artwork update

The final version uses the uploaded artwork:

```text
public/images/hero-content-creator.jpeg
```

The hero now includes:

- Mouse-follow parallax movement
- 3D tilt
- Rotating creator titles
- Floating trend tags
- Moving bottom content ribbon
- Verified collaborations badge
- Mobile-specific responsive artwork positioning

Main component:

```text
src/components/HeroMotion.tsx
```

Hero motion styling is appended inside:

```text
src/app/globals.css
```


## Corrected hero portrait version

This version changes only the hero artwork area:

- Uses `public/images/hero-portrait-final.png`
- Keeps the original left-side hero text
- Removes the overlapping animated text from inside the image
- Adds a purple aura behind the portrait card
- Adds subtle 3D parallax
- Adds a fairy-style cursor twinkle trail
- Keeps the verified portfolio badge and Explore Work action

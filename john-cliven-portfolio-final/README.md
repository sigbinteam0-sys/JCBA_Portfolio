# John Cliven B. Amadeo — Portfolio

A static portfolio website using plain HTML, CSS, and vanilla JavaScript. It preserves the selected dark navy and neon-lime design and includes four real student project folders.

## Main files
- `index.html` — portfolio structure and embedded profile image
- `style.css` — styling
- `script.js` — interactions and project-card navigation
- `data.json` — profile information and project cards
- `projects/` — the four project builds, plus source ZIP downloads

## Preview locally
Because the page loads `data.json` with `fetch`, run a local web server instead of opening `index.html` directly:
1. Open this folder in VS Code.
2. Open the integrated terminal.
3. Run `py -m http.server 8000`
4. Open `http://localhost:8000` in your browser.

Click a project card or its **Open project** link to open the actual project page in a new tab. Use **Download source** to get that project's source files.

## Deploy to Vercel manually
1. Put this folder in a GitHub repository and import it into Vercel.
2. Choose **Other** as the framework preset.
3. Leave the build command empty; this is a static site with no build step.
4. Deploy.

## Privacy and demo behavior
The Activity 3 grade table uses clearly labeled sample data for public display. Registration forms are front-end demonstrations and do not send or save submissions. Review any personal information before publishing publicly.

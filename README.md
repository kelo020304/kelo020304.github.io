# kelo020304.github.io

Personal academic homepage — static, single-page, al-folio inspired. Served by GitHub Pages at <https://kelo020304.github.io>.

## Structure

- `index.html` — everything (content + inlined CSS/JS): About, Research, News, Publications, Experience, Formula Student, Honors, Contact
- `assets/profile.svg` — placeholder avatar (replace with your photo)
- `assets/cv.pdf` — CV (English résumé)
- `assets/fsd.jpg`, `assets/fsdlogo.png` — images

## Edit checklist

Open `index.html` and update the placeholders:

- `your-email@sjtu.edu.cn` — your real email (appears in hero socials + Contact)
- Google Scholar / LinkedIn links in the hero `.socials`
- Replace `assets/profile.svg` with a real photo (e.g. `assets/profile.jpg`) and update the `<img class="photo" ...>` `src`
- Add more entries to the News list and Publications section as needed

## Local preview

```bash
cd kelo020304.github.io
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Create a repo on GitHub named exactly `kelo020304.github.io`.
2. From this folder:

   ```bash
   git init -b main
   git add .
   git commit -m "Add personal homepage"
   git remote add origin git@github.com:kelo020304/kelo020304.github.io.git
   git push -u origin main
   ```

3. In the repo: Settings → Pages → Source = `Deploy from a branch`, Branch = `main` / `/ (root)`.
4. Wait ~1 minute, then visit <https://kelo020304.github.io>.

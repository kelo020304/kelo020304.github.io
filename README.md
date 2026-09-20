# Ziheng Ji's academic homepage

Static personal website at <https://kelo020304.github.io>, with a profile sidebar and research, publications, experience, education, and Formula Student sections. Layout inspired by [Long Ling's homepage](https://github.com/LucyLing24/longling); implemented in plain HTML and CSS without a build step.

## Files

- `index.html`: content and mobile navigation
- `style.css`: desktop and mobile layouts
- `visitor-map.js`: optional MapMyVisitors widget configuration and loading
- `assets/profile.jpg`: portrait
- `assets/cv.pdf`: public English resume (review-sensitive details omitted)
- `assets/cv-zh.pdf`: public Chinese resume (review-sensitive details omitted)
- Other files in `assets/`: research figures, company logos, and racecar photographs
- `assets/zhuoyu.jpg`: original square logo from [Zhuoyu's official site](https://www.zyt.com/zh), sourced from <https://official-website-oss-normal.zyt.com/icons/logo.jpg>. Used solely to identify the company in the experience section; trademark rights remain with the owner.

## Preview

Run `python3 -m http.server 8000`, then open <http://localhost:8000>.

GitHub Pages serves the repository root. Local edits are not published until pushed to the configured Pages branch.

## Maintenance and publishing

The canonical repository is <https://github.com/kelo020304/kelo020304.github.io>. Keep the site on its existing `main` branch and GitHub Pages hosting.

1. Edit `index.html` for content and `style.css` for appearance. Keep images and public resumes in `assets/`.
2. Run `python3 scripts/check_site.py` and `git diff --check`. The same link check runs on pushes and pull requests. This check does not audit PDF text or guarantee review anonymity.
3. Review the exact diff and the public PDFs before committing. Stage only intended public files; private research notes and resume sources stay outside this repository.
4. Commit and push to `main`. Check the repository's Actions page for both the link check and the existing Pages deployment, then verify the live homepage and both resume downloads.

## Visitor map

The profile uses local SVG icons for both resumes, email, GitHub, and Google Scholar. Each link has an accessible name and a hover/keyboard-focus tooltip.

The visitor section uses the same MapMyVisitors map widget as the reference homepage. Activation requires an account and a widget issued for this site:

1. Visit <https://mapmyvisitors.com/add>, enter `https://kelo020304.github.io/`, sign in, and select the map widget.
2. Copy the `d` query parameter from the generated `map.js` embed URL into `widgetId` in `visitor-map.js`. Do not copy the reference site's ID: that would display its statistics.
3. Publish and verify that the live page shows the map and visitor count. The section stays hidden while the ID is empty; local previews never load the tracker.

The widget records homepage visits and approximate visitor locations, not individual outbound-link clicks. Data collection begins after activation and depends on the third-party service being reachable. The script loads once per page view; resizing does not re-inject it. If loading fails, the section shows an unavailable message instead of an invented count.

If the domain changes, update both the registered site and the hostname guard in `visitor-map.js`.

## Custom domain

The current public address remains <https://kelo020304.github.io>. No custom domain is configured until ownership is confirmed.

After obtaining a domain, verify ownership in GitHub's Pages settings, configure the domain in this repository's Pages settings, and add the DNS records at its registrar. Follow [GitHub's current custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Enable HTTPS after the certificate is ready. Do not add a `CNAME` file for an unowned domain.

## Content notes

As of September 20, 2026, Zhuoyu is marked as incoming with an expected start of September 21. The listed role is Algorithm Engineer Intern in the Simulation and Post-Training Algorithms Department. Update the status after the start is confirmed.

During anonymous review, the public site and downloadable resumes omit identifying details of manuscripts under review. Do not add manuscript titles, author lists, submission venues or IDs, review links, screenshots, or private resume sources to this repository. The review count is shown only in aggregate. Keep private tracking notes outside this repository.

Replacing a public file does not remove copies from Git history or external caches. Historical cleanup needs a separate review; do not force-push or rewrite repository history as part of an ordinary content update.

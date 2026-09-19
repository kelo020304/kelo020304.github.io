"""Check local homepage links without contacting external sites."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        for key in ("href", "src"):
            if attrs.get(key):
                self.links.append(attrs[key])
        if tag == "img":
            assert "alt" in attrs, "Image missing alternative text"


page = Page()
page.feed((ROOT / "index.html").read_text())
assert len(page.ids) == len(set(page.ids)), "Duplicate HTML IDs"
for link in page.links:
    url = urlsplit(link)
    if url.scheme or url.netloc:
        continue
    if url.path:
        target = (ROOT / unquote(url.path).lstrip("/")).resolve()
        assert ROOT in target.parents, f"Link escapes site: {link}"
        assert target.is_file(), f"Missing local file: {link}"
    elif url.fragment:
        assert unquote(url.fragment) in page.ids, f"Missing anchor: {link}"

for filename in ("cv.pdf", "cv-zh.pdf"):
    assert (ROOT / "assets" / filename).read_bytes().startswith(b"%PDF-"), filename
print("Local links, anchors, image alt text, and PDF signatures passed.")

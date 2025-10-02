
Flow Tech — Navigation + About Patch
====================================

What's in this patch:
- Services button now scrolls to #services on Home or goes to index.html#services from other pages.
- Mega menu hierarchy improved (top headings vs sub-links).
- Active nav highlighting for the current page.
- Image consistency helpers (aspect ratios) and updated About portraits for Nick & Michael.

How to apply (browser upload):
1) Upload **assets/site.css** and **assets/site.js**.
2) In each page, include in <head>:
   <link rel="stylesheet" href="assets/site.css">
   <script defer src="assets/site.js"></script>
3) Replace your header/nav block with the one from index.html (or copy the relevant parts).
4) Replace **about.html** with the included version.

---
title: 'Sample post: what a blog post looks like'
description:
  'A placeholder showing every formatting option. It is a draft, so it only
  appears in pnpm dev, never on the live site.'
pubDate: 2026-11-23
tags: ['Sample']
draft: true
---

This is a sample post. Copy this file, rename it (the filename becomes the URL,
so `career-pivot-myths.md` lives at `/blog/career-pivot-myths`), and replace the
text.

Set `draft: false` in the frontmatter at the top when you're ready to publish.
Until then, a post shows up only on your computer with `pnpm dev`.

The `description` is what Google and LinkedIn show under the title, so write it
for a stranger and keep it around 150 characters.

To add a cover photo, put the image next to the post file and add two lines to
the frontmatter:

```yaml
image: './career-pivot-myths.jpg'
imageAlt: 'What the photo shows, for people who cannot see it'
```

It appears at the top of the post and in link previews. Without one, previews
use the default photo of you from the homepage.

If you rework a post later, add `updatedDate: 2027-01-15` so search engines know
it changed.

## This is a section heading

Short paragraphs read best on a phone. One-sentence paragraphs are fine.

You can use **bold text** for emphasis, _italics_, and
[links to other pages](/services).

> This is a pull quote. It shows up in italic blue, like the quotes on the About
> page.

### A smaller heading

- A bulleted list
- With a few points
- That stay short

1. Or a numbered list
2. If the order matters

---

A horizontal line (three dashes) splits a post into parts.

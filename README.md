# Next.js Markdown Blog

![version](https://img.shields.io/badge/version-0.1.4-teal.svg)
![license](https://img.shields.io/badge/license-MIT-blue.svg)

My personal blog, accessible via these links:

- [https://mirbostani.com](https://mirbostani.com)
- [https://mirbostani.github.io](https://mirbostani.github.io)

## Deploy on GitHub Pages

```bash
$ npm run build
$ npm run deploy
$ git add .
$ git commit -m 'updated'
$ git push
$ git subtree split --prefix dist -b myblog
$ git push origin myblog:gh-pages --force
$ git branch -D myblog
```
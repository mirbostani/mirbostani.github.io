---
category: "Web Development"
title: "Deploy static Next.js websites on GitHub Pages"
description: "Use Next.js to develop and export a static HTML version of a website to be hosted on GitHub Pages."
date: "2021-09-16"
author: "mirbostani"
cover: '/post/deploy-static-nextjs-websites-on-github-pages/cover-nextjs-githubpages.png'
tags: nextjs,github
---

## Introduction

Next.js is a modern JavaScript framework that offers server-side rendering (SSR) and [static site generation](https://nextjs.org/docs/advanced-features/static-html-export) (SSG) features. Using SSG with Next.js, you will be able to create a static HTML version of your website at the build time and deploy it on any webserver (i.e., GitHub Pages and Actions) you like. The main advantage of this feature is that it makes the page loading process extremely fast for the viewers. In this article, I will explain how to create a static website with the SSG feature of the Next.js framework and deploy it on GitHub Pages.

## Create an Application

The first step is to create a Next.js application based on the blog-starter kit available among the provided [examples](https://github.com/vercel/next.js/tree/canary/examples). After creating the application, navigate to the project directory and start the development server on port `3333`.

```shell
$ npx create-next-app mywebsite --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
$ cd mywebsite
$ npx next dev --port 3333
```

Open your browser and visit `localhost:3333`. You should be able to see the following page.

![nextjs-starter](/post/deploy-static-nextjs-websites-on-github-pages/nextjs-blog-starter.png)

## Generate a Static Site

Modify the source code of this website based on your need. You can start by editing the website's home page, located in the `pages/index.js` file. However, remember that the export command used for generating static pages does not support the `next/image` component as this component relies on Image Optimization API. One solution is to use the `<img>` HTML tag or the [next-optimized-images](https://github.com/cyrilwanner/next-optimized-images) package instead of `next/image`. Besides, internationalized (i18n) routing is not compatible with exported pages either because it uses dynamic routing internally for implementation. The [next-export-i18n](https://github.com/martinkr/next-export-i18n) package is a suitable alternative.

To build and export your application to the `./dist` directory, use the following commands:

```shell
$ npx next build
$ npx next export -o dist/
```

## Test on Nginx

After exporting a static HTML version of your application, you can test it locally using the Nginx webserver. First, you need to update the package list and install Nginx with these commands:

```shell
$ sudo apt update
$ sudo apt install nginx
```

The Nginx service will start automatically after a successful installation. Check if the `nginx.service` is active and running:

```shell
$ sudo systemctl status nginx
```

You can point your browser to the `localhost` address. The following page should appear in your browser.

![nginx-active-and-running](/post/deploy-static-nextjs-websites-on-github-pages/nginx-active-and-running.png)

For testing purposes, you can now deploy your static website locally using the Nginx webserver. Just copy the `dist` directory, which contains your generated static website, to the `/var/www` path.

```shell
$ cd /path/to/project
$ sudo cp dist/ /var/www
```

In order to make your website accessible through `localhost:3000`, you need to set up a virtual host inside the Nginx webserver.

```shell
$ cd /etc/nginx/sites-available
$ sudo touch dist
$ vim dist
```

```nginx
server {
  listen 3000;
  listen [::]:3000;
  server_name dist.example.com;
  root /var/www/dist;
  index index.html;
  location / {
    try_files $uri $uri/ =404;
  }
}
```

Enable the virtual host that you've just created by creating a symbolic link inside the `sites-enabled` directory.

```shell
$ cd /etc/nginx/sites-enabled
$ sudo ln -s /etc/nginx/sites-available/dist dist
```

Restart Nginx to make the changes take effect.

```shell
$ sudo systemctl restart nginx
```

You can access the website by pointing your browser to the `localhost:3000` address.

## Push to GitHub

GitHub allows you to host a static webpage from your repository using GitHub Pages. So, create a repository with the `<yourusername>.github.io` structure and substitute `<yourusername>` with your GitHub username.

![create-github-repository](/post/deploy-static-nextjs-websites-on-github-pages/create-github-repository.png)

Create a local repository and merge it with your remote one.

```shell
$ mkdir mirbostani.github.io
$ cd mirbostani.github.io
$ git init
$ git branch -M main
$ git remote add origin https://github.com/mirbostani/mirbostani.github.io.git
```

Now, move the content of the `dist` directory to your local repository. If you want to host your website on GitHub Pages, you should create an empty file called `.nojekyll` to prevent GitHub Pages to use Jekyll by default. The last step is to commit and push your repository to be online.

```shell
$ cp -r /path/to/mywebsite/dist /path/to/mirbostani.github.io
$ cd /path/to/mirbostani.github.io
$ touch .nojekyll
$ git add .
$ git commit -m "Initial commit"
$ git push
```

If you don't have a custom domain and want to use your GitHub repository name, you should prefix the asset links by modifying the `next.config.js` file. Then, redo the exporting and pushing process.

```js
const isProd = process.env.NODE_ENV === "production"

module.exports = {
  assetPrefix: isProd ? "/<your-repo-name>/" : "",
}
```

Finally, you can visit your website on `<yourusername>.github.io`. It should be up and running.
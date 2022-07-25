import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import jsdom from "jsdom";

const postsDirectory = path.join(process.cwd(), "posts");
const matchDataExt = /-\d{4}-\d{2}-\d{2}\.md$/;
const matchExt = /\.md$/;

export function getPostsData({ page, limit, category, tags }) {
  page = page || 1;
  limit = limit || 10;
  const fileNames = fs.readdirSync(postsDirectory);
  let allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(matchExt, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...matterResult.data,
    };
  });
  if (category) {
    allPostsData = allPostsData.filter((data) => {
      return data.category == category;
    });
  }
  if (tags && tags.length > 0) {
    allPostsData = allPostsData.filter((data) => {
      const dataTags = data.tags.split(",").map((tag) => tag.trim());
      return !tags
        .map((tag) => {
          return dataTags.includes(tag);
        })
        .includes(false);
    });
  }
  allPostsData.sort(({ date: a }, { date: b }) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }).reverse();
  return allPostsData.slice((page - 1) * limit, page * limit);
}

export function getAllPostTags() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allTags = fileNames.map((fileName) => {
    const slug = fileName.replace(matchExt, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return matterResult.data.tags.split(",").map((tag) => tag.trim());
  });
  const uniqueTags = new Set();
  allTags.forEach((tags) => {
    tags.forEach((tag) => {
      uniqueTags.add(tag);
    });
  });
  return [...uniqueTags].map((tag) => {
    return {
      params: {
        tag,
      },
    };
  });
}

export function getAllPostCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allCategories = fileNames.map((fileName) => {
    const slug = fileName.replace(matchExt, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return matterResult.data.category;
  });
  const categories = {};
  allCategories.forEach((category) => {
    if (!categories[category]) {
      categories[category] = 1;
    } else {
      categories[category] += 1;
    }
  });
  return Object.keys(categories).map((category) => {
    return {
      params: {
        category,
        count: categories[category],
      },
    };
  });
}

/**
 * Get all post slugs.
 * @returns An array of all markdown filenames
 *
 * ```js
 * [
 *   {
 *     params: {
 *       slug: 'post1'
 *     }
 *   },
 *   {
 *     params: {
 *       slug: 'post2'
 *     }
 *   }
 * ]
 * ```
 */
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(matchExt, ""),
      },
    };
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const {headingAnchors, contentHtmlWithAnchors} = getHeadingAnchors(contentHtml);
  const readTime = getReadTime(contentHtml);
  return {
    slug,
    headingAnchors,
    contentHtml,
    contentHtmlWithAnchors,
    contentMarkdown: matterResult.content,
    readTime,
    ...matterResult.data,
  };
}

function getReadTime(str) {
  const dom = new jsdom.JSDOM(`<div class="readtime">${str}</div>`);
  let words = dom.window.document.querySelector("div.readtime").textContent;
  let count = words.split(" ").length;
  return Math.round(count / 200) || 1; // average word per min
}

function getHeadingAnchors(str) {
  const headingAnchors = [];
  const dom = new jsdom.JSDOM(`<div id="headinganchors">${str}</div>`);
  // @see components/markdown.js
  dom.window.document.querySelectorAll("h1, h2, h3").forEach((hx) => {
    // Modify headings by adding an anchor before them
    const id = hx.textContent.toLowerCase().replace(/\s+|[^a-z0-9]/g, "_");
    const anchor = dom.window.document.createElement("a");
    anchor.id = id;
    hx.insertBefore(anchor, null);

    // Prepare anchors for the table of content
    headingAnchors.push({
      heading: hx.nodeName.toLowerCase(),
      title: hx.textContent,
      anchorId: id,
    });
  });
  const contentHtmlWithAnchors =
    dom.window.document.getElementById("headinganchors").innerHTML;
  return {
    headingAnchors,
    contentHtmlWithAnchors,
  };
}

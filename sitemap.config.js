const data = require("./lib/data");

module.exports = {
  siteUrl: process.env.SITE_URL || data.site.url,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/public"],
};

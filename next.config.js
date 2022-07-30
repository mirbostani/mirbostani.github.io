const data = require("./lib/data");

// const isProd = process.env.NODE_ENV === "production";
// const host = "mirbostani.github.com";
// const host = "https://cdn.statically.io/gh/mirbostani/mirbostani.github.io/gh-pages"

module.exports = {
  compress: true,
  poweredByHeader: true,
  generateEtags: true,
  cleanDistDir: true,
  env: {
    SITE_NAME: data.site.name,
    SITE_URL: process.env.SITE_URL + "/api",
    NEXT_PUBLIC_MYNAME: "morteza",
  },
  // assetPrefix: isProd ? `${host}/` : "",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/posts/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

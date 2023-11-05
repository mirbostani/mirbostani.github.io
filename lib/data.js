const siteUrl = process.env.SITE_URL;
const data = {
  site: {
    name: "Seyed Morteza Mirbostani",
    url: siteUrl,
    /**
     * @see https://www.npmjs.com/package/next-seo
     */
    og: {
      image1: {
        url: `${siteUrl}/og-image.png`,
        width: 460,
        height: 460,
        alt: "Seyed Morteza Mirbostani",
      },
    }
  },
  mirbostani: {
    slug: "mirbostani",
    firstname: "Seyed Morteza",
    lastname: "Mirbostani",
    fullname: "Seyed Morteza Mirbostani",
    title: "Full Stack Engineer & NLP/CL Researcher",
    title_extended: "Full Stack Software Engineer and NLP/CL Researcher",
    location: "Rasht, Iran",
    image: "/mirbostani/image.png",
    thumb: "/mirbostani/thumb.png",
    avatar: "/mirbostani/avatar.png",
    twitter_handle: "@mirbostani",
    twitter: "https://twitter.com/mirbostani",
    github: "https://github.com/mirbostani",
    linkedin: "https://linkedin.com/in/mirbostani",
    // medium: "https://medium.com/@m.mirbostani",
    googlescholar: "https://scholar.google.com/citations?user=mpyJOEUAAAAJ&hl=en"
  },
  urls: {
    guilan_uni: "https://guilan.ac.ir/en/home",
    guilan_uni_nlp: "https://nlp.guilan.ac.ir/",
  },
};

module.exports = data;

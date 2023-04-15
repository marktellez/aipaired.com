require("dotenv").config();

const fs = require("fs/promises");
const path = require("path");
const RSS = require("rss");
const glob = require("glob");
const matter = require("gray-matter");

async function readMarkdownFile(path) {
  try {
    return await fs.readFile(path, "utf-8");
  } catch (err) {
    console.error(err);
  }
}

(async () => {
  const feedOptions = {
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} | RSS Feed`,
    description: `${process.env.NEXT_PUBLIC_SITE_DESCRIPTION} | RSS Feed`,
    site_url: process.env.NEXT_PUBLIC_HOST,
    feed_url: `${process.env.NEXT_PUBLIC_HOST}/rss.xml`,
    image_url: process.env.NEXT_PUBLIC_SITE_IMAGE,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, AIPaired`,
  };

  const feed = new RSS(feedOptions);

  const articles = glob.sync(`src/articles/published/**/*.md`);

  const articlePaths = articles.map(
    (file) =>
      `${process.env.NEXT_PUBLIC_HOST}/articles/${path.basename(file, ".md")}`
  );

  const articleContents = await Promise.all(
    articles.map((article) => readMarkdownFile(article))
  );

  articleContents.forEach(async (content, i) => {
    const { data } = matter(content);

    feed.item({
      title: data.title,
      description: data.summary,
      url: `${process.env.NEXT_PUBLIC_HOST}/articles/${data.slug}`,
      date: data.publishedOn,
      author: "Marcus Tellez",
    });
  });

  fs.writeFile(
    path.join(process.cwd(), "public/rss.xml"),
    feed.xml({ indent: true }),
    (err) => {
      if (err) throw err;
      console.log(
        `rss.xml with ${articlePaths.length} entries was written successfully`
      );
    }
  );
})();

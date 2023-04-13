require("dotenv").config();

const fs = require("fs/promises");
const path = require("path");

(async () => {
  const staticPaths = (await fs.readdir("./src/pages"))
    .filter((staticPage) => {
      return !["index", "api", "_app", "_document", "404", "sitemap"].includes(
        staticPage.split(".")[0]
      );
    })
    .map((staticPagePath) => {
      return `${process.env.NEXT_PUBLIC_HOST}/${staticPagePath.replace(
        /(test)?\.jsx/,
        ""
      )}`;
    });

  const articlesDirectory = path.join(process.cwd(), "src/articles/published");
  const fileNames = await fs.readdir(articlesDirectory);
  const articles = await Promise.all(
    fileNames.map(async (fileName) => path.join(articlesDirectory, fileName))
  );

  const articlePaths = articles.map(
    (file) =>
      `${process.env.NEXT_PUBLIC_HOST}/articles/${path.basename(file, ".md")}`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticPaths, ...articlePaths]
    .map((url) => {
      return `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      `;
    })
    .join("")}
</urlset>
`;

  fs.writeFile(
    path.join(process.cwd(), "public/sitemap.xml"),
    sitemap,
    (err) => {
      if (err) throw err;
      console.log(
        `sitemap.xml with ${
          [...staticPaths, ...articlePaths].length
        } entries was written successfully`
      );
    }
  );
})();

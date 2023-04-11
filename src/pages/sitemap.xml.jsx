import fs from "fs/promises";
import path from "path";

export default function SitemapPage({}) {
  return <div />;
}

export const getServerSideProps = async ({ res }) => {
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

  console.dir(staticPaths);

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

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

import fs from "fs/promises";
import path from "path";
import Link from "next/link";

import matter from "gray-matter";

import { Layout } from "@/features/layout";
import { Container } from "@/ui/page";
import { Breadcrumbs } from "@/ui/breadcrumbs";

export default function ArticlesIndex({ articles = [] }) {
  return (
    <Layout canonicalUrl={`${process.env.NEXT_PUBLIC_HOST}/articles`}>
      <Container>
        <div className="mt-24 grid-cols-2 mx-auto max-w-3xl">
          <Breadcrumbs
            crumbs={[{ name: "Articles", href: "/articles", current: true }]}
          />
          {articles.map((article) => (
            <summary key={article.id} className="list-none">
              <h3 className="font-hero text-2xl border-b-0 my-2">
                {article.title}
              </h3>
              <div>{article.readTime} read time</div>
              <p className="my-3">{article.summary}</p>
              <Link
                href={`/articles/${article.title
                  .replace(/\s/g, "-")
                  .replace(/[^a-zA-Z\-]/g, "")

                  .toLowerCase()}`}>
                continue to the article
              </Link>
            </summary>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const articlesDirectory = path.join(process.cwd(), "src/articles/published");
  const fileNames = await fs.readdir(articlesDirectory);
  const articles = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        id,
        ...data,
      };
    })
  );

  return {
    props: {
      articles,
    },
  };
}

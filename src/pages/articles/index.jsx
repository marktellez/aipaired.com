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
          <h1 className="my-16">
            Latest articles on Artificial Intelligence and Programming
          </h1>
          {articles.map((article) => {
            const url = `/articles/${article.title
              .replace(/\s/g, "-")
              .replace(/[^a-zA-Z\-]/g, "")

              .toLowerCase()}`;
            return (
              <summary key={article.id} className="list-none">
                <h3 className="font-hero text-2xl border-b-0 my-2">
                  <Link href={url}>{article.title}</Link>
                </h3>
                <div>{article.readTime} read time</div>
                <p className="my-3">{article.summary}</p>
                <Link href={url}>continue reading the full article</Link>
              </summary>
            );
          })}
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

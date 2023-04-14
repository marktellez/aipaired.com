import fs from "fs/promises";
import path from "path";

import matter from "gray-matter";

import { Layout } from "@/features/layout";
import { Container } from "@/ui/page";

import { HomepageHero as Hero } from "@/features/homepage/hero";
import { HomepageAboutMe as AboutMe } from "@/features/homepage/about-me";
import { HomepageArticles as Articles } from "@/features/homepage/articles";

export default function Homepage({ articles = [] }) {
  return (
    <Layout canonicalUrl="https://aipaired.com">
      <Container>
        <Hero />
      </Container>
      <Articles {...{ articles }} />
      <Container>
        <AboutMe />
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

import fs from "fs/promises";
import path from "path";

import matter from "gray-matter";

import { Layout } from "@/features/layout";
import { Container } from "@/ui/page";

import { HomepageHero as Hero } from "@/features/homepage/hero";
import { HomepageCTA as CTA } from "@/features/homepage/cta";
import { HomepageAboutMe as AboutMe } from "@/features/homepage/about-me";
import { Articles } from "@/features/articles";

export default function Homepage({ articles = [] }) {
  return (
    <Layout canonicalUrl="https://aipaired.com">
      <Container full>
        <Hero />
      </Container>

      <div className="bg-gray-100 py-16">
        <Container>
          <h2>My Musings on AI for Programmers</h2>
          <div className="sm:mt-24 grid-cols-2 mx-auto max-w-3xl">
            <Articles {...{ articles }} />
          </div>
        </Container>
      </div>
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

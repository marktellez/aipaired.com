import fs from "fs/promises";
import path from "path";
import Link from "next/link";

import matter from "gray-matter";

import { Layout } from "@/features/layout";
import { Container } from "@/ui/page";
import { Breadcrumbs } from "@/ui/breadcrumbs";
import { Articles } from "@/features/articles";

export default function ArticlesIndex({ articles = [] }) {
  return (
    <Layout
      canonicalUrl={`${process.env.NEXT_PUBLIC_HOST}/articles`}
      title="Articles on how to incorporate AI into your development process"
      metaDescription="If you want to stay up on the programming job market you need to know tools like chatgpt and codepilot. Check out these articles on the topic of ai assisted development!">
      <Container>
        <div className="mt-16 grid-cols-2 mx-auto max-w-3xl">
          <Breadcrumbs
            crumbs={[{ name: "Articles", href: "/articles", current: true }]}
          />
          <h1 className="my-8">
            Latest articles on Artificial Intelligence and Programming
          </h1>

          <p>
            Discover a world of insightful articles on prompt engineering,
            AI-driven development, and the latest advancements in ChatGPT,
            GPT-4, and GPT-5 technology. Our articles page is a treasure trove
            of knowledge for developers eager to leverage the power of
            artificial intelligence in their coding careers.
          </p>
          <p>
            Learn how to become an expert AI prompt engineer and stay on the
            cutting edge of the industry with our expertly crafted articles.
            Dive into the world of using ChatGPT for programming and unlock the
            secrets of OpenAI's prompt engineering. Stay ahead of the curve and
            empower your coding skills by exploring our comprehensive collection
            of articles today!
          </p>

          <h2 className="my-16">Read, learn, improve, make more money!</h2>

          <Articles {...{ articles }} />

          <div>
            <h2 id="attention-all-ai-assisted-programmers-and-prompt-engineers-">
              Attention all AI-assisted programmers and prompt engineers!
            </h2>
            <p>
              If you&#39;re looking to up your game and take your skills to the
              next level, I have some exciting news for you 🎉. For a limited
              time, I&#39;m offering two FREE weekly live classes on AI-assisted
              development and tools, as well as prompt engineering. Our
              community is growing, and we&#39;d love for you to join us in the
              discussion and get access to the live prompt engineering course
              🎓.
            </p>
            <p>
              All you need to do is click on the following link to{" "}
              <a href="https://discord.gg/D9PdH96xe9">
                join our Discord and get started
              </a>
              !
            </p>
            <p>
              Don&#39;t miss out on this fantastic opportunity to expand your
              knowledge and skills in the world of AI-assisted programming. We
              hope to see you there! 🚀
            </p>
          </div>
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

import Image from "next/image";
import matter from "gray-matter";
import dynamic from "next/dynamic";

import glob from "glob";
import { Layout } from "@/features/layout";
import { Container } from "@/ui/page";

import { ClockIcon, CalendarIcon } from "@heroicons/react/24/solid";

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

export default function Article({ slug, frontmatter, markdownBody }) {
  const url = process.env.NEXT_PUBLIC_HOST + "/articles/" + slug;
  return (
    <Layout
      article
      title={frontmatter.title}
      metaDescription={frontmatter.summary}
      publishedOn={frontmatter.publishedOn}
      canonicalUrl={url}>
      <article>
        <div className="relative">
          <figure>
            <Image
              className="absolute top-0"
              width="1920"
              height="800"
              src={`/images/articles/${slug}/hero.png`}
              alt={`blog_hero_${frontmatter.title}`}
            />
          </figure>
          <div className="absolute top-1/2 w-full text-center text-white">
            <div className="bg-black backdrop-blur-md bg-opacity-50">
              <h1 className="text-9xl font-hero drop-shadow-lg text-white">
                {frontmatter.title}
              </h1>
            </div>
          </div>
        </div>
        <Container>
          <div className="flex items-start justify-center my-4">
            <div className="w-2/3 text-prose max-w-2xl">
              <ReactMarkdown>{markdownBody}</ReactMarkdown>
            </div>
            <div className="w-1/3 border p-3">
              <div className="font-semibold text-xl">
                Author: {frontmatter.author}
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className=" h-4" />
                {frontmatter.publishedOn}
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className=" h-4" />
                {frontmatter.readTime} read time
              </div>
            </div>
          </div>
        </Container>
      </article>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // extracting the slug from the context
  const { slug } = context.params;

  // retrieving the Markdown file associated to the slug
  // and reading its data
  const md = await import(`@/articles/published/${slug}.md`);
  const { data, content } = matter(md.default);

  return {
    props: {
      slug,
      frontmatter: data,
      markdownBody: content,
    },
  };
}

export async function getStaticPaths() {
  const articles = glob.sync(`src/articles/published/**/*.md`);
  const slugs = articles.map((file) =>
    file.split("src/articles/published/")[1].slice(0, -3).trim()
  );
  const paths = slugs.map((slug) => {
    return { params: { slug: slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

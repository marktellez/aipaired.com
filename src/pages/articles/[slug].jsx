import { useState, useEffect } from "react";
import Image from "next/image";
import matter from "gray-matter";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

import glob from "glob";
import { Layout } from "@/features/layout";
import { Container } from "@/ui/page";
import { Breadcrumbs } from "@/ui/breadcrumbs";

import { ClockIcon, CalendarIcon } from "@heroicons/react/24/solid";

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

export default function Article({ slug, frontmatter, markdownBody }) {
  const url = process.env.NEXT_PUBLIC_HOST + "/articles/" + slug;
  const [shouldRender, setShouldRender] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setShouldRender(true);
    }
  }, [inView]);

  return (
    <Layout
      article
      title={frontmatter.title}
      metaDescription={frontmatter.summary}
      publishedOn={frontmatter.publishedOn}
      canonicalUrl={url}>
      <article ref={ref}>
        {shouldRender && (
          <>
            <div className="relative">
              <figure>
                <Image
                  className="absolute top-0 min-h-[800px]"
                  width={1920}
                  height={800}
                  src={`/images/articles/${slug}/hero.webp`}
                  alt={`blog_hero_${frontmatter.title}`}
                />
              </figure>
              <div className="absolute top-1/2 w-full text-center text-white">
                <div className="bg-black backdrop-blur-md bg-opacity-50">
                  <h1 className="sm:text-8xl font-hero drop-shadow-lg text-white">
                    {frontmatter.title}
                  </h1>
                </div>
              </div>
            </div>
            <Container>
              <div className="flex items-center justify-center my-3">
                <Breadcrumbs
                  crumbs={[
                    { name: "Articles", href: "/articles", current: false },
                    {
                      name: frontmatter.title,
                      href: window?.location.href,
                      current: true,
                    },
                  ]}
                />
              </div>
              <div className="flex flex-col-reverse sm:flex-row items-start justify-center my-4">
                <div className="sm:w-2/3 text-prose max-w-2xl">
                  <ReactMarkdown>{markdownBody}</ReactMarkdown>
                </div>
                <div className="w-full sm:w-1/3 sm:border p-3 sm:p-8 rounded-lg text-sm">
                  <div className="font-semibold sm:text-xl">
                    {frontmatter.author}
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
          </>
        )}
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

import Image from "next/image";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import Link from "next/link";
import glob from "glob";

import fs from "fs/promises";
import path from "path";

import { useRouter } from "next/router";

import { Layout } from "@/features/layout";
import { Container } from "@/ui/page";
import { Breadcrumbs } from "@/ui/breadcrumbs";
import ContinueReading from "@/ui/continue-reading";

import { ClockIcon, CalendarIcon } from "@heroicons/react/24/solid";

export default function Article({ slug, frontmatter, html, articles = [] }) {
  const router = useRouter();
  const lang = router.query.lang || "en";

  const url = process.env.NEXT_PUBLIC_HOST + "/articles/" + slug;

  const filteredArticles = articles.filter((article) => {
    if (!article.hasOwnProperty("translations") && lang == "en") return true;

    return (
      article.hasOwnProperty("translations") &&
      !article.translations.hasOwnProperty(lang)
    );
  });

  return (
    <Layout
      article
      title={frontmatter.pageTitle}
      metaDescription={frontmatter.summary}
      publishedOn={frontmatter.publishedOn}
      author={frontmatter.author}
      canonicalUrl={url}
    >
      <article className="-mt-[40px]">
        <>
          <div className="relative h-screen">
            <figure>
              <Image
                // className="absolute top-0 min-h-[800px]"
                className="h-screen object-cover"
                width={1920}
                height={800}
                layout="fill"
                src={frontmatter.heroImage}
                alt={`blog_hero_${frontmatter.title}`}
              />
            </figure>
            <div className="absolute bottom-0 lg:bottom-10 w-full text-center text-white">
              {/* <div className="absolute top-1/2 w-full text-center text-white"> */}
              <div className="bg-black backdrop-blur-md bg-opacity-50 p-10">
                <h1 className="sm:text-4xl md:text-6xl font-hero drop-shadow-lg text-white border-none">
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
                    href:
                      typeof window === "undefined"
                        ? "#"
                        : window.location.href,
                    current: true,
                  },
                ]}
              />
            </div>

            <div className="grid md:grid-cols-3">
              {/* 
                  INTRO 
                  ///////////////////
              */}
              <div className=" md:col-span-3 order-1">
                <ContinueReading
                  translations={frontmatter.translations}
                ></ContinueReading>
                <p className="m-auto border-t border-b py-7 capitalize-first mt-7">
                  {frontmatter.summary}
                </p>
              </div>
              {/* 
                    Main content 
                    ///////////////////
              */}
              <div className="md:col-span-2 order-2 pr-5">
                <div className="text-prose">
                  <div
                    dangerouslySetInnerHTML={{ __html: html }}
                    className="article mt-10"
                  />
                </div>
              </div>
              {/* 
                    Sidebar
                    ///////////////////
              */}
              <div className="order-3">
                <div className="border-l pt-7">
                  <div className="px-3 sm:px-8 text-sm flex flex-row md:flex-col">
                    <div className="mb-5">
                      <Image
                        src="/images/marcus-avatar.png"
                        alt="Marcus Tellez photo"
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex items-center font-semibold sm:text-xl">
                      {frontmatter.author}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <CalendarIcon className=" h-4" />
                      {frontmatter.publishedOn}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <ClockIcon className=" h-4" />
                      {frontmatter.readTime}
                    </div>
                  </div>
                  {Boolean(filteredArticles.length) && (
                    <div className="px-3 sm:px-8  text-sm">
                      <h3 className="my-4 mx-0">Recent articles</h3>
                      <div className="flex flex-col gap-3">
                        {filteredArticles.map((article) => (
                          <div>
                            <Link href={`/articles/${article.slug}`}>
                              {article.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* <div>
              <div className="mb-4">
                <ContinueReading
                  translations={frontmatter.translations}
                ></ContinueReading>
              </div>

              <p className="m-auto border-t border-b py-7 capitalize-first">
                {frontmatter.summary}
              </p>
            </div> */}
            {/* <div className="flex flex-col-reverse sm:flex-row items-start justify-center mb-4 gap-5">
              <div className="sm:w-2/3 text-prose max-w-2xl">
                <div
                  dangerouslySetInnerHTML={{ __html: html }}
                  className="article mt-10"
                />
              </div>

              <div className="w-full sm:w-1/3 border-l pt-7">
                <div className="px-3 sm:px-8 text-sm flex flex-row md:flex-col">
                  <div className="mb-5">
                    <Image
                      src="/images/marcus-avatar.png"
                      alt="Marcus Tellez photo"
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex items-center font-semibold sm:text-xl">
                    {frontmatter.author}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <CalendarIcon className=" h-4" />
                    {frontmatter.publishedOn}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <ClockIcon className=" h-4" />
                    {frontmatter.readTime}
                  </div>
                </div>
                {Boolean(filteredArticles.length) && (
                  <div className="px-3 sm:px-8  text-sm">
                    <h3 className="my-4 mx-0">Recent articles</h3>
                    {filteredArticles.map((article) => (
                      <div>
                        <Link href={`/articles/${article.slug}`}>
                          {article.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div> */}
          </Container>
        </>
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

  const parsed = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

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
      slug,
      frontmatter: data,
      html: parsed.toString(),
      articles: articles.filter((article) => article.slug !== slug),
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

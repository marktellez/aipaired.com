import Link from "next/link";
import { Container } from "@/ui/page";

export function HomepageArticles({ articles = [] }) {
  return (
    <div className="bg-gray-100 py-16">
      <Container>
        <h2>My Musings on AI for Programmers</h2>
        <div className="sm:mt-24 grid-cols-2 mx-auto max-w-3xl">
          {articles.map((article) => (
            <summary key={article.id} className="list-none">
              <Link href={`/articles/${article.slug}`}>
                <h3 className="font-hero text-2xl border-b-0 my-2 cursor-pointer hover:text-pink-500">
                  {article.title}
                </h3>
              </Link>

              <div>{article.readTime} read time</div>
              <p className="my-3">{article.summary}</p>
              <Link href={`/articles/${article.slug}`}>
                continue to the article
              </Link>
            </summary>
          ))}
        </div>
      </Container>
    </div>
  );
}

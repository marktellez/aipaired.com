import Link from "next/link";
export function HomepageArticles({ articles = [] }) {
  return (
    <div>
      <h2>Articles about the pairing of AI and developers and businesses</h2>
      <div className="mt-24 grid-cols-2 mx-auto max-w-3xl">
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
    </div>
  );
}

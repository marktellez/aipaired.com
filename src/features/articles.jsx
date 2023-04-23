import Link from "next/link";
import { useRouter } from "next/router";

export function Articles({ articles = [] }) {
  const router = useRouter();
  const lang = router.query.lang || "en";

  const filteredArticles = articles.filter((article) => {
    if (!article.hasOwnProperty("translations") && lang == "en") return true;

    return (
      article.hasOwnProperty("translations") &&
      !article.translations.hasOwnProperty(lang)
    );
  });

  return (
    <div className="flex flex-col gap-8 ">
      {filteredArticles.map((article) => (
        <summary
          key={article.id}
          className="list-none border-b border-gray-500 py-4">
          <Link href={`/articles/${article.slug}?lang=${lang}`}>
            <h3 className="font-hero text-2xl border-b-0 my-2 cursor-pointer hover:text-pink-500">
              {article.title}
            </h3>
          </Link>

          <div>{article.readTime}</div>
          <p className="my-3">{article.summary}</p>
          <Link href={`/articles/${article.slug}?lang=${lang}`}>
            continue to the article
          </Link>
        </summary>
      ))}
    </div>
  );
}

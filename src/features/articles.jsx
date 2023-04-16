import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "@/ui/page";

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

  return filteredArticles.map((article) => (
    <summary key={article.id} className="list-none">
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
  ));
}

import Image from "next/image";
import { ClockIcon, CalendarIcon } from "@heroicons/react/24/solid";

function ArticleInfo({ frontmatter, className }) {
  return (
    <>
      <div
        className={`text-sm flex flex-row md:flex-col gap-3 md:gap-1 ${className}`}
      >
        <div className="hidden md:block">
          <Image
            src="/images/marcus-avatar.png"
            alt={frontmatter.author}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {frontmatter.author && (
          <div className="flex items-center font-semibold sm:text-xl">
            {frontmatter.author}
          </div>
        )}
        {frontmatter.publishedOn && (
          <div className="flex items-center gap-1 text-gray-500">
            <CalendarIcon className=" h-4" />
            {frontmatter.publishedOn}
          </div>
        )}

        {frontmatter.readTime && (
          <div className="flex items-center gap-1 text-gray-500">
            <ClockIcon className=" h-4" />
            {frontmatter.readTime}
          </div>
        )}
      </div>
    </>
  );
}
export default ArticleInfo;

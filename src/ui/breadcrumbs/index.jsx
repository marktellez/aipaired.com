import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import NextHead from "next/head";
export function Breadcrumbs({ crumbs = [] }) {
  return (
    <>
      {Boolean(crumbs.length) && (
        <NextHead>
          <script type="application/ld+json">
            {JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: crumbs.map((crumb, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: crumb.name,
                  item: crumb.href,
                })),
              },
            ])}
          </script>
        </NextHead>
      )}

      <nav className="flex my-5" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <a href="/" className="text-gray-600 hover:text-gray-500">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {Boolean(!crumbs.length) && (
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-600"
                  aria-hidden="true"
                />
                <a
                  href={"/"}
                  className="ml-4 text-sm font-medium text-gray-600 hover:text-pink-600">
                  Welcome to the future of software development
                </a>
              </div>
            </li>
          )}
          {crumbs.map((crumb) => (
            <li key={crumb.name}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-600"
                  aria-hidden="true"
                />
                <a
                  href={crumb.href}
                  className="ml-4 text-sm font-medium text-gray-600 hover:text-pink-600"
                  aria-current={crumb.current ? "page" : undefined}>
                  {crumb.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

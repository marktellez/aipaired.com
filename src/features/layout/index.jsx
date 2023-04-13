import Head from "next/head";

import { MainMenu } from "./main-menu";
import { Footer } from "./footer";

export const Layout = ({
  children,
  title = "AIPaired: Ethical AI Solutions for Thriving Businesses in the Digital Age",
  metaDescription = "Discover AI-powered solutions with AIPaired – ethical, responsible, and transformative strategies for businesses navigating the technology-driven future. Thrive in the era of AI and beyond.",
  siteName = "AIPaired - Helping businesses leverage AI",
  siteImage = "https://aipaired.com/images/site-image.png",
  publishedOn,
  modifiedOn,
  canonicalUrl,
  article = false,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://aipaired.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://aipaired.com/" />
        <meta property="og:site_name" content={siteName} />

        <>
          {article ? (
            <meta property="article:modified_time" content={publishedOn} />
          ) : (
            ""
          )}
          {siteImage && <meta property="og:image" content={siteImage} />}
          <meta name="twitter:card" content="summary_large_image" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://aipaired.com/",
                  url: "https://aipaired.com/",
                  name: title,
                  isPartOf: { "@id": "https://aipaired.com/#website" },
                  about: { "@id": "https://aipaired.com/#organization" },
                  primaryImageOfPage: {
                    "@id": "https://aipaired.com/#primaryimage",
                  },
                  image: { "@id": "https://aipaired.com/#primaryimage" },
                  thumbnailUrl: siteImage,
                  datePublished: publishedOn,
                  dateModified: modifiedOn,
                  description: metaDescription,
                  breadcrumb: { "@id": "https://aipaired.com/#breadcrumb" },
                  inLanguage: "en-US",
                  potentialAction: [
                    {
                      "@type": "ReadAction",
                      target: ["https://aipaired.com/"],
                    },
                  ],
                },
                {
                  "@type": "ImageObject",
                  inLanguage: "en-US",
                  "@id": "https://aipaired.com/#primaryimage",
                  url: siteImage,
                  contentUrl: canonicalUrl,
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://aipaired.com/#breadcrumb",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home" },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://aipaired.com/#website",
                  url: "https://aipaired.com/",
                  name: siteName,
                  description: metaDescription,
                  publisher: { "@id": "https://aipaired.com/#organization" },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          "https://aipaired.com/?s={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                  inLanguage: "en-US",
                },
                {
                  "@type": "Organization",
                  "@id": "https://aipaired.com/#organization",
                  name: siteName,
                  url: "https://aipaired.com/",
                  logo: {
                    "@type": "ImageObject",
                    inLanguage: "en-US",
                    "@id": "https://aipaired.com/#/schema/logo/image/",
                    url: siteImage,
                    contentUrl: siteImage,
                    width: 512,
                    height: 512,
                    caption: siteName,
                  },
                  image: {
                    "@id": "https://aipaired.com/#/schema/logo/image/",
                  },
                },
              ],
            })}
          </script>
        </>
      </Head>
      <MainMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

import Head from "next/head";

import { MainMenu } from "./main-menu";
import { Footer } from "./footer";

export const Layout = ({
  children,
  title = process.env.NEXT_PUBLIC_SITE_TITLE,
  metaDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  siteName = process.env.NEXT_PUBLIC_SITE_NAME,
  siteImage = process.env.NEXT_PUBLIC_SITE_IMAGE,
  canonicalUrl = process.env.NEXT_PUBLIC_HOST,
  author,
  publishedOn,
  modifiedOn,
  article = false,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for aipaired.com"
          href="/rss.xml"
        />

        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
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

        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={siteName} />

        <>
          {article ? (
            <meta property="article:modified_time" content={publishedOn} />
          ) : (
            ""
          )}
          {siteImage && <meta property="og:image" content={siteImage} />}
          {author && <meta name="author" content={author} />}
          <meta name="publisher" content="AIPaired" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={siteImage} />
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
                  inLanguage: "en-US",
                  potentialAction: [
                    {
                      "@type": "ReadAction",
                      target: [canonicalUrl],
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
                  "@type": "WebSite",
                  "@id": "https://aipaired.com/#website",
                  url: "https://aipaired.com/",
                  name: siteName,
                  description: metaDescription,
                  publisher: { "@id": "https://aipaired.com/#organization" },
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

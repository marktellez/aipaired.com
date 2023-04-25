import { useState } from "react";
import Head from "next/head";
const step = 10;

export function Reviews({ reviews = [] }) {
  const [displayedReviews, setDisplayedReviews] = useState(step);

  const loadMore = () => {
    setDisplayedReviews((prevDisplayedReviews) => prevDisplayedReviews + step);
  };

  const filteredReviews = reviews
    .filter((review) => review.avatar)
    .slice(0, displayedReviews);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              name: "Sr Web Developer and AI Researcher",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.98",
                bestRating: "5",
              },
            }),
          }}
        />
      </Head>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReviews.map((review) => (
            <div className="flex flex-col p-4 border rounded my-2 prose">
              <div className="flex items-center gap-2">
                {review?.avatar ? (
                  <img
                    src={review.avatar}
                    alt={`5 star review by ${review.name}`}
                    className="rounded-full w-12 h-12"
                  />
                ) : (
                  <div className="rounded-full w-12 h-12 bg-blue-500 text-white flex items-center justify-center font-black">
                    {review.name[0]}
                  </div>
                )}
                <div className="p-1">
                  <div className="font-medium">{review.name}</div>
                  <div className="text-xs -mt-2">{review.date}</div>
                </div>
              </div>
              <div className="text-sm">{review.review}</div>
            </div>
          ))}
        </div>
        {displayedReviews < reviews.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMore}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Load more
            </button>
          </div>
        )}
      </div>
    </>
  );
}

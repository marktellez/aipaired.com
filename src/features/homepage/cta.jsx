export function HomepageCTA({}) {
  return (
    <div className="py-4 hover:bg-blue-500 hover:text-white text-center mt-16 mb-8 relative bg-white rounded-full px-3  text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
      <a
        href="https://calendly.com/aipaired/30m-introduction-call"
        target="_blank"
        className="whitespace-nowrap font-semibold">
        Are you looking for an AI driven developer specialist?{" "}
        <span className="mx-1 text-indigo-600 hover:text-indigo-900">
          Schedule a phone call with us
        </span>
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}

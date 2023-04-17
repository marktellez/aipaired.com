export function HomepageCTA({}) {
  return (
    <div className="py-4 hover:bg-blue-500 hover:text-white text-center mt-16 mb-8 relative bg-white rounded-full px-3  text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
      Are you looking for an AI developer specialist?{" "}
      <a
        href="https://calendly.com/aipaired/30m-introduction-call"
        target="_blank"
        className="whitespace-nowrap font-semibold text-indigo-600"
      >
        <span className="absolute inset-0" aria-hidden="true" />
        Schedule a phone call with us <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}

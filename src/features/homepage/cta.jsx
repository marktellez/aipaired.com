export function HomepageCTA({}) {
  return (
    <a
      href="https://calendly.com/aipaired/30m-introduction-call"
      target="_blank"
      className="group whitespace-nowrap font-semibold text-indigo-600 flex flex-col py-4 hover:bg-blue-500 text-center mt-16 mb-8 relative bg-white rounded-full px-3  text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-blue-500"
    >
      <span className="font-normal text-gray-400 group-hover:text-white">
        Are you looking for an AI driven developer specialist?{" "}
      </span>
      <span className="mx-1 group-hover:text-white">
        Schedule a phone call with us
        <span aria-hidden="true">&rarr;</span>
      </span>
    </a>
  );
}

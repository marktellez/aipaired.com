export function HomepageCTA({}) {
  return (
    <div className=" bg-blue-500">
      <div className="sm:w-1/2 mx-auto p-8 my-8">
        <div className="relative bg-white rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Are you looking for an AI developer specialist?{" "}
          <a
            href="https://calendly.com/aipaired/30m-introduction-call"
            target="_blank"
            className="whitespace-nowrap font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Schedule a phone call with us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export function HomepageHero({}) {
  return (
    <div className="">
      <div className="pb-16 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="mt-4 text-3xl font-hero uppercase font-bold tracking-wide text-gray-900 sm:mt-8 sm:text-5xl">
            Leverage AI in your business today
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AI promises to bring about unparalleled change in our world. Reflect
            on the deep influence the Internet has left on humanity, and imagine
            this effect intensified by a factor of 100. At AIPaired, we commit
            ourselves to helping businesses traverse the AI-driven landscape
            with a strong focus on responsibility and ethics. Our knowledge
            empowers organizations to not just adjust, but flourish in this
            rapidly evolving technological epoch.
          </p>

          <div className="hidden sm:mt-32 sm:flex lg:mt-16">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Are you looking for an AI developer specialist?{" "}
              <a
                href="https://calendly.com/aipaired/30m-introduction-call"
                target="_blank"
                className="whitespace-nowrap font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Schedule a phone call with us{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <Image
          className="aspect-w-3 aspect-h-2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-none lg:h-full"
          src={"/images/homepage/hero.webp"}
          alt="AIPaired hero image"
          layout="fill"
        />
      </div>
    </div>
  );
}

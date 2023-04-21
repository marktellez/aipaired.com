import Image from "next/image";
import { Breadcrumbs } from "@/ui/breadcrumbs";

export function HomepageHero({}) {
  return (
    <div>
      <div className=" pt-10  lg:col-span-7 lg:px-0  lg:pt-48 xl:col-span-6">
        <div className="mx-auto lg:mx-0 w-full md:w-2/5 ">
          <Breadcrumbs crumbs={[]} />
          <h1 className="mt-4 text-3xl font-hero uppercase font-bold tracking-wide text-gray-900 sm:mt-8 sm:text-5xl">
            Leverage AI in your business today
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 ">
            AI Driven Development has the potential to revolutionize the way we
            write code and run our businesses, amplifying the transformative
            impact of the Internet by 100 times. At AIPaired, we're dedicated to
            helping businesses navigate this AI-driven landscape with a strong
            emphasis on responsibility and ethics. Our expertise enables
            organizations to not only adapt but thrive in this rapidly evolving
            technological era.
          </p>
        </div>
      </div>

      <div className="relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <div className="h-full w-full">
          <Image
            className="h-full w-full object-cover lg:absolute lg:inset-0 lg:aspect-none"
            src={"/images/homepage/hero.webp"}
            alt="AIPaired hero image showcasing AI-driven development concept"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

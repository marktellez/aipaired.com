import Image from "next/image";
import { Row } from "@/ui/page";
import { Breadcrumbs } from "@/ui/breadcrumbs";
import { HomepageCTA as CTA } from "@/features/homepage/cta";

export function HomepageHero({}) {
  return (
    <Row>
      <div className="flex gap-10 items-center">
        <div className="xl:w-1/2">
          <div className="pt-14">
            <Breadcrumbs crumbs={[]} />
            <h1 className="mt-4 text-3xl font-hero uppercase font-bold tracking-wide text-gray-900 sm:mt-8 sm:text-5xl">
              Leverage AI in your business today
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 ">
              The era of AI Driven Development is here, and it has the potential
              to revolutionize the way businesses operate. At AIPaired, we are
              committed to giving entrepreneurs and companies the tools and
              insights they need to embrace AI and drive their businesses
              forward. Our expertise can help organizations unlock the power of
              AI to increase productivity, creativity and revenue. Join us in
              taking advantage of this new technology to shape an even brighter
              future.
            </p>
            <CTA />
          </div>
        </div>
        <div className="w-1/2 hidden xl:block -mr-10">
          <div className="relative w-full lg:max-w-2xl h-screen">
            <div className="absolute inset-0 -right-20 -top-20">
              <Image
                className="object-cover"
                src={"/images/homepage/hero.png"}
                alt="AIPaired hero image"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
}

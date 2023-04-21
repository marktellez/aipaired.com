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
              The era of AI Driven Development is upon us, and its potential for
              transformational impact is unprecedented. Just as the Internet
              revolutionized the way we live and work, AI promises to take it a
              step further. At AIPaired, we understand the importance of
              responsible and ethical AI adoption, and we are dedicated to
              helping businesses navigate this new landscape. Our expertise and
              insights empower organizations to not only adapt, but also thrive
              in this rapidly changing technological epoch. Join us in embracing
              the power of AI to shape a better future for all.
            </p>
            <CTA />
          </div>
        </div>
        <div className="w-1/2 hidden xl:block -mr-10">
          <div className="relative w-full lg:max-w-2xl h-screen">
            <div className="absolute inset-0 -right-20 -top-20">
              <Image
                className="object-cover"
                src={"/images/homepage/hero.webp"}
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

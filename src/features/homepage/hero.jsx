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
              AI promises to bring about unparalleled change in our world.
              Reflect on the deep influence the Internet has left on humanity,
              and imagine this effect intensified by a factor of 100. At
              AIPaired, we commit ourselves to helping businesses traverse the
              AI-driven landscape with a strong focus on responsibility and
              ethics. Our knowledge empowers organizations to not just adjust,
              but flourish in this rapidly evolving technological epoch.
            </p>
            <CTA />
          </div>
        </div>
        <div className="w-1/2 hidden xl:block -mr-10">
          <div className="relative w-full lg:max-w-2xl h-screen">
            <div className="absolute inset-0 -right-20 -top-20">
              {/* <div className="relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"> */}
              <Image
                className="object-cover"
                src={"/images/homepage/hero.webp"}
                alt="AIPaired hero image"
                layout="fill"
                width={1456}
                height={816}
              />
            </div>
          </div>
        </div>
      </div>
    </Row>
    // <div className="flex">
    //   <div className=" pt-14  lg:col-span-7 lg:px-0  lg:pt-48 xl:col-span-6">
    //     <div className="mx-auto lg:mx-0 w-full xl:w-2/5 ">
    //       <Breadcrumbs crumbs={[]} />
    //       <h1 className="mt-4 text-3xl font-hero uppercase font-bold tracking-wide text-gray-900 sm:mt-8 sm:text-5xl">
    //         Leverage AI in your business today
    //       </h1>
    //       <p className="mt-6 text-lg leading-8 text-gray-600 ">
    //         AI promises to bring about unparalleled change in our world. Reflect
    //         on the deep influence the Internet has left on humanity, and imagine
    //         this effect intensified by a factor of 100. At AIPaired, we commit
    //         ourselves to helping businesses traverse the AI-driven landscape
    //         with a strong focus on responsibility and ethics. Our knowledge
    //         empowers organizations to not just adjust, but flourish in this
    //         rapidly evolving technological epoch.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="relative lg:col-span-5">
    //     {/* <div className="relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"> */}
    //     <div className="h-full w-full">
    //       <Image
    //         className="h-full w-full object-cover lg:absolute lg:inset-0 lg:aspect-none"
    //         src={"/images/homepage/hero.webp"}
    //         alt="AIPaired hero image"
    //         layout="responsive"
    //         // layout="fill"
    //         width={1456}
    //         height={816}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

import Image from "next/image";
import { Reviews } from "@/features/reviews";
import reviews from "@/data/reviews";

import { Star } from "@/ui/svgs/star";

export function HomepageAboutMe({}) {
  return (
    <div className="border-t">
      <div className="flex flex-col sm:flex-row  items-center gap-10">
        <div className="sm:w-1/2 mx-16 sm:mx-auto justify-center items-center gap-10">
          <div className="flex justify-center">
            <Image
              src="/images/marcus-avatar.png"
              alt="Marcus Tellez photo"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center gap-3 justify-center w-full my-4">
            <div>5.0</div>
            <div className="flex text-blue-500 items-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <span>(453 reviews)</span>
          </div>
          <p className="prose text-sm text-center">
            You can verify the majority of these reviews at{" "}
            <a href="https://www.codementor.io/@marktellez">Codementor.io</a>{" "}
            where I spent years helping companies and people just like you!
          </p>
        </div>

        <div className="sm:w-1/2">
          <h2>
            Meet Marcus Tellez
            <span className="text-sm"> AI Expert and Thought Leader</span>
          </h2>

          <div className="flex items-center">
            <div>
              <a
                target="_blank"
                href="https://github.com/marktellez/marktellez">
                My Github
              </a>
            </div>
          </div>
          <p className="">
            Marcus Tellez is a highly skilled software developer and AI expert
            with over 25 years of experience in the industry. Since 1997, Marcus
            has been providing cutting-edge software solutions and AI consulting
            services to clients across various sectors, including construction,
            finance, and language industries.
          </p>
          <p className="">
            His expertise in AI and software development, along with a strong
            dedication to delivering high-quality solutions, has made him a
            sought-after consultant and thought leader in the field. With a
            passion for innovation and a keen eye on the ethical implications of
            AI, Marcus is dedicated to shaping the future of artificial
            intelligence in a responsible and sustainable manner.
          </p>
        </div>
      </div>

      <div>
        <Reviews {...{ reviews }} />
      </div>
    </div>
  );
}

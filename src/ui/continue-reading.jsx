import Link from "next/link";
import { Button } from "@/ui/form/button";
var style = {
  button: "gap-1 inline-block",
};

function ContinueReading({ translations }) {
  return (
    <>
      {translations.es ? (
        <div className="italic opacity-80">
          <span className="flex gap-1 sm:flex-row flex-col">
            Continue reading in English, or
            <Link href={translations.es} scroll={false}>
              Cambiando a Español
            </Link>
          </span>
        </div>
      ) : (
        <div className="italic opacity-80">
          <span className="flex gap-1 flex-row flex-col">
            Continúa leyendo en Español, o
            <Link href={translations.en} scroll={false}>
              switch to English
            </Link>
          </span>
        </div>
      )}
    </>
    // <>
    //   {translations.es ? (
    //     <Button className={style.button}>
    //       <span className="flex gap-1">
    //         Continue reading in English, or
    //         <Link href={translations.es} scroll={false}>
    //           Cambiando a Español
    //         </Link>
    //       </span>
    //     </Button>
    //   ) : (
    //     <Button className={style.button}>
    //       <span className="flex gap-1">
    //         Continúa leyendo en Español, o
    //         <Link href={translations.en} scroll={false}>
    //           switch to English
    //         </Link>
    //       </span>
    //     </Button>
    //   )}
    // </>
  );
}
export default ContinueReading;

import bottle from "../../public/images/bottle.png";

import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
function HeroSection() {
  const { language } = useLanguage();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <div className="h-[96px] tablet:h-[61px]"></div>
      <motion.div
        ref={ref}
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        className="overflow-hidden relative w-[100%] pt-[30px] pr-[46px] pb-[126px] pl-[23px] flex flex-col gap-[24px] bg-gradient-to-bl from-backgroundColor-purpleStart via-backgroundColor-purpleMid to-backgroundColor-purpleEnd text-white desktop:pt-[70px] desktop:pl-[75px] desktop:pr-[450px] desktop:pb-[250px]"
      >
        {language === "georgian" ? (
          <>
            <h1 className="text-[48px] leading-[55px] font-[400] font-tommaso">
              ჟუჟუნა
            </h1>
            <h2 className="text-[36px] leading-[42px] font-[400] opacity-[0.6] font-tommaso">
              ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა
            </h2>
            <p className="text-[20px] leading-[23px] text-[400]">
              მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ,
              ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ
              მსუბუქ გაზს იძენს.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-[48px] leading-[55px] font-[400] font-tommaso">
              Jujuna
            </h1>
            <h2 className="text-[36px] leading-[42px] font-[400] opacity-[0.6] font-tommaso">
              The wine is neither still nor fully sparkling
            </h2>
            <p className="text-[20px] leading-[23px] text-[400]">
              We prepare it with rkatsiteli and greens obtained in the early
              harvest, That is why it has a characteristic acidity. Natural from
              secondary fermentation Gets light gas.
            </p>
          </>
        )}

        <img
          src={bottle}
          className="w-[207px] h-[260px] rotate-[225deg] absolute bottom-[-70px] right-[-70px] desktop:h-[600px] desktop:w-[570px] desktop:bottom-[-120px] desktop:right-[-240px]"
        />
        <img
          src={bottle}
          className="w-[207px] h-[260px] rotate-[45deg] absolute right-[30px] bottom-[-95px] desktop:h-[600px] desktop:w-[570px] desktop:bottom-[-150px]"
        />
      </motion.div>
    </>
  );
}

export default HeroSection;

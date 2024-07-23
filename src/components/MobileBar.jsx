import { useEffect, useRef } from "react";
import ReusableButton from "../../UI/ReusableButton";
import { useAnimation, useInView, motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

export default function MobileBar() {
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
    <motion.div
      id="mobileBar"
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
      animate={mainControls}
      className="pt-[12px] pr-[12px] pb-[16px] pl-[90px]  bg-mobileBar bg-center bg-no-repeat bg-cover scroll-m-[95px] tablet:scroll-m-[60px] tablet:pt-[60px] tablet:pl-[300px] tablet:pr-[70px] tablet:pb-[50px] tablet:mt-[-20px] desktop:pt-[100px] desktop:pl-[450px] desktop:pb-[100px]"
    >
      {language === "georgian" ? (
        <div className="flex  flex-col ml-[20px] ">
          <h1 className="font-tommaso text-[32px] leading-[37px] text-black">
            მობილური ბარი
          </h1>
          <h2 className="font-tommaso font-[400] text-[24px] leading-[28px] text-white mt-[5px] tablet:mt-[20px]">
            გავჩნდებით ყველგან, სადაც ისურვებ
          </h2>
          <p className="text-[16px] leading-[18px] text-white mt-[26px]">
            ჟუჟუნას ბარი მოგაგნებს ყველგან, სადაც იქნები. თან მოიყვანს ბარმენს,
            ქორფა ჟუჟუნას მაცივარს დააა შენი სტუმრების ჩაჟუჟუნებაზე უუამრავი
            კოქტეილით იზრუნებს.
          </p>
          <button className="bg-buttonColor-primary text-white self-end pt-[7px] pr-[21.5px] pb-[7px] pl-[21.5px] rounded-full mt-[10px] tablet:self-center tablet:mt-[40px]">
            გაიგე მეტი
          </button>
        </div>
      ) : (
        <div className="flex  flex-col ml-[20px] ">
          <h1 className="font-tommaso text-[32px] leading-[37px] text-black">
            Mobile Bar
          </h1>
          <h2 className="font-tommaso font-[400] text-[24px] leading-[28px] text-white mt-[5px] tablet:mt-[20px]">
            We will appear wherever you want
          </h2>
          <p className="text-[16px] leading-[18px] text-white mt-[26px]">
            Juzhuna bar will find you wherever you are. brings a bartender A
            basket for Juzhuna's refrigerator is perfect for entertaining your
            guests. He will take care of it with a cocktail.
          </p>
          <button className="bg-buttonColor-primary text-white self-end pt-[7px] pr-[21.5px] pb-[7px] pl-[21.5px] rounded-full mt-[10px] tablet:self-center tablet:mt-[40px]">
            Learn More
          </button>
        </div>
      )}
    </motion.div>
  );
}

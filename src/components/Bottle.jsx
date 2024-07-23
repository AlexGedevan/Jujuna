import { useEffect, useRef } from "react";
import bottle from "../../public/images/bottle1.png";
import { useAnimation, useInView, motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
function Bottle() {
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
      className="scroll-m-[95px] tablet:scroll-m-[60px]  tablet:pl-[20px] tablet:pr-[20px] desktop:pl-[80px] desktop:pr-[80px]"
      id="bottle"
    >
      {language === "georgian" ? (
        <>
          <h1 className="pl-[20px] font-tommaso text-[40px] leading-[46px] font-[400] mb-[19px] mt-[20px] tablet:pl-0  desktop:ml-0">
            ბოთლი
          </h1>
          <div className="flex justify-between beforeTablet:pl-[50px] beforeTablet:pr-[50px] pt-[14px] pr-[19px] pb-[14px] pl-[14px] border-t-[3px] border-b-[3px] tablet:border-[3px] border-backgroundColor-purpleMid tablet:pl-0 tablet:pt-0 tablet:pb-0 tablet:gap-[35px] tablet:justify-between ">
            <div className="flex flex-col w-[205px] tablet:min-w-[270px] biggerDesktop:min-w-[320px] ">
              <img
                src={bottle}
                className="w-[100%] h-[255px] tablet:h-[100%] "
              />
              <p className="font-[400] text-[16px] tablet:hidden">
                ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
                მისართმევად საუკეთესო ტემპერატურასა და გაზს.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] items-start tablet:gap-[50px] ">
              <h1 className="text-[32px] font-tommaso leading-[37px] font-[400] tablet:mt-[36.5px]">
                ჟუჟუნა ბოთლი
              </h1>
              <div className="flex flex-col gap-[10px] tablet:flex tablet:flex-row tablet:gap-[20px] ">
                <div className="custom-card tablet tablet:w-[120px] tablet:text-[14px]  tablet:pl-1 tablet:pr-1 ">
                  <p>მოცულობა</p>
                  <p>250 მლ</p>
                </div>

                <div className="custom-card tablet:w-[120px] tablet:text-[14px]  tablet:pl-1 tablet:pr-1">
                  <p>ალკოჰოლი</p>
                  <p>11%</p>
                </div>
                <div className="custom-card tablet:w-[125px] tablet:text-[14px] tablet:pl-1 tablet:pr-1">
                  <p>ბუნებრივი გაზი</p>
                  <p>2.5 ბარი</p>
                </div>
              </div>
              <p className="font-[400] text-[16px] tablet:block hidden">
                ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
                მისართმევად საუკეთესო ტემპერატურასა და გაზს.
              </p>
              <div className="self-end border-2 border-backgroundColor-purpleMid pt-[22px] pr-[18px] pb-[22px] pl-[18px] rounded-md tablet:mb-[26.5px] tablet:text-white tablet:bg-backgroundColor-purpleMid">
                <p className="">4.5ლ</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="font-tommaso text-[40px] leading-[46px] font-[400] mb-[19px] mt-[20px] pl-[20px] tablet:pl-0">
            Bottle
          </h1>
          <div className="flex justify-between beforeTablet:pl-[50px] beforeTablet:pr-[50px] pt-[14px] pr-[19px] pb-[14px] pl-[14px] border-t-[3px] border-b-[3px] tablet:border-[3px] border-backgroundColor-purpleMid tablet:pl-0 tablet:pt-0 tablet:pb-0 tablet:gap-[35px] tablet:justify-normal ">
            <div className="flex flex-col w-[205px] tablet:min-w-[270px] ">
              <img
                src={bottle}
                className="w-[100%] h-[255px] tablet:h-[100%] "
              />
              <p className="font-[400] text-[16px] tablet:hidden">
                The juju bottle is 250 ml, because that's the portion it keeps
                Best served at temperature and gas.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] items-start tablet:gap-[50px] ">
              <h1 className="text-[32px] font-tommaso leading-[37px] font-[400] tablet:mt-[36.5px]">
                Jujuna bottle
              </h1>
              <div className="flex flex-col gap-[10px] tablet:flex tablet:flex-row tablet:gap-[20px] ">
                <div className="custom-card tablet tablet:w-[120px] tablet:text-[14px]  tablet:pl-1 tablet:pr-1 ">
                  <p>Volume</p>
                  <p>250 ml</p>
                </div>

                <div className="custom-card tablet:w-[120px] tablet:text-[14px]  tablet:pl-1 tablet:pr-1">
                  <p>Alcohol</p>
                  <p>11%</p>
                </div>
                <div className="custom-card tablet:w-[125px] tablet:text-[14px] tablet:pl-1 tablet:pr-1">
                  <p>Natural Gas</p>
                  <p>2.5 Bars</p>
                </div>
              </div>
              <p className="font-[400] text-[16px] tablet:block hidden">
                The juju bottle is 250 ml, because that's the portion it keeps
                Best served at temperature and gas.
              </p>
              <div className="self-end border-2 border-backgroundColor-purpleMid pt-[22px] pr-[18px] pb-[22px] pl-[18px] rounded-md tablet:mb-[26.5px] tablet:text-white tablet:bg-backgroundColor-purpleMid">
                <p className="">4.5gel</p>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Bottle;

import { useEffect, useRef } from "react";
import imagePour from "../../public/images/pour.png";
import grapeImg from "../../public/images/grape.png";
import glassWineImg from "../../public/images/glasswine.png";
import { useAnimation, useInView, motion } from "framer-motion";
import ReusableButton from "../../UI/ReusableButton";
import ReusableNewItem from "../../UI/ReusableNewItem";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useLanguage } from "../../contexts/LanguageContext";
function New() {
  const { darkMode } = useDarkMode();
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
      className={` text-white pt-[20px] pr-[15px] pl-[15px] scroll-m-[95px] tablet:scroll-m-[60px] tablet:pl-[20px] tablet:pr-[20px] desktop:flex desktop:flex-col desktop:items-center desktop:pl-[80px] desktop:pr-[80px]`}
      id="new"
    >
      {language === "georgian" ? (
        <h1
          className={`text-black  font-tommaso text-[48px] mb-[33px] tablet:mb-[10px] self-start ${
            darkMode && "text-white"
          } `}
        >
          სიახლეები
        </h1>
      ) : (
        <h1
          className={`text-black font-tommaso text-[48px] mb-[33px] tablet:mb-[10px] self-start ${
            darkMode && "text-white"
          } `}
        >
          New
        </h1>
      )}
      <div className="tablet:flex gap-[10px] ">
        <ReusableNewItem
          image={imagePour}
          backgroundColor="bg-backgroundColor-purpleMid"
          buttonColor="bg-black"
        />
        <div />

        <div className="hidden tablet:block">
          <ReusableNewItem
            image={grapeImg}
            backgroundColor="bg-black"
            buttonColor="bg-backgroundColor-purpleMid"
          />
        </div>
        <div className="hidden tablet:block">
          <ReusableNewItem
            image={glassWineImg}
            backgroundColor="bg-backgroundColor-purpleMid"
            buttonColor="bg-black"
          />
        </div>
        {/* <div className="flex flex-col">
          <img src={imagePour} />
          <div
          className={`rounded-b-md ${"bg-backgroundColor-purpleMid"} flex flex-col gap-[20px] pt-[20px] pr-[16px] pb-[20px] pl-[16px]`}
          >
          <p className="text-[14px] font-[400] leading-[16px]">
          17 აგვისტო, 2024
          </p>
          <h1 className="text-[24px] font-[400] leading-[28px]">
          დეგიუსტაცია
          </h1>
          <p className="text-[16px] leading-[18px] font-[400] ">
          დააგემოვნეთ ჩვენი ღვინო ყოველწლიურად გამართულ დეგუსტაციაზე და
          იგრძენით ნამდვილი გემო
          </p>
          
          <ReusableButton backgroundColor={"bg-black"}>
          გაიგე მეტი
          </ReusableButton>
          </div>
          </div> */}
      </div>
    </motion.div>
  );
}

export default New;

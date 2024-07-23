import { useEffect, useRef } from "react";
import maraniResized from "../../public/images/maraniResized.png";
import marani from "../../public/images/marani.png";
import { useAnimation, useInView, motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
function AboutUs() {
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
      className="relative text-white w-[100%] scroll-m-[95px] tablet:scroll-m-[60px]"
      id="aboutUs"
    >
      <img
        src={maraniResized}
        className="absolute z-[-100] h-[100%] w-[100%] beforeTablet:hidden"
      />
      <img
        src={marani}
        className="hidden z-[-100] h-[100%] w-[100%] beforeTablet:absolute beforeTablet:block "
      />
      {language === "georgian" ? (
        <div className="pt-[24px] pr-[50px] pb-[6px] pl-[20px] tablet:pt-[50px] tablet:pb-[37px] tablet:pr-[200px] tablet:pl-[20px] desktop:pt-[70px] desktop:pl-[80px] desktop:pr-[480px] desktop:pb-[30px] desktop:h-[630px]">
          <h1 className="text-[48px] font-tommaso">ჩვენ შესახებ</h1>
          <p className="mt-[32px] mb-4">
            ჟუჟუნა ძალიან მშრალი და მომჟავო ღვინო 2017 წელს შეიქმნა.
            <br /> <br /> ბევრი ფიქრისა და ღვინის მრავალწლიანი სიყვარულის
            შემდეგ, კომპანია, ჩვენივე სახსრებით, 6-მა მეგობარმა დავაარსეთ. ჩვენი
            მთავარი მიზანი, დალევის კულტურის განსხვავებული გამოცდილების შექმნა
            და აქამდე არარსებული თანამდეროვე ღვინის თანამედროვე კულტურაში
            პოპულარიზაცია იყო.
            <br />
            <br />
            ჩამოსასხმელი ჟუჟუნა საქართველოს უამრავ კაფე-ბარს მალევე დაუმეგობრდა
            და 2020 წელს ბოთლის ფორმითაც შეავსო მაღაზიათა ქსელი, რაც ასეთ მოკლე
            დროში, ჩვენთვის, მნიშვნელოვანი სიახლეა.
            <br />
            <br /> ჟუჟუს ისტორია საქართველოს ფარგლებსაც სცდება და ჩინეთსა და
            იაპონიაში ექსპორტით გააქვს თბილისური დალევის კულტურა.
          </p>
        </div>
      ) : (
        <div className="pt-[24px] pr-[50px] pb-[6px] pl-[20px] tablet:pt-[50px] tablet:pb-[37px] tablet:pr-[200px] tablet:pl-[20px] desktop:pt-[70px] desktop:pl-[80px] desktop:pr-[480px] desktop:pb-[30px] desktop:h-[630px]">
          <h1 className="text-[48px] font-tommaso">About Us</h1>
          <p className="mt-[32px] mb-4">
            Zhuzhuna very dry and sour wine was created in 2017.
            <br /> <br /> Many thoughts and many years of love of wine Then, 6
            friends founded the company with our own funds. ours The main goal
            is to create a different experience of drinking culture and
            previously non-existent in contemporary wine culture It was
            popularized.
            <br />
            <br />
            Bottling Zhuzhuna soon became friends with many cafes and bars in
            Georgia And in 2020, it also filled the chain of stores in the form
            of a bottle, which is so short In time, for us, there is an
            important news.
            <br />
            <br /> The history of Zhuzhu goes beyond the borders of Georgia and
            China Tbilisi's drinking culture is being exported to Japan.
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default AboutUs;

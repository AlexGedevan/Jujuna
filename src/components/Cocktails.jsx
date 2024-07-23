import { useEffect, useRef, useState } from "react";
import fetchCocktails from "../services/apiCocktails";
import cocktail1 from "../../public/images/cocktail1.png";
import cocktail2 from "../../public/images/cocktail2.png";
import cocktail3 from "../../public/images/cocktail3.png";
import { useAnimation, useInView, motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

function Cocktails() {
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
  // const [cocktails, setCocktails] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setCocktails(await fetchCocktails());
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);
  // console.log(cocktails);
  return (
    <motion.div
      className="scroll-m-[95px] tablet:scroll-m-[60px] tablet:pr-[20px] tablet:pl-[20px] desktop:pl-[80px] desktop:pr-[80px]"
      id="cocktails"
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
    >
      {language === "georgian" ? (
        <>
          <h1 className="font-tommaso text-[40px] leading-[46px] pl-[20px] mb-[3px] mt-[15px] tablet:pl-0 ">
            კოქტეილი
          </h1>

          <div className="tablet:grid  grid-cols-2 gap-x-2 gap-y-2 tablet:mb-[20px]">
            <div className="relative bg-black text-white h-[352px] pt-[30px] tablet:h-[481px] col-span-2 ">
              <h1 className="font-tommaso font-[400] leading-[37px] text-[32px] text-center mb-[20px] tablet:hidden">
                აპეროლ შპრიტსი
              </h1>
              <div className="flex beforeTablet:gap-[100px] tablet:gap-[10px] tablet:h-[350px] desktop:gap-[10%] biggerDesktop:gap-[20%]">
                <img
                  src={cocktail1}
                  className=" top-[91px] w-[180px] h-[261px] tablet:w-[370px] tablet:h-[340px]"
                />
                <div>
                  <h1 className="hidden font-tommaso font-[400] leading-[37px] text-[32px] text-center mb-[20px] tablet:block">
                    აპეროლ შპრიტსი
                  </h1>
                  <div className=" grid grid-cols-2 gap-x-[20px] tablet:gap-[50px]">
                    <div className="custom-cocktail-text ">
                      <p>აპეროლი</p>
                      <p className="opacity-[0.6]">50 მლ</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ფორთოხალი</p>
                      <p className="opacity-[0.6]">1 ნაჭერი</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ყინული</p>
                      <p className="opacity-[0.6]">სავსე ჭიქა</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ტონიკი</p>
                      <p className="opacity-[0.6]">20 მგ</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ჟუჟუნა</p>
                      <p className="opacity-[0.6]">150 მლ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-black text-white h-[352px] pt-[30px] tablet:h-[350px]">
              <h1 className="font-tommaso font-[400] leading-[37px] text-[32px] text-center mb-[20px] tablet:hidden">
                კენკრიანი ჟუჟუნა
              </h1>
              <div className="flex beforeTablet:gap-[100px] tablet:gap-[10px]  desktop:gap-[10%] biggerDesktop:gap-[20%]">
                <img
                  src={cocktail2}
                  className=" top-[91px] w-[180px] h-[261px] tablet:w-[100px] tablet:h-[200px] desktop:w-[120px] desktop:h-[200px] biggerDesktop:w-[200px] biggerDesktop:h-[300px]"
                />
                <div>
                  <h1 className="font-tommaso font-[400] leading-[37px] text-[26px] text-center mb-[20px] hidden tablet:block">
                    კენკრიანი ჟუჟუნა
                  </h1>

                  <div className=" right-[50px] grid grid-cols-2 gap-x-[20px] tablet:text-[14px]">
                    <div className="custom-cocktail-text">
                      <p>აპეროლი</p>
                      <p className="opacity-[0.6]">50 მლ</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ფორთოხალი</p>
                      <p className="opacity-[0.6]">1 ნაჭერი</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ყინული</p>
                      <p className="opacity-[0.6]">სავსე ჭიქა</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ტონიკი</p>
                      <p className="opacity-[0.6]">20 მგ</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ჟუჟუნა</p>
                      <p className="opacity-[0.6]">150 მლ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-black text-white h-[352px] pt-[30px] tablet:h-[350px]">
              <h1 className="font-tommaso font-[400] leading-[37px] text-[32px] text-center mb-[20px] tablet:hidden">
                აპეროლ შპრიტსი
              </h1>
              <div className="flex beforeTablet:gap-[100px] tablet:gap-[10px] tablet:h-[350px] desktop:gap-[10%] biggerDesktop:gap-[20%]">
                <img
                  src={cocktail3}
                  className=" top-[91px] w-[180px] h-[261px] tablet:w-[100px] tablet:h-[200px] desktop:w-[120px] desktop:h-[200px] biggerDesktop:w-[200px] biggerDesktop:h-[300px]"
                />
                <div>
                  <h1 className="font-tommaso font-[400] leading-[37px] text-[26px] text-center mb-[20px] hidden tablet:block">
                    აპეროლ შპრიტსი
                  </h1>
                  <div className=" right-[50px] grid grid-cols-2 gap-x-[20px] tablet:text-[12px]">
                    <div className="custom-cocktail-text">
                      <p>აპეროლი</p>
                      <p className="opacity-[0.6]">50 მლ</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ფორთოხალი</p>
                      <p className="opacity-[0.6]">1 ნაჭერი</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ყინული</p>
                      <p className="opacity-[0.6]">სავსე ჭიქა</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ტონიკი</p>
                      <p className="opacity-[0.6]">20 მგ</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ჟუჟუნა</p>
                      <p className="opacity-[0.6]">150 მლ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="font-tommaso text-[40px] leading-[46px] pl-[20px] tablet:pl-0 mb-[3px] mt-[15px] ">
            Cocktail
          </h1>

          <div className="tablet:grid  grid-cols-2 gap-x-2 gap-y-2 tablet:mb-[20px]">
            <div className="relative bg-black text-white h-[352px] pt-[30px] tablet:h-[481px] col-span-2 ">
              <h1 className="font-tommaso font-[400] leading-[37px] text-[32px] text-center mb-[20px] tablet:hidden">
                Aperol
              </h1>
              <div className="flex beforeTablet:gap-[100px] tablet:gap-[10px] tablet:h-[350px] desktop:gap-[10%] biggerDesktop:gap-[20%]">
                <img
                  src={cocktail1}
                  className=" top-[91px] w-[180px] h-[261px] tablet:w-[370px] tablet:h-[340px]"
                />
                <div>
                  <h1 className="hidden font-tommaso font-[400] leading-[37px] text-[32px] text-center mb-[20px] tablet:block">
                    Aperol
                  </h1>
                  <div className=" grid grid-cols-2 gap-x-[50px] tablet:gap-[50px] biggerDesktop:text-[18px]">
                    <div className="custom-cocktail-text  ">
                      <p>Aperol</p>
                      <p className="opacity-[0.6]">50 ml</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>orange</p>
                      <p className="opacity-[0.6]">1 piece</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ice</p>
                      <p className="opacity-[0.6]">full glass</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>tonic</p>
                      <p className="opacity-[0.6]">20 mg</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>Jujuna</p>
                      <p className="opacity-[0.6]">150 ml</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-black text-white h-[352px] pt-[30px] tablet:h-[350px]">
              <h1 className="font-tommaso font-[400] leading-[37px] text-[32px] text-center mb-[20px] tablet:hidden">
                Berries juzuna
              </h1>
              <div className="flex beforeTablet:gap-[100px] tablet:gap-[10px] desktop:gap-[10%] biggerDesktop:gap-[20%]">
                <img
                  src={cocktail2}
                  className=" top-[91px] w-[180px] h-[261px] tablet:w-[100px] tablet:h-[200px] desktop:h-[300px] desktop:w-[200px]"
                />
                <div>
                  <h1 className="font-tommaso font-[400] leading-[37px] text-[26px] text-center mb-[20px] hidden tablet:block">
                    Berries juzuna
                  </h1>

                  <div className=" right-[50px] grid grid-cols-2 gap-x-[50px] tablet:text-[14px]">
                    <div className="custom-cocktail-text">
                      <p>aperol</p>
                      <p className="opacity-[0.6]">50 ml</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>orange</p>
                      <p className="opacity-[0.6]">1 piece</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ice</p>
                      <p className="opacity-[0.6]">full glass</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>tonic</p>
                      <p className="opacity-[0.6]">20 mg</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>Jujuna</p>
                      <p className="opacity-[0.6]">150 ml</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-black text-white h-[352px] pt-[30px] tablet:h-[350px]">
              <h1 className="font-tommaso font-[400] leading-[37px] text-[32px] text-center mb-[20px] tablet:hidden">
                Aperol
              </h1>
              <div className="flex beforeTablet:gap-[100px] tablet:gap-[10px]  desktop:gap-[10%] biggerDesktop:gap-[20%]">
                <img
                  src={cocktail3}
                  className=" top-[91px] w-[180px] h-[261px] tablet:w-[100px] tablet:h-[200px] desktop:h-[300px] desktop:w-[200px]"
                />
                <div>
                  <h1 className="font-tommaso font-[400] leading-[37px] text-[26px] text-center mb-[20px] hidden tablet:block">
                    Aperol
                  </h1>
                  <div className=" right-[50px] grid grid-cols-2 gap-x-[50px] tablet:text-[12px]">
                    <div className="custom-cocktail-text">
                      <p>aperol</p>
                      <p className="opacity-[0.6]">50 ml</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>orange</p>
                      <p className="opacity-[0.6]">1 piece</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>ice</p>
                      <p className="opacity-[0.6]">full glass</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>tonic</p>
                      <p className="opacity-[0.6]">20 mg</p>
                    </div>
                    <div className="custom-cocktail-text">
                      <p>Jujuna</p>
                      <p className="opacity-[0.6]">150 mg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Cocktails;

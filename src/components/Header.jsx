import { useState, useEffect, useRef } from "react";
import geoFlag from "../../public/images/georgiaFlag.png";
import usaFlag from "../../public/images/usaFlag.svg";
import aso from "../../public/images/aso.svg";
import { useLanguage } from "../../contexts/LanguageContext";

function Header() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  let width = screen.width;
  console.log(width);
  return (
    <div className=" max-w-[760px] w-[100%] flex justify-between items-center bg-black pt-[41px] pr-[77.5px] pb-[20px] pl-[25px] fixed  tablet:max-w-none tablet:justify-between tablet:pt-[15px] tablet:pb-[16px] tablet:pr-[40px] tablet:pl-[20px] z-[100] ">
      <div className="w-[45px] h-[45px] rounded-full bg-logoColor-circle flex items-center justify-center tablet:w-[30px] tablet:h-[30px]">
        <img className="text-[20px]" src={aso}></img>
      </div>

      <div className="tablet:hidden">
        {language === "georgian" ? (
          <p
            className="text-white font-tommaso text-[24px] font-[400] leading-[28px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            მენიუ
          </p>
        ) : (
          <p
            className="text-white font-tommaso text-[24px] font-[400] leading-[28px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </p>
        )}
        <div
          className={`opacity-[0.9] transition-all duration-300 absolute right-0 top-[96px] flex flex-col gap-8 bg-black text-white p-5 ${
            !isOpen ? "translate-x-[175px]" : "translate-x-0"
          }`}
        >
          {language === "georgian" ? (
            <div className="flex flex-col gap-4 font-tommaso text-[24px] ">
              <a href="#aboutUs">ჩვენ შესახებ</a>
              <a href="#new">სიახლეები</a>
              <a href="#bottle">ბოთლი</a>
              <a href="#cocktails">კოქტეილები</a>
              <a href="#mobileBar">მობილური ბარი</a>
              <a href="#contactUs">კონტაქტი</a>
            </div>
          ) : (
            <div className="flex flex-col gap-4 font-tommaso text-[24px] ">
              <a href="#aboutUs">About Us</a>
              <a href="#new">New</a>
              <a href="#bottle">Bottle</a>
              <a href="#cocktails">Cocktails</a>
              <a href="#mobileBar">Mobile Bar</a>
              <a href="#contactUs">Contact Us</a>
            </div>
          )}
          <div className="flex gap-5">
            <img
              src={geoFlag}
              className="h-[15px] w-[23px]"
              onClick={() => setLanguage("georgian")}
            />
            <img
              src={usaFlag}
              className="h-[15px] w-[23px]"
              onClick={() => setLanguage("english")}
            />
          </div>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden tablet:block ">
        <div className="text-white">
          {language === "georgian" ? (
            <div className="flex gap-[20px] text-[12px] desktop:gap-8">
              <a href="#aboutUs">ჩვენ შესახებ</a>
              <a href="#new">სიახლეები</a>
              <a href="#bottle">ბოთლი</a>
              <a href="#cocktails">კოქტეილები</a>
              <a href="#mobileBar">მობილური ბარი</a>
              <a href="#contactUs">კონტაქტი</a>
            </div>
          ) : (
            <div className="flex gap-[20px] text-[12px] desktop:gap-8">
              <a href="#aboutUs">About Us</a>
              <a href="#new">New</a>
              <a href="#bottle">Bottle</a>
              <a href="#cocktails">Cocktails</a>
              <a href="#mobileBar">Mobile Bar</a>
              <a href="#contactUs">Contact Us</a>
            </div>
          )}
        </div>
      </div>
      <div className="hidden tablet:flex tablet:gap-2 ">
        <img
          src={geoFlag}
          className="h-[15px] w-[23px] cursor-pointer"
          onClick={() => setLanguage("georgian")}
        />
        <img
          src={usaFlag}
          className="h-[15px] w-[23px] cursor-pointer"
          onClick={() => setLanguage("english")}
        />
      </div>
    </div>
  );
}

export default Header;

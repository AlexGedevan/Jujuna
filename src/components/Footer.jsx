import aso from "../../public/images/aso.svg";
import instaIcon from "../../public/images/instagramIcon.svg";
import instaIconBlack from "../../public/images/instagramIconBlack.svg";
import facebookIcon from "../../public/images/facebookIcon.svg";
import facebookIconBlack from "../../public/images/facebookIconBlack.svg";
import linkedinIcon from "../../public/images/linkedinIcon.svg";
import linkedinIconBlack from "../../public/images/linkedinIconBlack.svg";
import { useLanguage } from "../../contexts/LanguageContext";
import { useDarkMode } from "../../contexts/DarkModeContext";
function Footer() {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  return (
    <div
      className={`${
        darkMode ? "bg-black" : "bg-gray-100"
      } text-white pt-[20px] pr-[20px] pb-[18px] pl-[20px] tablet:pl-[40px] target:pr-[40px] desktop:pl-[80px] desktop:pr-[80px]`}
    >
      {language === "georgian" ? (
        <>
          <div
            className={`${
              !darkMode && "text-black"
            } flex gap-[20px] text-[12px] justify-between desktop:justify-normal desktop:grid desktop:grid-rows-1 desktop:grid-cols-2`}
          >
            <div className="flex gap-[20px] desktop:gap-[50px]">
              <div className="w-[45px] h-[45px] rounded-full bg-logoColor-circle flex items-center desktop:justify-center">
                <img className="text-[20px]" src={aso}></img>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[12px]">
                  <p>ტელეფონი</p>
                  <p>+995579760006</p>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <p>ელ.ფოსტა</p>
                  <p>Hello@jujuna.ge</p>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <p>მისამართი:</p>
                  <p>ნინოშვილი #8 თბილისი,საქართველო</p>
                </div>
              </div>
            </div>
            {darkMode ? (
              <div className="flex gap-1 ml-[36px] self-end justify-self-end">
                <img src={instaIcon} className="w-[14px] h-[14px] " />
                <img src={facebookIcon} className="w-[14px] h-[14px] " />
                <img src={linkedinIcon} className="w-[14px] h-[14px] " />
              </div>
            ) : (
              <div className="flex gap-1 ml-[36px] self-end justify-self-end">
                <img src={instaIconBlack} className="w-[14px] h-[14px] " />
                <img src={facebookIconBlack} className="w-[14px] h-[14px] " />
                <img src={linkedinIconBlack} className="w-[14px] h-[14px] " />
              </div>
            )}
          </div>
          <div className=" mt-[32px] flex  gap-[20px] text-[10px] text-textColor-secondary beforeTablet:justify-around desktop:justify-end desktop:mt-[10px]">
            <p>პერსონალური მონაცემების დაცვის პოლიტიკა</p>
            <p>უსაფრთხოების ცენტრი</p>
          </div>
        </>
      ) : (
        <>
          <div
            className={`${
              !darkMode && "text-black"
            } flex gap-[20px] text-[12px] justify-between desktop:justify-normal desktop:grid desktop:grid-rows-1 desktop:grid-cols-2`}
          >
            <div className="flex gap-[20px] desktop:gap-[50px]">
              <div className="w-[45px] h-[45px] rounded-full bg-logoColor-circle flex items-center desktop:justify-center">
                <img className="text-[20px]" src={aso}></img>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[12px]">
                  <p>Phpone</p>
                  <p>+995579760006</p>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <p>Email</p>
                  <p>Hello@jujuna.ge</p>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <p>Address</p>
                  <p>Ninoshvili n8 Tbilisi, Georgia</p>
                </div>
              </div>
            </div>
            {darkMode ? (
              <div className="flex gap-1 ml-[36px] self-end justify-self-end">
                <img src={instaIcon} className="w-[14px] h-[14px] " />
                <img src={facebookIcon} className="w-[14px] h-[14px] " />
                <img src={linkedinIcon} className="w-[14px] h-[14px] " />
              </div>
            ) : (
              <div className="flex gap-1 ml-[36px] self-end justify-self-end">
                <img src={instaIconBlack} className="w-[14px] h-[14px] " />
                <img src={facebookIconBlack} className="w-[14px] h-[14px] " />
                <img src={linkedinIconBlack} className="w-[14px] h-[14px] " />
              </div>
            )}
          </div>
          <div className=" mt-[32px] flex  gap-[20px] text-[10px] text-textColor-secondary beforeTablet:justify-around desktop:justify-end">
            <p>Personal data protection policy</p>
            <p>Safety Center</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Footer;

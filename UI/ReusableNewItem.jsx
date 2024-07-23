import { useLanguage } from "../contexts/LanguageContext";
import ReusableButton from "./ReusableButton";

function ReusableNewItem({ image, buttonColor, backgroundColor }) {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col">
      <img src={image} />
      {language === "georgian" ? (
        <div
          className={`rounded-b-md ${backgroundColor} flex flex-col gap-[20px] pt-[20px] pr-[16px] pb-[20px] pl-[16px]`}
        >
          <p className="text-[14px] font-[400] leading-[16px]">
            17 აგვისტო, 2024
          </p>
          <h1 className="text-[24px] font-[400] leading-[28px]">დეგიუსტაცია</h1>
          <p className="text-[16px] leading-[18px] font-[400] ">
            დააგემოვნეთ ჩვენი ღვინო ყოველწლიურად გამართულ დეგუსტაციაზე და
            იგრძენით ნამდვილი გემო
          </p>
          {/* <button
          className={`${buttonColor} text-white self-end pt-[7px] pr-[21.5px] pb-[7px] pl-[21.5px] rounded-full`}
        >
          გაიგე მეტი
        </button> */}
          <ReusableButton backgroundColor={buttonColor}>
            გაიგე მეტი
          </ReusableButton>
        </div>
      ) : (
        <div
          className={`rounded-b-md ${backgroundColor} flex flex-col gap-[20px] pt-[20px] pr-[16px] pb-[20px] pl-[16px]`}
        >
          <p className="text-[14px] font-[400] leading-[16px]">
            17 August, 2024
          </p>
          <h1 className="text-[24px] font-[400] leading-[28px]">Tasting</h1>
          <p className="text-[16px] leading-[18px] font-[400] ">
            Taste our wine at the annual tasting and Feel the real taste
          </p>
          {/* <button
          className={`${buttonColor} text-white self-end pt-[7px] pr-[21.5px] pb-[7px] pl-[21.5px] rounded-full`}
        >
          გაიგე მეტი
        </button> */}
          <ReusableButton backgroundColor={buttonColor}>More</ReusableButton>
        </div>
      )}
    </div>
  );
}

export default ReusableNewItem;

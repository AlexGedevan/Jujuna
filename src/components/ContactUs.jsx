import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAnimation, useInView, motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

function ContactUs() {
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5sjjrbj", "template_beoub4e", form.current, {
        publicKey: "mAi93w51lvHpMYQJL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    alert("Email Sent!");
  };

  return (
    <motion.div
      id="contactUs"
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
      className="bg-contactUsBanner bg-cover  bg-center bg-no-repeat   pt-[26px] pr-[30px] pb-[26px] pl-[20px] flex gap-[20px] scroll-m-[95px] tablet:scroll-m-[60px] tablet:pt-[50px] tablet:pl-[40px] tablet:pr-[100px] tablet:pb-[50px] tablet:gap-[70px] desktop:pl-[80px] desktop:pr-[80px]"
    >
      <form ref={form} onSubmit={sendEmail}>
        {language === "georgian" ? (
          <div className="flex flex-col gap-[12px] w-[209px]">
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-white">ტელეფონი</label>
              <input
                placeholder="მიუთითეთ ნომერი..."
                type="text"
                name="from_number"
                className="text-white text-[10px] bg-black pt-[14.5px] pr-[97px] pb-[14.5px] pl-[10px] rounded-lg placeholder:text-[10px]"
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-white">ელ.ფოსტა</label>
              <input
                placeholder="მიუთითეთ ელ.ფოსტა..."
                type="email"
                name="from_email"
                className="text-white text-[10px] bg-black pt-[14.5px] pr-[81px] pb-[14.5px] pl-[10px] rounded-lg placeholder:text-[10px]"
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-white">მესიჯი</label>
              <textarea
                placeholder="დაწერეთ მესიჯი..."
                name="message"
                className="text-white text-[10px] bg-black pt-[10px] pr-[108px] pb-[77px] pl-[10px] rounded-lg placeholder:text-[10px]"
              />
            </div>
            <input
              className=" bg-buttonColor-primary text-white self-end pt-[7px] pr-[21.5px] pb-[7px] pl-[21.5px] rounded-full  "
              type="submit"
              value="გაგზავნა"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-[12px] w-[209px]">
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-white">Phone number</label>
              <input
                placeholder="Number..."
                type="text"
                name="from_number"
                className="text-white text-[10px] bg-black pt-[14.5px] pr-[97px] pb-[14.5px] pl-[10px] rounded-lg placeholder:text-[10px]"
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-white">Email</label>
              <input
                placeholder="Email..."
                type="email"
                name="from_email"
                className="text-white text-[10px] bg-black pt-[14.5px] pr-[81px] pb-[14.5px] pl-[10px] rounded-lg placeholder:text-[10px]"
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] text-white">Message</label>
              <textarea
                placeholder="Your message..."
                name="message"
                className="text-white text-[10px] bg-black pt-[10px] pr-[108px] pb-[77px] pl-[10px] rounded-lg placeholder:text-[10px]"
              />
            </div>
            <input
              className=" bg-buttonColor-primary text-white self-end pt-[7px] pr-[21.5px] pb-[7px] pl-[21.5px] rounded-full  "
              type="submit"
              value="Send"
            />
          </div>
        )}
      </form>
      {language === "georgian" ? (
        <div className="flex flex-col text-white text-[12px] mt-[16px] tablet:text-[18px]">
          <p>
            ქორფა ჟუჟუნა უუუამრავ კაფე-ბარში შეგხვდება და შენთვის საყვარელ
            კოქტეილებს ააცქრიალებს. ცივი და ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ
            ონკანიდან ეშვება.
          </p>
          <p className="mt-[9px]">
            ქორფა ჟუჟუნა უუუამრავ კაფე-ბარში შეგხვდება და შენთვის საყვარელ
            კოქტეილებს ააცქრიალებს. ცივი და ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ
            ონკანიდან ეშვება.
          </p>
        </div>
      ) : (
        <div className="flex flex-col text-white text-[12px] mt-[16px] tablet:text-[18px]">
          <p>
            Korfa Zhuzhuna can be found in many cafes and bars, and it is your
            favorite Makes cocktails sparkling. Cold and sparkling juju right
            into the cocktail It flows from the tap.
          </p>
          <p className="mt-[9px]">
            Korfa Zhuzhuna can be found in many cafes and bars, and it is your
            favorite Makes cocktails sparkling. Cold and sparkling juju right
            into the cocktail It flows from the tap.
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default ContactUs;

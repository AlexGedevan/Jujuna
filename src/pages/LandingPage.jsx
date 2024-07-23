import { useDarkMode } from "../../contexts/DarkModeContext";
import DarkModeBtn from "../../UI/DarkModeBtn";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MainContent from "../components/MainContent";
import MobileBar from "../components/MobileBar";

function LandingPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div className="max-w-[760px] w-[100%] tablet:max-w-none relative">
      <Header />
      <HeroSection />
      <AboutUs />
      <MainContent />
      <MobileBar />
      <ContactUs />
      <Footer />
      {/* <DarkModeBtn /> */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`${
          darkMode ? "bg-white" : "bg-black text-white"
        } p-4  right-[10px] bottom-[10px] rounded-full opacity-35 fixed `}
      >
        {darkMode ? "L" : "D"}
      </button>
    </div>
  );
}

export default LandingPage;

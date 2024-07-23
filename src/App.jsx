import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import { useLanguage } from "../contexts/LanguageContext";

function App() {
  const { setLanguage } = useLanguage();
  useEffect(function () {
    async function getLocation() {
      const location = await fetch("https://ipapi.co/json/");
      const data = await location.json();
      if (data.country_code === "GE") {
        setLanguage("georgian");
      } else {
        setLanguage("english");
      }
    }
    getLocation();
  }, []);
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;

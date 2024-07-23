import { useDarkMode } from "../../contexts/DarkModeContext";
import Bottle from "./Bottle";
import Cocktails from "./Cocktails";
import New from "./New";

function MainContent() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${
        darkMode
          ? "bg-black text-white"
          : "bg-backgroundColor-siaxleebi relative"
      } `}
    >
      <New />
      <Bottle />
      <Cocktails />
    </div>
  );
}

export default MainContent;

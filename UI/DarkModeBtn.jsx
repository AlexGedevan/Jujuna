import { useDarkMode } from "../contexts/DarkModeContext";

function DarkModeBtn() {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`${
        darkMode ? "bg-white" : "bg-black text-white"
      } p-4  right-[10px] bottom-[10px] rounded-full opacity-35 fixed `}
    >
      {darkMode ? "D" : "L"}
    </button>
  );
}

export default DarkModeBtn;

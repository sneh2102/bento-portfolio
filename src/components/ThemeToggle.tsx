import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    // Reload the page after the theme is set
    setTimeout(() => {
      window.location.reload();
    }, 100); // Small delay to ensure the theme is persisted
  };

  if (theme === "undefined") return null;

  return isMounted ? (
    <SliderToggle selected={theme} setSelected={toggleTheme} />
  ) : null;
};

const SliderToggle = ({
  selected,
  setSelected,
}: {
  selected: string | undefined;
  setSelected: () => void; // Updated type to match toggleTheme
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setSelected();
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          setSelected();
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 shadow-md rounded-full bg-[linear-gradient(to_right,theme(colors.pallet-blue.1),theme(colors.pallet-blue.2),theme(colors.sky.400),theme(colors.pallet-purple.1),theme(colors.pallet-pink.1),theme(colors.sky.400),theme(colors.pallet-blue.2),theme(colors.pallet-blue.1))] bg-[length:200%_auto] animate-gradient"
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
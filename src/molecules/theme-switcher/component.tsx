"use client";

import { useTheme } from "next-themes";
import { MdExpandMore, MdOutlinePalette } from "react-icons/md";

import { themes } from "@/molecules/theme-switcher/constants";

function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <details className="dropdown dropdown-end z-40">
      <summary className="btn btn-ghost m-1">
        <MdOutlinePalette size={24} />
        <span className="hidden sm:inline-block">Tema</span>
        <MdExpandMore />
      </summary>

      <ul className="max-w-52 menu dropdown-content rounded-box max-h-[70vh] flex-nowrap overflow-auto bg-base-100 p-2 shadow-lg">
        {themes.map((theme, key) => (
          <li
            key={key}
            onClick={() => {
              setTheme(theme as string);
            }}
          >
            <a>{theme}</a>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default ThemeSwitcher;

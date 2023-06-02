"use client";

import { useTheme } from "next-themes";
import { MdExpandMore, MdOutlinePalette } from "react-icons/md";

import { themes } from "@/molecules/theme-switcher/constants";

function SwitchTheme() {
  const { setTheme } = useTheme();

  return (
    <details className="dropdown-end dropdown z-40">
      <summary className="btn-ghost btn m-1">
        <MdOutlinePalette size={24} /> Tema <MdExpandMore />
      </summary>

      <ul className="max-w-52 dropdown-content menu rounded-box max-h-[70vh] flex-nowrap overflow-auto p-2 shadow-lg">
        {themes.map((theme, key) => (
          <li key={key} onClick={() => setTheme(theme as string)}>
            <a>{theme}</a>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default SwitchTheme;

"use client";

import { useTheme } from "next-themes";
import { MdOutlinePalette } from "react-icons/md";

import { themes } from "@/molecules/switch-theme/constants";

function SwitchTheme() {
  const { setTheme } = useTheme();

  return (
    <details className="dropdown dropdown-end z-40">
      <summary className="m-1 btn">
        <MdOutlinePalette size={24} /> Trocar tema
      </summary>

      <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
        {themes.map((theme, key) => (
          <li key={key} onClick={() => setTheme(theme)}>
            <a>{theme}</a>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default SwitchTheme;

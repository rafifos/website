import { useEffect } from "react";
import { themeChange } from "theme-change";

function ThemeSelector() {
  useEffect(() => {
    themeChange(false);
  }, []);

  const title = "Choose a theme";

  /** @see {@link https://daisyui.com/docs/themes} */
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  return (
    <select title={title} className="select w-full max-w-xs" data-choose-theme>
      <option disabled value="">
        {title}
      </option>
      {themes.map((theme, index) => (
        <option value={theme} key={index}>
          {theme}
        </option>
      ))}
    </select>
  );
}

export default ThemeSelector;

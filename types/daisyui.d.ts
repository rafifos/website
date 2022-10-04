declare module "daisyui/src/colors/themes" {
  type theme = {
    [property: string]: string;
  };

  declare const themes: Record<string, theme>;
  export default themes;
}

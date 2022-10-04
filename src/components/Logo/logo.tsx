import Image from "next/image";

interface LogoProps {
  theme?: "dark" | "light";
  width?: number;
  height?: number;
}

function Logo({ theme = "light", width = 64, height = 64 }: LogoProps) {
  return (
    <div>
      <Image alt="Rafifos's logo" src={`/logo-${theme}.svg`} width={width} height={height} />
    </div>
  );
}

export default Logo;

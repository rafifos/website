import Image from "next/image";

import { Contact } from "@/atoms/contact";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content flex-col gap-8 p-0 lg:flex-row-reverse">
        <Image
          src="/assets/profile-picture.jpg"
          alt="Foto de Perfil do Rafael"
          className="rounded-lg shadow-2xl"
          width={225}
          height={300}
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Oí, eu sou o Rafael!</h1>

          <span>
            <Contact method="linkedin" />
            <Contact method="mail" />
          </span>

          <p className="pt-2">
            Desenvolvedor Front-End especializado em Next.js, TypeScript e Ecossistema
            JavaScript/TypeScript com expertise em Design Systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

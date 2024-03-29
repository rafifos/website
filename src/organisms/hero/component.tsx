import Image from "next/image";

import profilePic from "@/assets/profile-picture.jpg";
import { Contact, ContactLinks } from "@/atoms/contact";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content flex-col gap-8 p-0 lg:flex-row-reverse">
        <Image
          src={profilePic}
          alt="Foto de Perfil do Rafael"
          className="rounded-lg shadow-2xl"
          width={225}
          height={300}
          placeholder="blur"
        />

        <div className="flex flex-col gap-2">
          <h1 className="font-mono text-5xl font-bold">
            Oi. <br /> Eu sou o Rafael!
          </h1>

          <span>
            {Object.keys(ContactLinks).map((method) => (
              <Contact key={method} method={method as keyof typeof ContactLinks} />
            ))}
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

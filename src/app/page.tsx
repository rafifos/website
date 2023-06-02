import Image from "next/image";

import { ContactLink } from "@/atoms/contact-link";

function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:gap-8">
          <Image
            src="/assets/profile-picture.jpg"
            alt="Foto de Perfil do Rafael, obtida no LinkedIn"
            className="max-w-sm rounded-lg shadow-2xl"
            width={225}
            height={300}
          />
          <div>
            <div className="flex gap-1">
              <h1 className="text-5xl font-bold">Oí, eu sou o Rafael!</h1>

              <ContactLink method="linkedin" />
              <ContactLink method="mail" />
            </div>

            <p className="py-6">
              Desenvolvedor Front-End especializado em Next.js, TypeScript e Ecossistema
              JavaScript/TypeScript com expertise em Design Systems.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

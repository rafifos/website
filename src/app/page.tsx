import { Hero } from "@/organisms/hero";
import { MyExperience } from "@/organisms/my-experience";

function Home() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 p-4">
      <Hero />
      <MyExperience />
    </main>
  );
}

export default Home;

import { myExperiences } from "./constants";

function MyExperience() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Minha experiência</h2>

      <ul className="steps steps-vertical">
        {myExperiences.map((experience, key) => (
          <li
            key={key}
            data-content={experience.current ? "★" : null}
            className="step step-primary"
          >
            {experience.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MyExperience;

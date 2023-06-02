import { myExperiences } from "./constants";

function MyExperience() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Minha experiência</h2>

      <ul className="steps steps-vertical">
        {myExperiences.map((experience, key) => (
          <li
            key={key}
            data-content={experience.current ? "★" : null}
            className="step-primary step"
          >
            {experience.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyExperience;

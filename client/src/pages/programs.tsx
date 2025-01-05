import { useEffect, useState } from "react";

type program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

const ProgramList = () => {
  const [programs, setPrograms] = useState<program[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error while fetching programs");
        }
        return response.json();
      })
      .then((data: program[]) => {
        setPrograms(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return (
    <section>
      {error && <p>Erreur : {error}</p>}
      {!error && programs.length === 0 && <p>Aucun programme disponible.</p>}
      {programs.length > 0 && (
        <ul>
          {programs.map((program) => (
            <li key={program.id}>
              <h3>{program.title}</h3>
              <p>{program.synopsis}</p>
              <p>
                {program.year} - {program.country}
              </p>
              <img src={program.poster} alt={program.title} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProgramList;

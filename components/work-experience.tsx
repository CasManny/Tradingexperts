const WorkExperience = () => {
  return <div>WorkExperience</div>;
};

export default WorkExperience;

const WorkExperienceCard = ({
  state,
  year,
  company,
}: {
  state: string;
  year: string;
  company: string;
}) => {
  return (
    <div className="">
      <h1>{company}</h1>
      <div className="">
        <div className=""></div>
        <div className="">
          <div className="">
            <p>{year}</p>
          </div>
          <p>{state}</p>
        </div>
      </div>
    </div>
  );
};

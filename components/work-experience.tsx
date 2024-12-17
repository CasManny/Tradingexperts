const experiences = [
  {
    state: "BALTIMORE, MD",
    year: "2015 - 2016",
    company: "LEGG MASON WOOD WALKER INC (CRD# 6555)",
  },
  {
    state: "LONDON, UK",
    year: "2005 - 2010",
    company: "FINANCE AND LOAN SERVICES",
  },
  {
    state: "LONDON, UK",
    year: "2010 - 2015",
    company: "LLOYDS FINANCIAL SERVICES",
  },
  {
    state: "CALIFORNIA, USA",
    year: "2015 - Till Date",
    company: "FIDELITY DISTRIBUTORS COMPANY LLC",
  },
];
const WorkExperience = () => {
  return (
    <section className="py-10 px-10 sm:py-24" id="resume">
      <h1 className="text-center text-4xl font-bold mb-5">My Resume</h1>
      <p>
        Wesley Shirley Christian is a Financial Consultant and Wealth Creator
        living in Usa, who has over 17 years of professional experience, and has
        merits of awards as well as Professional Certificate/ license in Europe
        , North-American and African.
      </p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {experiences.map((item, index) => (
          <WorkExperienceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
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
    <div className="relative mb-8">
      <div className="absolute left-1 -z-10 top-0 w-2 h-full bg-gray-300"></div>
      <div className="flex items-center">
        <div className="w-4 h-4 absolute top-0 left-0 bg-blue-500 rounded-full ring-2 ring-white"></div>
        <div className="ml-5">
          <h1 className="text-lg font-semibold">{company}</h1>
          <p className="text-gray-500">{year}</p>
          <p className="text-gray-700">{state}</p>
        </div>
      </div>
    </div>
  );
};

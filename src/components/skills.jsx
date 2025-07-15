import SkillCard from "./skillCard";
const Skills = () => {
  return (
    <section className="flex  items-start justify-between ">
      <div className=" flex flex-col items-start w-full">
        <h2 className="text-xl font-bold mb-2">Skills & Tools</h2>
        <div className="flex items-center justify-around w-full h-auto  py-2">
          <SkillCard skill={"React"}/>
          <SkillCard skill={"Express"}/>
          <SkillCard skill={"Figma"}/>
          <SkillCard skill={"TypeScript"}/>
          <SkillCard skill={"MongoDB"}/>
          <SkillCard skill={"NodeJS"}/>
          <SkillCard skill={"Tailwind"}/>
          <SkillCard skill={"SQL"}/>
        </div>
      </div>
    </section>
  );
};

export default Skills;

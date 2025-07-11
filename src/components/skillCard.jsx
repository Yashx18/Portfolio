const SkillCard = ({ skill }) => {
  return (
    <div className="px-4 py-0.5 flex items-center rounded-md text-sm font-semibold justify-center text-[#08090a] bg-[#fafafa]">
      {skill}
    </div>
  );
};

export default SkillCard;

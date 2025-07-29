const SkillCard = ({ skill }) => {
  return (
    <div className="px-4 py-1 flex items-center rounded-[6px] text-[13px] font-semibold justify-center text-[#08090a] bg-[#fafafa] font-poppins my-0.5 mr-[3px]">
      {skill}
    </div>
  );
};

export default SkillCard;

import { stats } from "@/constants";

const Stats = () => {
  return (
    <section className="flexCenter flex-row flex-wrap sm:mb-20 mb-6">
      {stats.map((stat) => {
        return <Stat key={stat.id} {...stat} />;
      })}
    </section>
  );
};

const Stat = ({ title, value }: { title: string; value: string }) => (
  <div className="flex-1 flex justify-start items-center m-3">
    <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
      {value}
    </h4>
    <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
      {title}
    </p>
  </div>
);

export default Stats;

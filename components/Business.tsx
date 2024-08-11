import { features } from "@/constants";
import Button from "./Button";
import Image from "next/image";

interface FeatureCardProp {
  id: string;
  icon: any;
  title: string;
  content: string;
  index: number;
}

const Business = () => {
  return (
    <section id="features" className="section">
      <div className="sectionInfo">
        <h2 className="heading2">
          You do the business,
          <br className="sm:block hidden" />
          we will handle the money.
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the
        </p>
        <Button className="mt-10" label="Get Started" />
      </div>

      <div className="sectionImg flex-col">
        {features.map((feature, index) => {
          return <FeatureCard key={feature.id} {...feature} index={index} />;
        })}
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, content, index }: FeatureCardProp) => {
  return (
    <div className="flex flex-row p-6 rounded-[20px] gap-y-6 items-center cursor-pointer feature-card">
      <div className="size-[64px] rounded-full flexCenter bg-dimBlue">
        <Image src={icon} alt="icon" className="size-[50%] object-contain" />
      </div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Business;

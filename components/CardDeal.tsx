import { card } from "@/assets";
import Button from "./Button";
import Image from "next/image";

const CardDeal = () => {
  return (
    <section className="section">
      <div className="sectionInfo">
        <h2 className="heading2">
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button className="mt-10" label="Open Card" />
      </div>

      <div className="sectionImg">
        <Image src={card} alt="card" className="w-[100%] h-[100%] z-[5]" />
        <div className="hidden sm:block absolute z-[3] right-0 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      </div>
    </section>
  );
};

export default CardDeal;

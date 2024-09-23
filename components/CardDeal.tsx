import { card } from "@/assets";
import Button from "./Button";
import Image from "next/image";

const sectionInfoHeading = "Find a better card deal\n in few easysteps.";
const sectionInfoParagraph =
  "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.";

const CardDeal = () => {
  return (
    <section className="section">
      <div className="sectionInfo">
        <h2 className="heading2 sm:whitespace-pre-line">
          {sectionInfoHeading}
        </h2>
        <p className="paragraph max-w-[470px] mt-5">{sectionInfoParagraph}</p>
        <Button className="mt-10" label="Open Card" />
      </div>

      <div className="sectionImg">
        <Image src={card} alt="card" className="w-[100%] h-[100%] z-[5]" />
        <div className="absolute z-[0] right-0 size-[50%] rounded-full white__gradient" />
      </div>
    </section>
  );
};

export default CardDeal;

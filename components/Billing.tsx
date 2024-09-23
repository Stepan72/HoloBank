import { apple, bill, google } from "@/assets";
import Image from "next/image";

const sectionInfoHeading = "Easily control your\n billing & invoicing.";
const sectionInfoParagraph =
  "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.";

const Billing = () => {
  return (
    <section id="product" className="sectionReverse">
      <div className="sectionImgReverse">
        <Image
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 size-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 size-[50%] rounded-full pink__gradient" />
      </div>

      <div className="sectionInfo">
        <h2 className="heading2 sm:whitespace-pre-line">
          {sectionInfoHeading}
        </h2>
        <p className="paragraph max-w-[470px] mt-5">{sectionInfoParagraph}</p>
        <div className="flex flex-row justify-center flex-wrap sm:mt-10 mt-6">
          <Image
            src={apple}
            alt="apple-store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <Image
            src={google}
            alt="google-store"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;

import { feedback } from "@/constants";
import FeedbackCard from "./FeedbackCard";

const sectionHeading = "What people are \n saying about us";
const sectionParagraph =
  "Everything you need to accept card payments and grow your business anywhere on the planet.";

const Testimonials = () => {
  return (
    <section id="clients" className="paddingY flexCenter flex-col relative">
      <div className="absolute z-[0] size-[60%] left-[15%] rounded-full blue__gradient" />

      <div className="w-full flex flex-col md:flex-row justify-between items-center sm:mb-16 mb-6 relative z-[1]">
        <h1 className="heading2 sm:whitespace-pre-line">{sectionHeading}</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className="paragraph text-left max-w-[450px]">
            {sectionParagraph}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => {
          return <FeedbackCard key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;

import Button from "./Button";

const sectionHeading = "Let's try our service now!";
const sectionParagraph =
  "Everything you need to accept card payments and grow your business anywhere on the planet.";

const CTA = () => {
  return (
    <section className="flexCenter marginY padding sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex flex-col flex-1">
        <h2 className="heading2">{sectionHeading}</h2>
        <p className="paragraph max-w-[470px] mt-5">{sectionParagraph}</p>
      </div>

      <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
        <Button label="Start" />
      </div>
    </section>
  );
};

export default CTA;

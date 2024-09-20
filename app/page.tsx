import {
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "@/components";

const Home = () => {
  return (
    <main>
      <div className="flexStart">
        <div className="boxWidth">
          <Hero />
        </div>
      </div>

      <div className="paddingX flexCenter">
        <div className="boxWidth">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;

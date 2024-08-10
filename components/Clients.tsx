import { clients } from "@/constants";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="flexCenter my-4">
      <div className="flexCenter flex-wrap gap-4 w-full">
        {clients.map((client) => {
          return (
            <div
              key={client.id}
              className="flex-1 flexCenter sm:min-w-[192px] min-w-[120px]"
            >
              <Image
                src={client.logo}
                alt={client.id}
                className="sm:w-[192px] w-[100px] object-contain cursor-pointer hover:filter hover:brightness-0 hover:invert"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;

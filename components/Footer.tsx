import { logo } from "@/assets";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flexCenter paddingY flex-col">
      <div className="flexStart md:flex-row flex-col mb-8 w-full">
        <div className="flex flex-col flex-1 justify-start mr-10">
          <Image
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className="paragraph mt-4 max-w-[310px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex flex-row flex-[1.5] justify-between w-full flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => {
            return (
              <div
                key={footerLink.title}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {footerLink.title}
                </h4>
                <ul className="flex flex-col gap-4 list-none mt-4">
                  {footerLink.links.map((link) => {
                    return (
                      <li
                        key={link.name}
                        className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                      >
                        {link.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45] ">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2024 Hoobank. Made by Stepan Nimchuk. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6 gap-6">
          {socialMedia.map((social) => {
            return (
              <Image
                key={social.id}
                src={social.icon}
                alt={social.id}
                className="size-[21px] object-contain cursor-pointer"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;

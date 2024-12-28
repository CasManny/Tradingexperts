import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
export const links = [
  {
    icon: CiMail,
    href: "mailto:support@wesleyshirley.com",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/+14696965385",
  },
  {
    icon: FaXTwitter,
    href: "/",
  },
  {
    icon: FaLinkedinIn,
    href: "/",
  },
];
export const Footer = () => {
  return (
    <footer className="p-10 bg-neutral-900 text-white">
      <div className="flex items-center justify-center">
        <div className="">
          <h1 className="my-2 sm:my-5 capitalize text-3xl text-center font-bold">
            wesley shirley christian
          </h1>
          <p className="text-pretty max-w-lg text-sm mb-2 text-left sm:text-xl">
            Let me be your Financial tour guide as you embark on these rough
            ends and road to financial independence. Remember when you invest ,
            you are saving for future Purposes.
          </p>
          <div className="flex items-center justify-center my-5">
            <div className="flex items-center gap-5">
              {links.map((link, index) => {
                const { href, icon: Icon } = link;
                return (
                  <Link href={href} key={index} className="bg-brand-4 hover:bg-[#FFE20A] rounded-full size-10 flex items-center justify-center">
                    <Icon className="size-8" />
                  </Link>
                );
              })}
            </div>
          </div>
          <p className="text-xs sm:text-base text-center py-2">
            © Copyright {new Date().getFullYear()}
            <span className="capitalize font-bold sm:text-lg"> wesley shirley christian</span>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

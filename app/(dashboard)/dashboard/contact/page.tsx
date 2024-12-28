import React from "react";
import ContactUsForm from "../_components/contact-us-form";
import { FaMarker } from "react-icons/fa";
import { Phone } from "lucide-react";
import { CiMail } from "react-icons/ci";
const info = [
  {
    title: "Address",
    desc: " 2 Dobsons Way, Bessbrook, Newry, Northern Ireland, BT35 7FH",
    icon: FaMarker,
  },
  {
    title: "Phone",
    desc: "+1 (469) 696-5385",
    icon: Phone,
  },
  {
    title: "Email",
    desc: "support@wesleyshirley.com",
    icon: CiMail,
  },
];

const ContactUs = () => {
  return (
    <section className="max-w-5xl w-full mx-auto py-12 sm:py-24 px-5">
      <div className="my-10">
        <h1 className="text-5xl font-extrabold">Get In Touch</h1>
        <p>We will get back to you as soon as possible</p>
        <div className="w-20 h-1.5 bg-red-500" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <ContactUsForm />
        <div className="space-y-10">
          {info.map((item, index) => (
            <div className="" key={index}>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <div className="flex items-center gap-2">
                <item.icon className="size-5" />
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

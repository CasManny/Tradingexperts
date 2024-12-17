import { Share2 } from "lucide-react";
import Link from "next/link";
import { links } from "./footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactMe = () => {
  return (
    <section className="py-10 px-10 sm:py-24">
      <div className="">
        <h1 className="text-center text-4xl font-bold">Contact Me</h1>
        <p className="text-left max-w-lg mx-auto">
          I always believe in good communication and a conducive atmosphere
          between myself and my clients . Because no tree makes a forest . I
          have made it possible (easy) to reach out me through the famous social
          media handles . This includes :- Telegram , WhatsApp and Email.
        </p>
        <div className="my-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Card className="max-w-lg shadow-lg backdrop-grayscale p-10">
              <div className="flex items-center justify-center flex-col">
                <div className="bg-brand-4 size-12 my-4 rounded-full center">
                  <Share2 className="" />
                </div>
                <h1 className="font-bold text-xl capitalize">
                  social profiles
                </h1>
              </div>
              <div className="flex justify-center items-center my-5 space-x-5">
                {links.map((link, index) => {
                  const { href, icon: Icon } = link;
                  return (
                    <Link href={href} key={index} className="size-10">
                      <Icon className="text-neutral-900 size-8" />
                    </Link>
                  );
                })}
              </div>
            </Card>
            <Card>
              <div className="p-5 flex space-y-5 flex-col">
                <div className="flex gap-2 flex-col sm:flex-row">
                  <Input placeholder="Your name" />
                  <Input placeholder="Your Email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea className="resize-none h-40" placeholder="Message" />
                <Button className="bg-brand-4 hover:bg-brand-4 text-neutral-900 font-bold">
                  Send message
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

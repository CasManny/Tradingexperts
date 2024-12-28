"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Share2 } from "lucide-react";
import Link from "next/link";
import { links } from "./footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import api from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const router = useRouter();

  const SwalWithReact = withReactContent(Swal);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await api.post("/contact-us", values);
      SwalWithReact.fire({
        text: `Message Sent Successfully!`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        setLoading(false);
        router.push("./");
      });
    } catch (error: any) {
      setLoading(false);
      console.error("Error sending message:", error);
      SwalWithReact.fire({
        title: "Message Failed",
        text: error.response?.data?.error || "Something went wrong.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  }

  return (
    <section
      className="py-10 px-10 sm:py-24 w-full max-w-7xl mx-auto"
      id="contact"
    >
      <div>
        <h1 className="text-center text-4xl font-bold">Contact Me</h1>
        <p className="text-left max-w-lg mx-auto">
          I always believe in good communication and a conducive atmosphere
          between myself and my clients. Because no tree makes a forest. I have
          made it possible (easy) to reach out to me through the famous social
          media handles. This includes Telegram, WhatsApp, and Email.
        </p>
        <div className="my-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Card className="max-w-lg shadow-lg backdrop-grayscale p-10">
              <div className="flex items-center justify-center flex-col">
                <div className="bg-brand-4 size-12 my-4 rounded-full center">
                  <Share2 />
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
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="p-5 flex space-y-5 flex-col"
              >
                <div className="flex gap-2 flex-col sm:flex-row">
                  <div className="w-full">
                    <Input
                      {...form.register("fullName")}
                      placeholder="Your name"
                      className="w-full"
                    />
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.fullName?.message}
                    </p>
                  </div>
                  <div className="w-full">
                    <Input
                      {...form.register("email")}
                      placeholder="Your Email"
                      className="w-full"
                    />
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.email?.message}
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <Input
                    {...form.register("subject")}
                    placeholder="Subject"
                    className="w-full"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.subject?.message}
                  </p>
                </div>
                <div className="w-full">
                  <Textarea
                    {...form.register("message")}
                    placeholder="Message"
                    className="resize-none h-40"
                  />
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.message?.message}
                  </p>
                </div>
                {loading ? (
                  <Button
                    type="button"
                    disabled
                    className="bg-brand-4 text-neutral-900 font-bold"
                  >
                    Sending...
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-brand-4 hover:bg-brand-4 text-neutral-900 font-bold"
                  >
                    Send message
                  </Button>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

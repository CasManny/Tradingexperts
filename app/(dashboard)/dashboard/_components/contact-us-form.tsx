"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

const ContactUsForm = () => {
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
    try {
      await api.post("/contact-us", values);
      SwalWithReact.fire({
        text: `Email Sent Successfully.`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        router.refresh();
      });
    } catch (error: any) {
      console.error("Error sending email:", error);
      SwalWithReact.fire({
        title: "Message Failed",
        text: error.response.data.error || "Something went wrong.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <p className="text-pretty">
          Send us your message and we will get back to you as soon as possible
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Firstname: <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="w-full">
                  <Input placeholder="" className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Email: <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Subject: <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="" className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us anything here.."
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-brand-4 text-neutral-800 font-bold"
        >
          Send message
        </Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;

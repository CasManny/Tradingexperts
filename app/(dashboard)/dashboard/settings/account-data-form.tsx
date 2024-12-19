"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  ImageIcon, Upload } from "lucide-react";

const formSchema = z.object({
  firstname: z.string().min(1, "Required"),
  lastname: z.string(),
  email: z.string().email(),
  username: z.string(),
  phone: z.string(),
  country: z.string(),
});

const Verification = ["Intl Passport", "Personal ID", "Others"];

const AccountDataForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "john Doe",
      email: "example@gmail.com",
      firstname: "",
      lastname: "",
      country: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 max-w-2xl mx-auto"
        >
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="" readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex">
            <Button
              type="submit"
              variant={"destructive"}
              className="ml-auto mt-4 px-10"
            >
              save
            </Button>
          </div>
        </form>
      </Form>
      <div className="max-w-2xl mx-auto flex items-center justify-center flex-col mt-5">
        <h1 className="text-3xl font-bold">Account Verification</h1>
        <Button variant={"destructive"} className="font-extrabold my-5">
          Account not verified
        </Button>
      </div>
      <div className="max-w-2xl mx-auto">
        <p className="mb-2">
          Account verification usually takes about 30 minutes
        </p>
        <div className="">
          <p className="mb-2">Choose your ID type</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Intl Passport" />
            </SelectTrigger>
            <SelectContent>
              {Verification.map((item, index) => (
                <SelectItem value={item} key={index}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="my-5">
            Copy of passport (Please upload a passport in a full layout, with
            borders clearly visible)
          </p>
          <p className="mb-5">Upload file [ png, jpg, jpeg ] max 10Mb</p>
          <Button variant={'destructive'} className="text-white font-extrabold text-lg">
            <ImageIcon />
            Browse file to upload
          </Button>
          <p className="text-red-500">* click to read and accept the terms of service *</p>

          <div className="flex">
            <Button
              className="px-10 text-white ml-auto"
              variant={"destructive"}
            >
              <Upload />
              upload
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountDataForm;

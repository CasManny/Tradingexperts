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

const adminSignInSchema = z.object({
  secretCode: z.string(),
    email: z.string().email(),
  password: z.string()
});

const AdminSignIn = () => {
  const form = useForm<z.infer<typeof adminSignInSchema>>({
    resolver: zodResolver(adminSignInSchema),
    defaultValues: {
        secretCode: "",
        email: "",
        password: ""
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof adminSignInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="max-w-5xl mx-auto py-12 sm:py-24">
      <h1 className="text-center text-5xl">Welcom Admin [TradingExpert]</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-10">
          <FormField
            control={form.control}
            name="secretCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Admin Trading Expert Secret code</FormLabel>
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
                <FormLabel>Enter Your admin Email address</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your password</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full p-5 bg-brand-4 hover:bg-brand-4 text-black font-bold">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AdminSignIn;

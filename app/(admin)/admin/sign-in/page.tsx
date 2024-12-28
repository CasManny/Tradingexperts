"use client";

import { useState } from "react";
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
import { useRouter } from "next/navigation";
import api from "@/lib/api.js";

const adminSignInSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const AdminSignIn = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const form = useForm<z.infer<typeof adminSignInSchema>>({
    resolver: zodResolver(adminSignInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  
  async function onSubmit(values: z.infer<typeof adminSignInSchema>) {
    setError(null); // Clear any previous errors
    try {
      setLoading(true);
      const { data } = await api.post("/admin/login", {
        username: values.username,
        password: values.password,
      });

      localStorage.setItem("adminToken", data.token);
      router.push("../admin");
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.error || "Something went wrong. Please try again.");
    }
  }
  return (
    <div className="max-w-5xl mx-auto py-12 sm:py-24">
      <h1 className="text-center text-white text-5xl">Welcom Admin WSC</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 my-10"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Admin Username</FormLabel>
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
                <FormLabel>Admin Password</FormLabel>
                <FormControl>
                  <Input placeholder="" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button
            type="submit"
            className="w-full p-5 bg-brand-4 hover:bg-brand-1 text-black font-bold"
          >
            {loading ? "Processing..." : "Sign In"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AdminSignIn;

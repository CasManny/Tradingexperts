"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signinSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import api from "@/lib/api.js";

const SignInCard = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signinSchema>) {
    setError(null); // Clear any previous errors
    try {
      setLoading(true);
      const { data } = await api.post("/auth/login", {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("userToken", data.token); // Store token in localStorage
      router.push("/dashboard"); // Redirect to dashboard
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.error || "Something went wrong. Please try again.");
    }
  }

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Account Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
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
                  <FormLabel className="text-sm">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-brand-2 hover:bg-brand-1 text-neutral-900 font-bold"
            >
                    {loading ? "Processing..." : "Sign In"}
            </Button>
            <div className="mt-2">
              <p className="text-center">
                Don&apos;t have an account?{" "}
                <Link href="/accounts/sign-up" className="underline text-blue-700 tracking-wide">Create an account</Link>
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignInCard;

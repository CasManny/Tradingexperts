"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signupSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import api from "@/lib/api.js"; // Import the Axios instance

export const SignUpCard = () => {
  const router = useRouter();

  // Initialize form with validation
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      fullName: "",
      country: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof signupSchema>) {
    try {
      const response = await api.post("/auth/signup", values);
      if (response.status === 200) {
        alert("Account created successfully!");
        router.push(`/dashboard?${response.data.email}`);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      alert(errorMessage);
    }
  }

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>Create Your Account</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a unique username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
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
                  <FormLabel className="text-sm">Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Country of residence" {...field} />
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
                  <FormLabel className="text-sm">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
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
                  <FormLabel className="text-sm">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
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
                    <Input
                      type="password"
                      placeholder="Enter a strong password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-brand-2 hover:bg-brand-1 text-neutral-900 font-bold"
            >
              Register
            </Button>
            <div className="mt-2">
              <p className="text-center">
                Already have an account?{" "}
                <Link
                  href={"/accounts/sign-in"}
                  className="underline text-blue-700 tracking-wide"
                >
                  Login!
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

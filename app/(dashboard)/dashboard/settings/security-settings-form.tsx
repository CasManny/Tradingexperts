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
import api from "@/lib/api";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  newPassword: z.string().min(6),
  confirmNewPassword: z.string().min(6),
});

const SecuritySettingForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });
  const router = useRouter();

  const SwalWithReact = withReactContent(Swal);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await api.post("/client/reset-pass", values);
      SwalWithReact.fire({
        title: "Password reset successfully",
        text: `ID upload complete.`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        router.replace("../");
      });
    } catch (error: any) {
      console.error("Error resetting password:", error);
      SwalWithReact.fire({
        title: "Reset Failed",
        text: error.response.data.error || "Something went wrong.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  }
  return (
    <section className="max-w-2xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col"
        >
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New password</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmNewPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New password</FormLabel>
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
              className="ml-auto px-10"
              variant={"destructive"}
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default SecuritySettingForm;

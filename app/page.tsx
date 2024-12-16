import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col h-full">
      <h1>The landing page Goes Here</h1>
      <div className="flex gap-4">
        <Button asChild className="bg-brand-3 text-neutral-900 hover:bg-brand-1">
          <Link href={'/accounts/sign-in'}>Create account</Link>
        </Button>
        <Button asChild>
          <Link href={'/dashboard'}>Go to dashboard</Link>
        </Button>
      </div>
   </main>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-svh grid">
      <div className="grid place-items-center gap-6 m-auto">
        <Image
          priority
          src="/404.svg"
          alt="a-404-img"
          width={380}
          height={380}
        />
        <h1>404 - Page Not Found</h1>
        <p>The page you’re looking for does not exist.</p>
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  );
}

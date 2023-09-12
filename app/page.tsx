"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import ProfilePic from "@/components/ProfilePic";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  let session = useSession();
  const { push } = useRouter();

  if (session.status === "unauthenticated") {
    push("/api/auth/signin");
  }

  if (session.status === "authenticated") {
    push("/dashboard");
  }

  return (
    <div className="flex items-center justify-center inset-0 min-h-screen flex-col">
      Loading...
    </div>
  );
}

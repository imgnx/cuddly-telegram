"use client";
import ProfilePic from "@/components/ProfilePic";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center inset-0 w-full justify-between container mx-auto">
        <div>
          <Link href="/dashboard" className="hover:text-neutral-400 active:text-neutral-300">Home</Link>
        </div>
        <div className="flex items-center inset-0 w-full justify-end container mx-auto">
          <button
            className="rounded bg-neutral-600 hover:bg-neutral-500 active:bg-neutral-400 px-4 py-2 font-semibold text-white my-5"
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </button>
          <ProfilePic />
        </div>
      </div>
      {children}
    </>
  );
}

export default DashboardLayout;

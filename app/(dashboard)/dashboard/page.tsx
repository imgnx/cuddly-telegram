"use client";
import { ImgSessionContext } from "@/components/ClientLayout";
import Link from "next/link";
import React, { useContext } from "react";

function page() {
  let imgSession = useContext(ImgSessionContext);
  return (
    <>
      <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-6">
        <Link href="/cron">
          <div className="h-24 w-full rounded shadow bg-white border flex items-center justify-center">
            <pre>CRON JOBS</pre>
          </div>
        </Link>
      </div>
      {process.env.NODE_ENV === "development" ? (
        <div className="my-12 container mx-auto">
          <h4 className="text-pink-600 font-mono">Debugger</h4>
          <pre>{JSON.stringify(imgSession, null, 2)}</pre>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default page;

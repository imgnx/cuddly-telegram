"use client";
import React from "react";
import { v4 } from "uuid";

function page() {
  let crons = [1, 2, 3, 4];
  function openModal(no: number) {
    alert(`Opening ${no}`);
  }
  return (
    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-6">
      {crons.map((cron) => {
        return (
          <button key={v4()} onClick={() => openModal(cron)}>
            <div className="h-24 w-full rounded shadow bg-white border flex items-center justify-center">
              <pre>CRON JOBS</pre>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default page;

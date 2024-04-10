import React, { ReactNode } from "react";

import Navbar from "@/components/navbar";

const Wrapper = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <main className={`flex-1 min-h-screen w-full ${className}`}>
      <Navbar />

      {children}
    </main>
  );
};

export default Wrapper;

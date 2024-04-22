import { ReactNode } from "react";

import { ContactSection } from "@/components/app";
import Navbar from "@/components/navbar";
import Footer from "../footer";

const Wrapper = ({
  children,
  hasNav = true,
  nav,
  className = "",
}: {
  children: ReactNode;
  hasNav?: boolean;
  nav?: ReactNode;
  className?: string;
}) => {
  return (
    <main className={``}>
      {/* navbar */}
      {hasNav ? <Navbar /> : nav}
      <div className={`flex-1 min-h-[50vh] w-full ${className}`}>
        {children}
      </div>

      {/*contact section*/}
      <ContactSection />

      {/* footer   */}
      <Footer />
    </main>
  );
};

export default Wrapper;

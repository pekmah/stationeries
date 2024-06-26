import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: String;
}) => {
  return (
    <div className={`max-w-[1300px] w-full mx-auto px-3 ${className}`}>
      {children}
    </div>
  );
};

export default Container;

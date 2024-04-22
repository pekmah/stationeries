import React, { ReactNode } from "react";
type ContactsCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

const ContactsCard = ({ icon, title, children }: ContactsCardProps) => {
  return (
    <div className="flex-1 flex md:block gap-3 max-w-md">
      <div className="flex gap-2 mb-1">
        {icon}
        <h6 className="text-sm font-bold">{title}</h6>
      </div>

      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
};

export default ContactsCard;

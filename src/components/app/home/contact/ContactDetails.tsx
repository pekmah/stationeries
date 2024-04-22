import React from "react";
import { Mail, Phone } from "lucide-react";

import ContactsCard from "./ContactsCard";
import GlobalServices from "@/services/GlobalServices";

const ContactDetails = async () => {
  const phoneNumbers = await GlobalServices.getPhoneNumbers();
  const contacts = await GlobalServices.getContacts();

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-end mx-auto text-[15px]">
      <ContactsCard icon={<Phone size={"18"} />} title={"Call us"}>
        {phoneNumbers?.map((phone, index) => (
          <p key={index} className="text-black">
            {phone.phone_number}
          </p>
        ))}
      </ContactsCard>

      <ContactsCard icon={<Mail size={"18"} />} title={"Email"}>
        <p className="text-black">{contacts.email}</p>
      </ContactsCard>
    </div>
  );
};

export default ContactDetails;

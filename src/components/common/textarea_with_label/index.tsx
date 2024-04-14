import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function TextareaWithLabel({ label, ...rest }: InputProps) {
  return (
    <div className="flex flex-col w-full h-full gap-1.5">
      <Label htmlFor="message">{label}</Label>
      <Textarea className={"w-full max-w-md flex-1 text-black"} {...rest} />
    </div>
  );
}

export default TextareaWithLabel;

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

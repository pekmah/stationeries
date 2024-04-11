import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import IntrinsicAttributes = React.JSX.IntrinsicAttributes;

function TextareaWithLabel({ label, ...rest }: InputProps) {
  return (
    <div className="flex flex-col w-full h-full gap-1.5">
      <Label htmlFor="message">{label}</Label>
      <Textarea className={"w-full max-w-md flex-1 text-black"} {...rest} />
    </div>
  );
}

export default TextareaWithLabel;

export interface InputProps extends IntrinsicAttributes {
  label: string;
  placeholder?: string;
  type?: string;
  handleChange?: () => {};
  value?: string;
}

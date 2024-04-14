import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function InputWithLabel({ label, ...rest }: InputProps) {
  return (
    <div className="grid max-w-md w-full items-center gap-1.5 ">
      <Label htmlFor="email">{label}</Label>
      <Input className={"w-full h-12 text-black"} {...rest} />
    </div>
  );
}

export default InputWithLabel;
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

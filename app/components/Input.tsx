import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div dir="rtl" className="gap-y-2 flex flex-col ">
        <label className="px-3 text-lg">{label}</label>
        <input
          ref={ref}
          {...props}
          className={twMerge(
            "w-full bg-black text-white border px-3 py-2 focus:outline-none rounded-lg",
            className
          )}
        />
      </div>
    );
  }
);
Input.displayName='Input'
export default Input;

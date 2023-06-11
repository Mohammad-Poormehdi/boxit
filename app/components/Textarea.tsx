"use client";

import { TextareaHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div dir="rtl" className="gap-y-2 flex flex-col ">
        <label className="px-3 text-lg">{label}</label>
        <textarea
          ref={ref}
          className={twMerge(
            "w-full rounded-lg focus:outline-none h-[100px] bg-black border px-3 py-2 resize-none"
          )}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;

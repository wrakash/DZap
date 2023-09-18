import React, { ChangeEventHandler } from "react";

interface TextInputProps {
  placeholder?: string;
  type?: string;
  value: string;
  children?: any;
  name?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export function TextInput({ children, className, ...rest }: TextInputProps) {
  return (
    <div className="w-full space-y-1">
      {children}
      <input className={className} {...rest} />
    </div>
  );
}

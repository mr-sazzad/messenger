"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  id,
  type,
  register,
  required,
  errors,
  placeholder,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
            text-black 
            font-light 
            py-2 
            px-4 
            bg-neutral-100 
            w-full 
            rounded-full 
            focus:outline-none
        "
      ></input>
    </div>
  );
};

export default MessageInput;

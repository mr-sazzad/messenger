<h1 align="center">💭Messenger project </h1>

<p align="center">🧩 Some awesome part of my this project</p>



```CSS

/* DIIDER ⚖️ */

const Divider = () => {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>
    </div>
  );
};

export default Divider;
```

```CSS

/* INPUT COMPONENT ⚖️ */

"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div>
      <label
        className="
        block
        text-sm
        font-medium
        leading-6
        text-gray-900"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `
                  form-input
                  block
                  w-full
                  py-1.5
                  rounded
                  shadow-sm
                  border-0
                  ring-1
                  ring-inset
                  ring-gray-300
                  placeholder: text-gray-400
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-sky-600
                  sm:text-sm
                  sm:leading-6`,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default Input;

```

```CSS
/* BUTTON ⚖️ */

"use client";
import { clsx } from "clsx";

interface ButtonProps {
  type?: "submit" | "button" | "reset" | undefined;
  children?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  fullWidth,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
    flex
    justify-center
    rounded-md
    px-3
    py-2
    text-sm
    font-semibold
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-offset-2`,
        disabled && "opacity-50 cursor-default",
        secondary ? "text-gray-900" : "text-white",
        fullWidth && "w-full",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >
      {children}
    </button>
  );
};

export default Button;

```

```css
/* @tailwindcss/forms 🧾 */

  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],

```

<p align="center"> Take Love From Me 💖</p>
<p align="center"> sazzad karim</p>

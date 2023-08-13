"use client";

import Button from "@/app/components/Button";
import Divider from "@/app/components/Divider";
import Input from "@/app/components/Inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import AuthSocialButton from "./AuthSocialButton";

// variant type
type Variant = "REGISTER" | "LOGIN";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant, setVariant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // AXIOS REGISTER
    }

    if (variant === "LOGIN") {
      // NEXT AUTH SIGN IN
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
  };

  return (
    <div
      className="
    mt-8
    max-w-sm
    w-full
    sm:max-w-md
    mx-auto"
    >
      <div
        className="
      bg-white
      px-4
      py-8
      shadow
      sm-rounded-lg
      rounded
      sm:px-10"
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="User Name"
              register={register}
              errors={errors}
            />
          )}
          <Input
            id="email"
            label="Email address"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign In" : "Register"}
            </Button>
          </div>
        </form>
        <Divider />
        <div className="mt-6 flex gap-2 ">
          <AuthSocialButton
            icon={BsGithub}
            onClick={() => socialAction("github")}
          />
          <AuthSocialButton
            icon={BsGoogle}
            onClick={() => socialAction("google")}
          />
        </div>
        <div className="mt-6 flex justify-center text-gray-500 text-sm px-2 gap-2">
          <div>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

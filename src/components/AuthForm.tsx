"use client";

import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { Button } from "./ui/button";

type Varient = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [varient, setVarient] = useState<Varient>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const toggleVarient = useCallback(() => {
    if (varient === "LOGIN") {
      setVarient("REGISTER");
    } else {
      setVarient("LOGIN");
    }
  }, [varient]);

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

    if (varient === "REGISTER") {
      // axios register
    }

    if (varient === "LOGIN") {
      // Nextauth login
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // Nextauth social login
  };

  return (
    <div
      className=" 
        mt-8
        w-full
        sm:max-w-md"
    >
      <div
        className=" 
            bg-white
            px-4
            py-8
            shadow
            sm:rounded
            sm:px-10
        "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {varient === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            label="Email Address"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            register={register}
            errors={errors}
          />
          <Button
            className="
            text-white 
            text-base 
            bg-sky-600 
            rounded 
            w-full 
            hover:bg-sky-700"
            type={"submit"}
          >
            {varient === "LOGIN" ? "Sign In" : "Register"}
          </Button>
        </form>
        <div className=" mt-6 ">
          <div className="relative">
            <div className=" flex items-center absolute inset-0">
              <div className=" w-full border-t border-gray-300" />
            </div>
            <div className=" relative flex justify-center items-center">
              <span className=" px-2 bg-white text-sm text-gray-500 relative ">
                or continue with
              </span>
            </div>
          </div>
        </div>
        {/* <AddSocialAuth /> */}
      </div>
    </div>
  );
};

export default AuthForm;

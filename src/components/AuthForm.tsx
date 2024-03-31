"use client";

import axios from "axios";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { Button } from "./ui/button";
import { BsGithub, BsGoogle } from "react-icons/bs";
import AddSocialAuth from "./AddSocialAuth";

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
      const response = axios.post("/api/register", data);
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
        sm:max-w-md
        text-zinc-900"
    >
      <div
        className=" 
            bg-white
            px-4
            py-8
            shadow-lg
            sm:rounded
            sm:px-10
        "
      >
        <form
          className=" main-form space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {varient === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email Address"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            register={register}
            errors={errors}
            disabled={isLoading}
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
        <div className="Input-field seperator-line mt-6 ">
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
        <div className="social-auth flex space-x-4">
          <AddSocialAuth
            icon={BsGoogle}
            onClick={() => socialAction("google")}
          />
          <AddSocialAuth
            icon={BsGithub}
            onClick={() => socialAction("github")}
          />
        </div>
        <div className="devider-section flex justify-center text-center mt-6 text-gray-700">
          <div>
            <button>
              {varient === "LOGIN"
                ? "New to ChitChat?"
                : "Already have account?"}
            </button>
          </div>
          <div className=" pl-1">
            <button className=" underline" onClick={toggleVarient}>
              {varient === "LOGIN" ? "Create Account" : "LogIn"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

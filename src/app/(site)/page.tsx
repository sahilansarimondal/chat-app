import Image from "next/image";
import ChatLogo from "@/components/icons/ChatLogo";
import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <div className=" flex flex-col dark:text-white justify-center items-center h-screen">
      <div>
        <ChatLogo />
      </div>
      <h2 className=" text-3xl font-semibold p-7 ">Sign in to your account</h2>
      <AuthForm />
    </div>
  );
}

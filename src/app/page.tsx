import Image from "next/image";
import ChatLogo from "../../public/images/ChatLogo";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <div>
        <ChatLogo />
      </div>
      <h2>Login here to continue</h2>
      <div className=" bg-white p-4 shadow rounded-lg">
        <input type="text" placeholder="hello" />
      </div>
    </div>
  );
}

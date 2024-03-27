import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex dark:text-white justify-start  items-center gap-9 h-screen w-full">
      <div className=" h-full p-5 w-96 border-r">
        <Sidebar />
      </div>
      <div className=""> chat section</div>
    </div>
  );
}

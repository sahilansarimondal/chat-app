import React from "react";
import CreateChat from "./icons/CreateChat";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const HeaderSection = () => {
  return (
    <div className="flex  justify-between">
      <div className=" flex gap-4 items-center">
        <div className=" cursor-pointer">
          <Avatar>
            <AvatarImage
              className="rounded-full "
              height={"40px"}
              width={"40px"}
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className=" text-2xl font-semibold">Chats</h2>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="dark:bg-zinc-800 cursor-pointer bg-zinc-200 hover:bg-gray-300 dark:hover:bg-gray-700 p-[3px] rounded-full">
          <ModeToggle />
        </div>
        <div className="dark:bg-zinc-800 cursor-pointer bg-zinc-200 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-full">
          <CreateChat />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;

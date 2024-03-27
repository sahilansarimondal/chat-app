import React from "react";
import CreateChat from "../../public/images/CreateChat";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const HeaderSection = () => {
  return (
    <div className="flex  justify-between">
      <div className=" flex gap-4 items-center">
        <div>
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
        <div>
          <ModeToggle />
        </div>
        <div className="bg-zinc-800 hover:bg-gray-700 p-2 rounded-full">
          <CreateChat />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;

"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import Nightmode from "../../public/images/Nightmode";
import Daymode from "../../public/images/Daymode";
import CreateChat from "../../public/images/CreateChat";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";
import HeaderSection from "./HeaderSection";

function Sidebar() {
  return (
    <div>
      <HeaderSection />
      <SearchBar />
    </div>
  );
}

export default Sidebar;

import React from "react";
import { IconType } from "react-icons";

interface AddSocialAuthProps {
  icon: IconType;
  onClick: () => void;
}

const AddSocialAuth: React.FC<AddSocialAuthProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className=" 
      relative 
      flex 
      justify-center 
      w-full 
      border 
      rounded 
      p-2 
      border-gray-300 
      shadow-inner 
      mt-4 hover:shadow-lg 
      hover:border-gray-400"
    >
      <Icon />
    </button>
  );
};

export default AddSocialAuth;

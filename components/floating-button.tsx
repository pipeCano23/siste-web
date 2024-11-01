import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";

const ICON = {
  product: <IoBagHandleOutline size={24} />,
  dashboard: <MdOutlineAnalytics size={24} />,
};

const FloatingButton = ({
  className,
  iconSelected,
  handleOnClick,
}: {
  className: string;
  iconSelected: string;
  handleOnClick: any;
}) => {
  return (
    <button
      onClick={handleOnClick}
      className={
        "fixed bottom-5 right-5 rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 " +
        className
      }
    >
      {ICON[iconSelected as keyof typeof ICON]}
    </button>
  );
};

export default FloatingButton;

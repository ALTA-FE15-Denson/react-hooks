import React, { FC } from "react";

interface ButtonProps {
  id: string;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ id, label, onClick }) => {
  return (
    <button id={id} onClick={onClick} className="w-full h-12 bg-red-500 rounded-md to-white font-semibold">
        {label}
    </button>
  )
};

export default Button;

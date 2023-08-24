import React, { FC } from "react";

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string ;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="" className="block text-gray-700 font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
      />
    </div>
  );
};

export default Input;

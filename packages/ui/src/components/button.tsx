import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-4 ml-40 py-2 bg-blue-500 text-red-500 rounded-md hover:bg-blue-600">
      {children} blood
    </button>
  );
};

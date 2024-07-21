import React from "react";

export function PrimaryButton({ onClick, title, className }) {
  return (
    <button
      onClick={onClick}
      className={` flex h-10 items-center justify-center rounded-full bg-btn-gradient p-2 text-sm  text-white ${className}`}
    >
      {title}
    </button>
  );
}

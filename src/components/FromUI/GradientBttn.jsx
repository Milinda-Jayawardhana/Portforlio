import React from "react";
import { HoverBorderGradient } from "./HoverBorderGradient";

export function GradientBttn() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="flex items-center space-x-2 text-white dark:bg-black dark:text-white hover:text-orange-600"
      >
        <span>Hire Me</span>
      </HoverBorderGradient>
    </div>
  );
}

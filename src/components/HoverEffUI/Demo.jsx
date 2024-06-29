// App.js
import React from "react";
import { HoverEffect } from "./HoverEffect";


const items = [
  { title: "Item 1", description: "Description 1", link: "/item1" },
  { title: "Item 2", description: "Description 2", link: "/item2" },
  // Add more items as needed
];


export default function Demo() {
  return (
    <div>
      <HoverEffect items={items}/>
    </div>
  )
}


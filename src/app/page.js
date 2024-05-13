import Body from "@/components/Body";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function page() {
  return (
    <div className=" flex">
      <Sidebar></Sidebar>
      <Body></Body>
    </div>
  );
}

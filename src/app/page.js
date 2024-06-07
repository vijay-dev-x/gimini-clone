import Body from "@/components/Body";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function page() {
  return (
    <div className=" h-[100vh] overflow-hidden flex">
      <Sidebar></Sidebar>
      <Body></Body>
    </div>
  );
}

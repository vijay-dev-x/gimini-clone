"use client";
import { Context } from "@/context.jsx/ContextProvider";
import {
  ChefHat,
  CircleHelp,
  ListRestart,
  LucideMessagesSquare,
  Menu,
  MessageCircle,
  MessagesSquare,
  Plus,
  Settings,
} from "lucide-react";
import React, { useContext, useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    setDisplayResult,
    prevPrompts,
    result,
    submit,
    setRecentPrompts,
    shidebarShow,
    setSidebarShow,
  } = useContext(Context);
  const loadRecentResult = (prompt) => {
    setDisplayResult(false);
    submit(prompt);
    setRecentPrompts(prompt);
  };
  // for desktop
  const sidebarHandler = () => {
    setIsOpen(!isOpen);
  };
  // for mobile
  const sidebarHandlerM = () => {
    setSidebarShow(!shidebarShow);
    setIsOpen(!isOpen);
  };
  // new chat handler
  const newChatHandler = () => {
    setDisplayResult(false);
  };
  return (
    <div className="flex flex-col md:w-auto justify-between min-h-[100vh] bg-zinc-900 p-2 md:p-5 ">
      <div>
        <Menu
          className="  hidden md:block hover:text-white text-white/60 cursor-pointer"
          // for lg screen
          onClick={sidebarHandler}
          size={35}
        ></Menu>
        <Menu
          className=" md:hidden block hover:text-white text-white/60 cursor-pointer"
          // for mobile screen
          onClick={sidebarHandlerM}
          size={30}
        ></Menu>
        <div
          onClick={newChatHandler}
          className=" flex hover:bg-zinc-700 gap-2  my-10 bg-zinc-800 justify-center md:px-5 px-3 md:py-3  py-2 rounded-full cursor-pointer"
        >
          {isOpen ? <p className=" whitespace-nowrap">New chat</p> : null}
          <Plus></Plus>
        </div>
        {isOpen && (
          <div className=" ">
            <p className=" text-white/60">Recent chats</p>
            <div className=" h-[53vh] no-scrollbar overflow-y-auto">
              {prevPrompts.map((value, index) => (
                <div
                  key={index}
                  onClick={() => loadRecentResult(value)}
                  className=" font-semibold whitespace-nowrap px-2 py-2 hover:bg-zinc-800 cursor-pointer rounded-full flex gap-2 my-1 text-white/80"
                >
                  <p>
                    <LucideMessagesSquare></LucideMessagesSquare>
                  </p>
                  <p className=" text-sm"> {value?.slice(0, 15)}</p>
                </div>
              ))}
            </div>
            <p></p>
          </div>
        )}
      </div>

      <div className=" flex flex-col gap-4 text-sm mx-auto w-[65%]">
        <div className=" flex  gap-5  ">
          <p>
            <CircleHelp size={20}></CircleHelp>
          </p>
          <p> {isOpen && <p>Help</p>}</p>
        </div>
        <div className=" flex gap-5  ">
          <p>
            <Settings size={20}></Settings>
          </p>
          {isOpen && <p>Setting</p>}
        </div>
        <div className=" flex gap-5">
          <p>
            <ListRestart size={20}></ListRestart>
          </p>
          {isOpen && <p>Activity</p>}
        </div>
      </div>
    </div>
  );
}

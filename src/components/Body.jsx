"use client";
import { Context } from "@/context.jsx/ContextProvider";
import { CircleUserRound, Compass, Send } from "lucide-react";
import React, { useContext } from "react";

export default function Body() {
  const {
    submit,
    setInput,
    input,
    result,
    displayResult,
    recentPrompts,
    shidebarShow,
    setSidebarShow,
  } = useContext(Context);
  console.log(shidebarShow, "body");
  return (
    !shidebarShow && (
      <div className=" md:w-[100%] w-auto relative p-5 text-white/80 h-[100vh]">
        <div className=" flex justify-between">
          <div className=" font-bold flex items-center   text-l text-white/60">
            <p>DevX AI</p>
            <img src="/dev-x.png" className=" w-16" alt="" />
          </div>
          <div>
            <CircleUserRound
              size={38}
              className=" text-white/80"
            ></CircleUserRound>
          </div>
        </div>
        {!displayResult ? (
          <>
            <div className=" my-10 mt-[5rem]">
              <h1 className=" md:text-4xl text-2xl text-center text-white/70  font-extrabold ">
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-500 to-red-500 ">
                  I&apos;m DevX AI
                </span>
                <br />
                What can I assist you with right now?
              </h1>
            </div>
            <div className=" hidden md:grid grid-cols-4 gap-5 w-[70%] mx-auto">
              <div className=" hover:scale-105 transition duration-200 h-48 p-5 relative bg-zinc-900 w-48 rounded-2xl">
                <p className=" text-sm">
                  Redefining what&apos;s possible, together
                </p>
                <p className=" absolute bottom-4 right-4">
                  <Compass size={40}></Compass>
                </p>
              </div>
              <div className=" hover:scale-105 transition duration-200 h-48 p-5 relative bg-zinc-900 w-48 rounded-2xl">
                <p className=" text-sm">
                  Catalyst for innovation, architect of the future.
                </p>
                <p className=" absolute bottom-4 right-4">
                  <Compass size={40}></Compass>
                </p>
              </div>
              <div className=" hover:scale-105 transition duration-200 h-48 p-5 relative bg-zinc-900 w-48 rounded-2xl">
                <p className=" text-sm">
                  Revolutionizing industries, amplifying human capabilities,
                  shaping a brighter tomorrow
                </p>
                <p className=" absolute bottom-4 right-4">
                  <Compass size={40}></Compass>
                </p>
              </div>
              <div className=" hover:scale-105 transition duration-200 h-48 p-5 relative bg-zinc-900 w-48 rounded-2xl">
                <p className=" text-sm">
                  Where data meets destiny: in the heart of AI.
                </p>
                <p className=" absolute bottom-4 right-4">
                  <Compass size={40}></Compass>
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="md:p-5 p-0 overflow-hidden ">
            <div className="flex items-center gap-4">
              <CircleUserRound></CircleUserRound>
              <p className=" font-bold">{recentPrompts}</p>
            </div>
            <div className=" h-[62vh]  md:flex md:flex-row flex-col md:px-10 p-0 overflow-y-auto my-4 flex items-start gap-4">
              {/* <img src="/dev-x.png" className=" w-12" alt="dev x logo logo" /> */}
              <p
                dangerouslySetInnerHTML={{ __html: result }}
                className=" text-wrap  text-white/90"
              ></p>
            </div>
          </div>
        )}

        <form action={submit}>
          <div className=" bg-zinc-900 absolute bottom-10 px-5 left-[18px]  rounded-full md:w-[90%] w-[90%]   mx-auto items-center flex justify-between">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className=" md:text-start md:py-5 py-2 bg-transparent w-[90%] outline-none "
              placeholder="Your prompt here"
            />
            <p
              onClick={submit}
              className=" hover:text-white text-white/50 rounded-full  text-2xl cursor-pointer"
            >
              <Send type="submit"></Send>
            </p>
          </div>
        </form>
        <div className=" absolute bottom-2 md:left-[25%] left-[18%">
          <p className=" md:text-xs text-[7px] text-center">
            Response is coming from gimini API, so double-check its responses.
            <span className=" mx-1 underline cursor-pointer">
              This project is under deblopment phase.
            </span>
          </p>
        </div>
      </div>
    )
  );
}

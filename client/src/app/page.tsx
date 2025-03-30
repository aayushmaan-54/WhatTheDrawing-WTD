"use client";
import { useRef } from "react";
import AvatarBuilder from "./_components/avatar-builder";


export default function Home() {
  const inputRef = useRef(null);

  return (
    <>
      <div className="doodle-big-border mt-24 px-3 py-2 sm:px-5 sm:py-4">
        <AvatarBuilder />

        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Enter your Name"
            ref={inputRef}
            className="doodle-border font-bold text-xl px-2 w-[80vw] sm:w-[50vw] md:w-[400px]"
          />
          <div className="w-full mt-5">
            <button className="doodle-button thick-lined w-full mb-2 text-lg font-bold bg-primary text-white">Play</button>
            <button className="doodle-button thick-dashed w-full text-lg font-bold">Create Room</button>
          </div>
        </div>
      </div>
    </>
  );
}
